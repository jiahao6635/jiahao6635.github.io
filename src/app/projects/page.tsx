'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// 项目数据
const projects = [
  {
    id: 1,
    title: 'HeyGem Web 平台',
    description: '基于 Python 的 Web 平台，提供数据分析和可视化功能，帮助用户理解和处理复杂数据。',
    image: '/placeholder.svg',
    tags: ['Python', 'Data Analysis', 'Web Development'],
    github: 'https://github.com/jiahao6635/HeyGemWeb',
    demo: 'https://heygem-demo.vercel.app',
  }
];

// 所有标签的集合
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // 根据选中的标签过滤项目
  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            我的项目
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            这些是我最近完成的一些项目，展示了我的技能和经验。
          </p>
        </div>

        {/* 标签过滤器 */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
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
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedTag === tag
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* 项目网格 */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <FaGithub className="mr-2" />
                    源代码
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    在线演示
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 如果没有匹配的项目 */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">没有找到匹配的项目。</p>
          </div>
        )}

        {/* 联系 CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            对我的项目感兴趣？
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            如果您想了解更多关于我的项目或讨论潜在的合作机会，请随时联系我。
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              联系我
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 