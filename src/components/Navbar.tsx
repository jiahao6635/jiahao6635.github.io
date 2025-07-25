'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                <FaGithub className="h-6 w-6" />
                <span>嘉豪的个人网站</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              首页
            </Link>
            <Link href="/projects" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              项目
            </Link>
            <Link href="/blog" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              博客
            </Link>
            <Link href="/contact" className="px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              联系我
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            首页
          </Link>
          <Link href="/projects" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            项目
          </Link>
          <Link href="/blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            博客
          </Link>
          <Link href="/contact" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
            联系我
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 