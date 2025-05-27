import React from 'react';
import Link from '@docusaurus/Link';

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

  // Category color mapping
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
    
    // Check if category matches any key (case insensitive)
    const matchedKey = Object.keys(categoryColors).find(key => 
      cat.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(cat.toLowerCase())
    );
    
    return categoryColors[matchedKey] || 'bg-gray-700';
  };

  const categoryColorClass = getCategoryColor(category);

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
      {/* Image Section */}
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
        {/* Category Badge */}
        <span className={`absolute top-4 right-4 ${categoryColorClass} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
          {category}
        </span>
      </div>
      
      {/* Content Section */}
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
        
        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <span>{date}</span>
          {readingTime && (
            <span>{Math.ceil(readingTime)} phút đọc</span>
          )}
        </div>
        
        {/* Read More Link */}
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

  return (
    <div className={clsx(styles.blogCard)}>
      {/* Image Section */}
      <div className={styles.blogCardImageWrapper}>
        <Link to={link}>
          <img src={thumbnail} alt={title} className={styles.blogCardImage} />
        </Link>
        {category && (
          <span className={clsx(styles.categoryLabel)}>
            {category}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className={styles.blogCardContent}>
        {/* Title */}
        <h3 className={styles.blogCardTitle}>
          <Link to={link}>{title}</Link>
        </h3>

        {/* Description */}
        {description && (
          <p className={styles.blogCardDescription}>{description}</p>
        )}

        {/* Date and Reading Time */}
        <div className={styles.blogCardMeta}>
          <span className={styles.blogCardDate}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {date}
          </span>
          {readingTime && (
            <span className={styles.blogCardReadingTime}>
              <FontAwesomeIcon icon={faClock} />
              {Math.ceil(readingTime)} phút đọc
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
