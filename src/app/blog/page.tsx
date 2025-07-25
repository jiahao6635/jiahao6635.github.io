'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendar, FaTag, FaSearch } from 'react-icons/fa';

// 博客文章数据
const blogPosts = [
  {
    id: 1,
    title: 'Rust 性能优化技巧',
    excerpt: '分享在 Rust 项目中提高性能的实用技巧，包括内存管理、并发编程和编译优化。',
    date: '2023-08-10',
    author: '嘉豪',
    category: 'Rust',
    tags: ['Rust', '性能优化', '系统编程'],
    slug: 'rust-performance-optimization-tips',
  }
];

// 所有标签的集合
const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
// 所有分类的集合
const allCategories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 根据搜索查询、标签和分类过滤博客文章
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesTag && matchesCategory;
  });

  // 格式化日期
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            我的博客
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            分享我对技术、编程和开发的见解和经验。
          </p>
        </div>

        {/* 搜索栏 */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="搜索文章..."
            />
          </div>
        </div>

        {/* 筛选器 */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            {/* 分类筛选 */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">按分类筛选:</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedCategory === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  全部
                </button>
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* 标签筛选 */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">按标签筛选:</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    selectedTag === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  全部
                </button>
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      selectedTag === tag
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 博客文章列表 */}
        <div className="mt-12 grid gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500">
                  {post.title}
                </h2>
              </Link>
              <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                <FaCalendar className="mr-1" />
                <span>{formatDate(post.date)}</span>
                <span className="mx-2">•</span>
                <FaTag className="mr-1" />
                <span>{post.category}</span>
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-medium"
                >
                  阅读更多 →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 如果没有匹配的文章 */}
        {filteredPosts.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">没有找到匹配的文章。</p>
          </div>
        )}

        {/* 订阅 CTA */}
        <div className="mt-20 bg-blue-50 dark:bg-blue-900 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              订阅我的博客更新
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              获取最新的技术文章和教程，直接发送到您的邮箱。
            </p>
            <div className="mt-8 max-w-xl mx-auto">
              <form className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  电子邮件地址
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                  placeholder="输入您的邮箱"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    订阅
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 