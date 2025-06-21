import React from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { articleContentZh } from '../data/articleContentZh'

const ArticleContentZh: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          className="prose prose-lg prose-slate max-w-none
            prose-headings:text-slate-800 
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:text-center
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-200 prose-h2:pb-2
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-4
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-r
            prose-strong:text-slate-800 prose-strong:font-semibold
            prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
            prose-pre:bg-slate-900 prose-pre:text-slate-100
            prose-a:text-blue-600 prose-a:hover:text-blue-800
            prose-ul:my-4 prose-ol:my-4
            prose-li:my-2
            prose-table:w-full
            prose-thead:bg-slate-50
            prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border-b prose-th:border-slate-200
            prose-td:p-3 prose-td:border-b prose-td:border-slate-100
            prose-tr:hover:bg-slate-50"
        >
          {articleContentZh}
        </ReactMarkdown>
      </div>
    </motion.div>
  )
}

export default ArticleContentZh
