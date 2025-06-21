import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Clock, User, ChevronDown, ChevronUp } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articleContent } from '../data/articleContent'

const ArticleContent: React.FC = () => {
  const [isLoading] = useState(false) // No longer need loading since content is imported
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set([0]))

  const parseArticleContent = (content: string) => {
    // Split by chapter headers
    const chapterRegex = /^(# .+|## Chapter \d+:.+)$/gm
    const sections: Array<{ title: string; content: string }> = []
    
    // Find all chapter matches
    const matches = Array.from(content.matchAll(chapterRegex))
    
    if (matches.length === 0) {
      // If no chapters found, return the entire content as one section
      return [{ title: 'The Token Epoch', content }]
    }
    
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i]
      const title = match[0].replace(/^#+\s*/, '') // Remove markdown headers
      const startIndex = match.index!
      const endIndex = i < matches.length - 1 ? matches[i + 1].index! : content.length
      const sectionContent = content.slice(startIndex, endIndex).trim()
      
      sections.push({
        title,
        content: sectionContent
      })
    }
    
    return sections
  }

  const toggleSection = (index: number) => {
    const newExpanded = new Set(expandedSections)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedSections(newExpanded)
  }

  const sections = parseArticleContent(articleContent)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Article Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Book className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
          The Token Epoch: Rethinking Economics of AI Labor from Man-Days to Mega-Token-Hours
        </h1>
        
        <div className="flex items-center justify-center space-x-6 text-slate-600">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            <span>Xuchen Yao</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            <span>25 min read</span>
          </div>
          <div className="flex items-center">
            <Book className="w-4 h-4 mr-2" />
            <span>6 Chapters</span>
          </div>
        </div>
      </motion.div>

      {/* Article Sections */}
      <div className="space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            {/* Section Header */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full p-6 text-left hover:bg-slate-50 transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-slate-600">
                    {index === 0 
                      ? "Introduction and overview" 
                      : `${Math.ceil(section.content.length / 200)} min read`
                    }
                  </p>
                </div>
                <div className="ml-4">
                  {expandedSections.has(index) ? (
                    <ChevronUp className="w-6 h-6 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-400" />
                  )}
                </div>
              </div>
            </button>

            {/* Section Content */}
            {expandedSections.has(index) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <div className="border-t border-slate-200 pt-6">
                  <div className="prose prose-slate max-w-none prose-lg">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        // Style tables properly
                        table: ({ children }) => (
                          <div className="overflow-x-auto my-8">
                            <table className="min-w-full divide-y divide-slate-300 bg-white shadow-sm rounded-lg border border-slate-200">
                              {children}
                            </table>
                          </div>
                        ),
                        thead: ({ children }) => (
                          <thead className="bg-slate-50">
                            {children}
                          </thead>
                        ),
                        tbody: ({ children }) => (
                          <tbody className="divide-y divide-slate-200 bg-white">
                            {children}
                          </tbody>
                        ),
                        th: ({ children }) => (
                          <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900 uppercase tracking-wider">
                            {children}
                          </th>
                        ),
                        td: ({ children }) => (
                          <td className="px-6 py-4 whitespace-normal text-sm text-slate-700">
                            {children}
                          </td>
                        ),
                        // Style other elements
                        h1: ({ children }) => (
                          <h1 className="text-3xl font-bold text-slate-800 mt-8 mb-6">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3">
                            {children}
                          </h3>
                        ),
                        h4: ({ children }) => (
                          <h4 className="text-lg font-semibold text-slate-800 mt-4 mb-2">
                            {children}
                          </h4>
                        ),
                        p: ({ children }) => (
                          <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                            {children}
                          </p>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="border-l-4 border-indigo-400 pl-6 my-6 italic text-slate-700 bg-indigo-50 py-4 rounded-r-lg">
                            {children}
                          </blockquote>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside text-slate-700 mb-4 space-y-2">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-slate-700 leading-relaxed">
                            {children}
                          </li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-slate-800">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic text-slate-700">
                            {children}
                          </em>
                        ),
                        code: ({ children }) => (
                          <code className="bg-slate-100 text-slate-800 px-2 py-1 rounded text-sm">
                            {children}
                          </code>
                        ),
                        pre: ({ children }) => (
                          <pre className="bg-slate-800 text-white p-4 rounded-lg overflow-x-auto mb-4">
                            {children}
                          </pre>
                        )
                      }}
                    >
                      {section.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Article Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center p-8 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl border border-slate-200"
      >
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Continue Exploring</h3>
        <p className="text-slate-600 mb-6">
          Dive deeper into the Token Epoch through our interactive visualizations and calculators above.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors duration-200"
          >
            <h4 className="font-semibold text-slate-800 mb-2">Evolution Timeline</h4>
            <p className="text-sm text-slate-600">Explore the journey from horsepower to tokens</p>
          </button>
          
          <button
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors duration-200"
          >
            <h4 className="font-semibold text-slate-800 mb-2">Cost Calculator</h4>
            <p className="text-sm text-slate-600">Compare traditional vs AI service costs</p>
          </button>
          
          <button
            onClick={() => document.getElementById('future')?.scrollIntoView({ behavior: 'smooth' })}
            className="p-4 bg-white rounded-xl border border-slate-200 hover:border-indigo-300 transition-colors duration-200"
          >
            <h4 className="font-semibold text-slate-800 mb-2">Future Scenarios</h4>
            <p className="text-sm text-slate-600">Envision the 1 TT/s world</p>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ArticleContent
