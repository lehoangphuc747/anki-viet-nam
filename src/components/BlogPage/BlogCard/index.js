import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const BlogCard = ({ item, defaultThumbnail }) => {
  const { content } = item;
  const { metadata, frontMatter } = content;
  
  const title = metadata.title;
  const description = frontMatter.description || '';
  const image = frontMatter.image || defaultThumbnail;
  const date = new Date(metadata.date).toLocaleDateString('vi-VN');
  const category = frontMatter.category || (frontMatter.tags && frontMatter.tags[0]) || 'Chưa phân loại';
  const link = metadata.permalink;
  const readingTime = metadata.readingTime;

  const getCategoryColor = (cat) => {
    const categoryColors = {
      'Tiếng Anh': 'bg-blue-600',
      'Tiếng Nhật': 'bg-pink-600',
      'Tiếng Trung': 'bg-red-600',
      'Tiếng Hàn': 'bg-purple-600',
      'Tiếng Pháp': 'bg-indigo-600',
      'Y Dược': 'bg-green-600',
      'THPT': 'bg-orange-600',
      'THCS': 'bg-yellow-600',
      'Mẫu thẻ': 'bg-red-500',
      'template': 'bg-red-500',
      'Khác': 'bg-gray-600'
    };
    const matchedKey = Object.keys(categoryColors).find(key => 
      cat.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cat.toLowerCase())
    );
    return categoryColors[matchedKey] || 'bg-gray-700';
  };

  const categoryColorClass = getCategoryColor(category);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
      <div className="relative w-full h-48 overflow-hidden">
        <Link to={link}>
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultThumbnail;
            }}
          />
        </Link>
        <span className={`absolute top-4 right-4 ${categoryColorClass} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <Link to={link} className="no-underline">
          <h4 className="text-xl font-semibold text-gray-800 mb-2 leading-tight hover:text-blue-600 transition-colors">
            {title}
          </h4>
        </Link>
        {description && (
          <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>{date}</span>
          {readingTime && (
            <span>{Math.ceil(readingTime)} phút đọc</span>
          )}
        </div>
        <Link 
          to={link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200 hover:underline no-underline"
        >
          Xem thêm
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
