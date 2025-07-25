'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300">
              © {currentYear} 嘉豪. 保留所有权利.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/jiahao6635"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaEnvelope className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <nav className="flex flex-wrap justify-center space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2 md:mb-0">
                首页
              </Link>
              <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2 md:mb-0">
                项目
              </Link>
              <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2 md:mb-0">
                博客
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-2 md:mb-0">
                联系我
              </Link>
            </nav>
            
            <p className="text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
              使用 Next.js 和 Tailwind CSS 构建
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 