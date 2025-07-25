'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 这里模拟表单提交，实际应用中应该发送到后端 API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('表单数据:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError('提交表单时出错。请稍后再试。');
      console.error('表单提交错误:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            联系我
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            有问题或项目想法？请随时与我联系。
          </p>
        </div>

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-12 lg:mb-0"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">联系信息</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div className="ml-3 text-base">
                    <p className="font-medium text-gray-900 dark:text-white">电子邮件</p>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">your-email@example.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaPhone className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div className="ml-3 text-base">
                    <p className="font-medium text-gray-900 dark:text-white">电话</p>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">+86 123 4567 8910</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="h-6 w-6 text-blue-600 dark:text-blue-500" />
                  </div>
                  <div className="ml-3 text-base">
                    <p className="font-medium text-gray-900 dark:text-white">地址</p>
                    <p className="mt-1 text-gray-500 dark:text-gray-400">北京市朝阳区</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">在社交媒体上关注我</h3>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/jiahao6635"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">发送消息</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-4">
                  <div className="flex">
                    <div>
                      <p className="text-green-800 dark:text-green-200 font-medium">
                        感谢您的留言！我会尽快回复您。
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      姓名
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      电子邮件
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      主题
                    </label>
                    <div className="mt-1">
                      <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      >
                        <option value="">请选择...</option>
                        <option value="general">一般咨询</option>
                        <option value="project">项目合作</option>
                        <option value="job">工作机会</option>
                        <option value="other">其他</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      消息
                    </label>
                    <div className="mt-1">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4">
                      <div className="flex">
                        <div>
                          <p className="text-red-800 dark:text-red-200 text-sm">{error}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? '提交中...' : '发送消息'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 