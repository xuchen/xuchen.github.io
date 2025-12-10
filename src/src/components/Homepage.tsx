import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, FileText, GraduationCap, PenTool } from 'lucide-react'

const Homepage: React.FC = () => {
  const academicDegrees = [
    "PhD in NLP, Johns Hopkins University, 2014",
    "MSc in Computational Linguistics, Saarland University, 2010", 
    "MA in Arts, University of Groningen, 2009",
    "BSc in Acoustics, Nanjing University, 2006"
  ]

  const featuredArticles = [
    {
      title: "Programmatic SEO Case Study: Deploying 12,000 Static Pages for Free",
      url: "https://www.linkedin.com/pulse/programmatic-seo-case-study-deploying-12000-static-pages-xuchen-yao-2zxsc/",
      date: "12/9/2025"
    },
    {
      title: "How My Voice AI Negotiated a $1,630 Insurance Quote After Calling 11 Companies in 2 Hours",
      url: "https://www.linkedin.com/pulse/how-my-voice-ai-negotiated-1630-insurance-quote-after-xuchen-yao-mrnmc/",
      date: "1/14/2025"
    },
    {
      title: "Touring the world: Meta Ray-Ban glasses is the perfect copilot for drivers, parents, and sports",
      url: "https://www.linkedin.com/pulse/touring-world-meta-ray-ban-glasses-perfect-copilot-drivers-xuchen-yao-qzm1c/",
      date: "10/24/2024"
    },
    {
      title: "How Your Contact Info from LinkedIn and Email Gets Sold for $0.2~$0.8 a Piece",
      url: "https://www.linkedin.com/pulse/how-your-contact-info-from-linkedin-email-gets-sold-0208-xuchen-yao-fcpfc/",
      date: "11/18/2024"
    },
    {
      title: "$5 to $60 per hour: A breakdown in the real cost of human agents vs. AI agents in phone answering services",
      url: "https://www.linkedin.com/pulse/5-60-per-hour-breakdown-real-cost-human-agents-vs-ai-phone-xuchen-yao-6kbac/",
      date: "10/14/2024"
    },
    {
      title: "GenAI Appointment Booking: from Dogfooding to Production",
      url: "https://www.linkedin.com/pulse/genai-appointment-booking-from-dogfooding-production-xuchen-yao-uvrsc/",
      date: "6/17/2024"
    },
    {
      title: "The Superpower of \"en-US\": \"en\" vs. the under-represented languages",
      url: "https://www.linkedin.com/pulse/superpower-en-us-en-vs-under-represented-languages-xuchen-yao-61vmf",
      date: "5/6/2024"
    },
    {
      title: "Traveling the world: Pokémon Go & Google Gemini help explore and explain the physical world",
      url: "https://www.linkedin.com/pulse/traveling-world-pok%25C3%25A9mon-go-google-gemini-help-explore-xuchen-yao-cfqoc/",
      date: "4/15/2024"
    },
    {
      title: "The Tipping Point and How GitHub Did It",
      url: "https://www.linkedin.com/pulse/tipping-point-how-github-did-xuchen-yao/",
      date: "9/9/2020"
    },
    {
      title: "Minimalistic Product Design: the Margherita Pizza Principle",
      url: "https://www.linkedin.com/pulse/minimalistic-product-design-margherita-pizza-principle-xuchen-yao/",
      date: "8/19/2020"
    }
  ]

  const academicPublications = [
    {
      authors: "Xuchen Yao, Guoguo Chen, Kenji Sagae, and Daniel Li",
      title: "The new paradigm for human-bot communication",
      venue: "TechCrunch",
      year: "2016"
    },
    {
      authors: "Xuchen Yao",
      title: "Lean Question Answering over Freebase from Scratch",
      venue: "Proceedings of NAACL Demo Track. Denver, Colorado, USA",
      year: "2015"
    },
    {
      authors: "Ellie Pavlick, Juri Ganitkevitch, Tsz Ping Chan, Xuchen Yao, Ben Van Durme and Chris Callison-Burch",
      title: "Domain-Specific Paraphrase Extraction",
      venue: "Proceedings of ACL short. Beijing, China",
      year: "2015"
    },
    {
      authors: "Xuchen Yao, Jonathan Berant and Benjamin Van Durme",
      title: "Freebase QA: Information Extraction or Semantic Parsing?",
      venue: "Proceedings of ACL Workshop on Semantic Parsing. Baltimore, MD, USA",
      year: "2014"
    },
    {
      authors: "Xuchen Yao and Benjamin Van Durme",
      title: "Information Extraction over Structured Data: Question Answering with Freebase",
      venue: "Proceedings of ACL. Baltimore, MD, USA",
      year: "2014"
    },
    {
      authors: "Xuchen Yao",
      title: "Feature-driven Question Answering With Natural Language Alignment",
      venue: "PhD Dissertation. Johns Hopkins University. Baltimore, MD, USA",
      year: "2014"
    },
    {
      authors: "Travis Wolfe and Benjamin Van Durme and Mark Dredze and Nicholas Andrews and Charley Beller and Chris Callison-Burch and Jay DeYoung and Justin Snyder and Jonathan Weese and Tan Xu and Xuchen Yao",
      title: "PARMA: A Predicate Argument Aligner",
      venue: "Proceedings of ACL short. Sofia, Bulgaria",
      year: "2013"
    },
    {
      authors: "Xuchen Yao, Benjamin Van Durme and Peter Clark",
      title: "Automatic Coupling of Answer Extraction and Information Retrieval",
      venue: "Proceedings of ACL short. Sofia, Bulgaria",
      year: "2013"
    },
    {
      authors: "Xuchen Yao, Benjamin Van Durme, Chris Callison-Burch and Peter Clark",
      title: "Semi-Markov Phrase-based Monolingual Alignment",
      venue: "Proceedings of EMNLP. Seattle, Washington, USA",
      year: "2013"
    },
    {
      authors: "Xuchen Yao, Benjamin Van Durme, Chris Callison-Burch and Peter Clark",
      title: "Answer Extraction as Sequence Tagging with Tree Edit Distance",
      venue: "Proceedings of NAACL. Atlanta, Georgia, USA",
      year: "2013"
    },
    {
      authors: "Xuchen Yao, Benjamin Van Durme, Chris Callison-Burch and Peter Clark",
      title: "A Lightweight and High Performance Monolingual Word Aligner",
      venue: "Proceedings of ACL short. Sofia, Bulgaria",
      year: "2013"
    },
    {
      authors: "Chengzhi Zhang, Xuchen Yao and Chunyu Kit",
      title: "Finding More Bilingual Web Pages with High Credibility via Link Analysis",
      venue: "Proceedings of the 6th Workshop on Building and Using Comparable Corpora (BUCC). Sofia, Bulgaria",
      year: "2013"
    },
    {
      authors: "Peter Clark, Phil Harrison and Xuchen Yao",
      title: "An Entailment-Based Approach to the QA4MRE Challenge",
      venue: "Proc. CLEF 2012 (Conference and Labs of the Evaluation Forum) - QA4MRE (Question Answering for Machine Reading Evaluation) Lab",
      year: "2012"
    },
    {
      authors: "Xuchen Yao, Emma Tosch, Grace Chen, Elnaz Nouri, Ron Artstein, Anton Leuski, Kenji Sagae and David Traum",
      title: "Creating Conversational Characters Using Question Generation Tools",
      venue: "Dialogue and Discourse, Special Issue on Question Generation",
      year: "2012"
    },
    {
      authors: "Xuchen Yao, Gosse Bouma and Yi Zhang",
      title: "Semantics-based Question Generation and Implementation",
      venue: "Dialogue and Discourse, Special Issue on Question Generation",
      year: "2012"
    },
    {
      authors: "Xuchen Yao, Benjamin Van Durme and Chris Callison-Burch",
      title: "Expectations of Word Sense in Parallel Corpora",
      venue: "Proceedings of NAACL. Montreal, Canada",
      year: "2012"
    },
    {
      authors: "Xuchen Yao",
      title: "Generating More Specific Questions",
      venue: "AAAI Symposium on Question Generation",
      year: "2011"
    },
    {
      authors: "Xuchen Yao and Benjamin Van Durme",
      title: "Nonparametric Bayesian Word Sense Induction",
      venue: "Proceedings of TextGraphs-6: Graph-based Methods for Natural Language Processing",
      year: "2011"
    },
    {
      authors: "Xuchen Yao, Pravin Bhutada, Kallirroi Georgila, Kenji Sagae, Ron Artstein and David Traum",
      title: "Practical Evaluation of Speech Recognizers for Virtual Human Dialogue Systems",
      venue: "Proceedings of the Seventh conference on International Language Resources and Evaluation (LREC'10). Malta",
      year: "2010"
    },
    {
      authors: "Xuchen Yao",
      title: "Question Generation with Minimal Recursion Semantics",
      venue: "Master Thesis. Saarland University & University of Groningen",
      year: "2010"
    },
    {
      authors: "Xuchen Yao, Irina Borisova and Mehwish Alam",
      title: "PDTB XML: the XMLization of the Penn Discourse TreeBank 2.0",
      venue: "Proceedings of the Seventh conference on International Language Resources and Evaluation (LREC 10). Malta",
      year: "2010"
    },
    {
      authors: "Xuchen Yao and Yi Zhang",
      title: "Question Generation with Minimal Recursion Semantics",
      venue: "Proceedings of the Third Workshop on Question Generation: Shared Task Evaluation Challenge",
      year: "2010"
    },
    {
      authors: "Xuchen Yao and Gosse Bouma",
      title: "Mining Discourse Treebanks with XQuery",
      venue: "Proceedings of the Ninth International Workshop on Treebanks and Linguistic Theories",
      year: "2010"
    },
    {
      authors: "Xuchen Yao, Jianqiang Ma, Sergio Duarte and Çağrı Çöltekin",
      title: "An Inference-rules based Categorial Grammar Learner for Simulating Language Acquisition",
      venue: "Proc. of The 18th Annual Belgian-Dutch Conference on Machine Learning",
      year: "2009"
    },
    {
      authors: "Xuchen Yao and Jianqiang Ma",
      title: "A Categorial Grammar Analysis of Some Typical Chinese Language Phenomena",
      venue: "Proc. of 10th Chinese National Conference on Computational Linguistics",
      year: "2009"
    },
    {
      authors: "Xuchen Yao, Jianqiang Ma, Sergio Duarte and Çağrı Çöltekin",
      title: "Unsupervised Syntax Learning with Categorial Grammars using Inference Rules",
      venue: "Proceedings of The 14th Student Session of the European Summer School for Logic, Language, and Information",
      year: "2009"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-slate-800">Xuchen Yao</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link 
                  to="/the-token-epoch" 
                  className="text-slate-600 hover:text-slate-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  The Token Epoch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="w-32 h-32 mx-auto mb-6">
            <img 
              src="/images/xuchen_yao_profile.jpg" 
              alt="Xuchen Yao" 
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Xuchen Yao</h1>
          <p className="text-xl text-slate-600 mb-6">I build tech companies</p>
          <p className="text-base text-slate-500 mb-4">Connect with me on <a href="https://www.linkedin.com/in/xuchenyao" className="underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
          <div className="text-lg text-slate-700 space-y-2">
            <p>Now: co-founder/CEO of <a href="https://seasalt.ai" className="text-blue-600 hover:text-blue-800 font-semibold" target="_blank" rel="noopener noreferrer">SEASALT.AI</a></p>
            <p>Was: co-founder/CEO of KITT.AI</p>
          </div>
          
          {/* Token Epoch Featured Link */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 inline-block"
          >
            <Link 
              to="/the-token-epoch"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Featured: The Token Epoch
              <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">New</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Academic Degrees */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-blue-600" />
              Academic Degrees
            </h2>
            <div className="space-y-3">
              {academicDegrees.map((degree, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center text-slate-700"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-4 flex-shrink-0"></div>
                  {degree}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Featured Articles */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <PenTool className="w-6 h-6 mr-3 text-green-600" />
              Featured Articles
            </h2>
            <div className="space-y-4">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
                  className="border-l-4 border-green-500 pl-4 py-2 hover:bg-slate-50 transition-colors rounded-r-lg"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <a 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 hover:text-green-600 font-medium transition-colors inline-flex items-center group"
                      >
                        {article.title}
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </div>
                    <span className="text-sm text-slate-500 ml-4 flex-shrink-0">{article.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Academic Publications */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Academic Publications
            </h2>
            <div className="space-y-6">
              {academicPublications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="border-l-4 border-purple-500 pl-4 py-2"
                >
                  <div className="mb-2">
                    <span className="text-slate-600 text-sm">{pub.authors}</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-slate-800 font-medium">
                      "{pub.title}"
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">
                    {pub.venue}, {pub.year}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-slate-500 border-t border-slate-200 pt-8"
        >
          <p>Made with ❤️ in the city of ☕🌧️✈️💎</p>
          <p className="mt-2">Copyright © 2019-2025. All Rights Reserved.</p>
        </motion.footer>
      </div>
    </div>
  )
}

export default Homepage
