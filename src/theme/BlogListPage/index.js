import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const DEFAULT_THUMBNAIL = '/img/default-thumbnail.webp';

function SimpleCard({ post }) {
  const { content: { frontMatter, metadata } } = post;
  const title = frontMatter.title || metadata.title;
  const description = frontMatter.description || '';
  const link = metadata.permalink;
  const date = new Date(metadata.date).toLocaleDateString('vi-VN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
  const category = frontMatter.category || (frontMatter.tags && frontMatter.tags[0]) || 'Chưa phân loại';
  const image = frontMatter.image || DEFAULT_THUMBNAIL;
  const readingTime = metadata.readingTime;

  return (
    <div className="card-blog">
      <div className="card-image">
        <Link to={link}>
          <img src={image} alt={title} />
        </Link>
        {category && <span className="card-category">{category}</span>}
      </div>
      <div className="card-content">
        <h3 className="card-title">
          <Link to={link}>{title}</Link>
        </h3>
        {description && <p className="card-description">{description}</p>}
        <div className="card-meta">
          <span>{date}</span>
          {readingTime && <span> • {Math.ceil(readingTime)} phút đọc</span>}
        </div>
      </div>
    </div>
  );
}

function BlogListPage({ items }) {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const categoryMap = {
    'Tất cả': 'all',
    'Tiếng Anh': 'english', 
    'Tiếng Nhật': 'japanese',
    'Tiếng Trung': 'chinese',
    'Tiếng Hàn': 'korean',
    'Y Dược': 'medical',
    'THPT': 'thpt',
    'THCS': 'thcs',
    'Mẫu thẻ': 'template',
    'Khác': 'khac'
  };

  // Filtered items based on category
  const filteredItems = items.filter(({ content: { frontMatter } }) => {
    if (activeCategory === 'Tất cả') return true;

      const itemCategory = frontMatter.category || 'Chưa phân loại';
    const itemTags = (frontMatter.tags || []).map(tag => tag.toLowerCase());
    
    return itemCategory === activeCategory || 
           itemTags.includes(categoryMap[activeCategory]?.toLowerCase());
  });

  return (
    <Layout title="Tất cả bộ thẻ" description="Các bộ thẻ Anki được chia sẻ bởi cộng đồng">
      {/* Simple Header */}
      <header className="blog-header">
        <h1>Chào mừng bạn đến với Anki Việt Nam</h1>
        <p>Dưới đây là các bộ thẻ đã chia sẻ của cộng đồng!</p>
      </header>

      {/* Category Filter */}
      <div className="category-filter">
        <h4>DANH MỤC</h4>
        <div className="filter-buttons">
          {Object.keys(categoryMap).map((category) => (
                <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
                  >
              {category}
                  </button>
                ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blog-grid">
        {filteredItems.map((item, index) => (
          <SimpleCard key={index} post={item} />
        ))}
      </div>

      <style jsx>{`
        .blog-header {
          text-align: center;
          padding: 2rem 1rem;
          margin-bottom: 2rem;
          background: linear-gradient(to right, #f0f4ff, #ffe6f7);
          border-radius: 8px;
        }
        
        .category-filter {
          margin: 2rem 0;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .filter-buttons button {
          padding: 0.5rem 1rem;
          background: #f5f5f5;
          border: 1px solid #e0e0e0;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .filter-buttons button:hover {
          background: #e0e0e0;
        }
        
        .filter-buttons button.active {
          background: #db272a;
          color: white;
          border-color: #db272a;
        }
        
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .card-blog {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
        }
        
        .card-blog:hover {
          transform: translateY(-5px);
        }
        
        .card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        
        .card-blog:hover .card-image img {
          transform: scale(1.05);
        }
        
        .card-category {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #db272a;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 4px;
          font-size: 0.8rem;
        }
        
        .card-content {
          padding: 1.5rem;
        }
        
        .card-title {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        
        .card-title a {
          color: #333;
          text-decoration: none;
        }
        
        .card-title a:hover {
          color: #db272a;
        }
        
        .card-description {
          color: #666;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .card-meta {
          color: #888;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}

export default BlogListPage;
