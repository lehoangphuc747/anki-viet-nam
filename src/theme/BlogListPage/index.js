import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BlogCard from '@theme/BlogCard';
import styles from './styles.module.css';

const DEFAULT_THUMBNAIL = '/img/default-thumbnail.webp';

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
      <div className={styles.filterBar}>
        <div className={styles.filterGroup}>
          <h4 className={styles.filterTitle}>DANH MỤC</h4>
          <div className={styles.categoryGroups}>
            {Object.keys(categoryMap).map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${activeCategory === category ? styles.activeButton : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className={styles.blogGrid}>
        {filteredItems.map((item, index) => (
          <BlogCard 
            key={index}
            title={item.content.metadata.title}
            description={item.content.frontMatter.description || ''}
            image={item.content.frontMatter.image || DEFAULT_THUMBNAIL}
            date={new Date(item.content.metadata.date).toLocaleDateString('vi-VN')}
            category={item.content.frontMatter.category || (item.content.frontMatter.tags && item.content.frontMatter.tags[0]) || 'Chưa phân loại'}
            link={item.content.metadata.permalink}
            readingTime={item.content.metadata.readingTime}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className={styles.pagination}>
        <div className={styles.paginationLinks}>
          <span className={`${styles.pageLink} ${styles.activePage}`}>1</span>
          <span className={styles.pageLink}>2</span>
          <span className={styles.ellipsis}>...</span>
          <span className={styles.pageLink}>17</span>
          <span className={styles.pageLink}>›</span>
        </div>
      </div>
    </Layout>
  );
}

export default BlogListPage;
