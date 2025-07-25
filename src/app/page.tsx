'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">你好，我是</span>
              <span className="block text-blue-600 dark:text-blue-500">嘉豪</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              全栈开发者 | 开源爱好者 | 技术博主
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  查看我的项目
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link href="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  联系我
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase">关于我</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              热爱技术，专注创新
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              我是一名热爱编程的全栈开发者，专注于创建高效、可靠且用户友好的应用程序。
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">全栈开发</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  精通前端和后端技术，能够独立开发完整的 Web 应用程序。熟悉 React、Next.js、Node.js、Java、Python、Rust 等多种技术栈。
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">高效解决问题</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  具有强大的分析能力和解决问题的技巧，能够快速定位并解决复杂的技术问题。
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">开源贡献</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  积极参与开源社区，为多个项目贡献代码，相信开源精神能够推动技术进步。
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">持续学习</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                  保持对新技术的好奇心，不断学习和尝试新的开发工具和方法，追求技术卓越。
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 dark:text-blue-500 font-semibold tracking-wide uppercase">技能</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              我的技术栈
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">前端技术</h3>
                <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'].map((skill) => (
                    <div key={skill} className="bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-5 text-center">
                      <p className="text-gray-900 dark:text-white font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">后端技术</h3>
                <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {['Node.js', 'Java', 'Python', 'Rust'].map((skill) => (
                    <div key={skill} className="bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-5 text-center">
                      <p className="text-gray-900 dark:text-white font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">开发工具</h3>
                <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                  {['Git', 'GitHub', 'VS Code', 'Docker', 'CI/CD', 'Jest', 'Webpack'].map((skill) => (
                    <div key={skill} className="bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-5 text-center">
                      <p className="text-gray-900 dark:text-white font-medium">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-200 font-semibold tracking-wide uppercase">联系我</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              让我们一起合作
            </p>
            <p className="mt-4 max-w-2xl text-xl text-blue-200 lg:mx-auto">
              如果您有项目想要讨论，或者只是想打个招呼，请随时联系我。
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                  联系我
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/jiahao6635" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
