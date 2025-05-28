import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { BlogCard } from '@theme/BlogPostItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const DEFAULT_THUMBNAIL = '/img/default-thumbnail.webp';

  // Category mapping and subcategories
const categories = {
  'Tất cả': { id: 'tab-all', subCategories: [] },
    'Ngoại ngữ': { 
    id: 'tab-ngoai-ngu',
    subCategories: [
      { label: 'Tiếng Anh', tag: 'english' },
      { label: 'Tiếng Nhật', tag: 'japanese' },
      { label: 'Tiếng Trung', tag: 'chinese' },
      { label: 'Tiếng Hàn', tag: 'korean' },
      { label: 'Tiếng Pháp', tag: 'france' },
      { label: 'Tiếng Đức', tag: 'germany' },
      { label: 'Tiếng Nga', tag: 'russian' }
    ]
    },
    'Giáo dục': { 
    id: 'tab-giao-duc',
    subCategories: [
      { label: 'THCS', tag: 'thcs' },
      { label: 'THPT', tag: 'thpt' },
      { label: 'Đại học', tag: 'university' }
    ]
    },
    'Chuyên ngành': { 
    id: 'tab-chuyen-nganh',
    subCategories: [
      { label: 'Y Dược', tag: 'medical' },
      { label: 'Công nghệ thông tin', tag: 'cntt' },
      { label: 'Kinh tế', tag: 'kinh-te' }
    ]
    },
    'Mẫu thẻ': { 
      id: 'tab-mau-the',
      subCategories: [],
      tag: 'template'
    },
    'Add-ons': {
      id: 'tab-addons',
      subCategories: [],
      tag: 'addons'
    },
    'Khác': {
      id: 'tab-khac',
      subCategories: [],
      tag: 'khac'
    }
  };

function BlogListPage({ items }) {
  const [activeTab, setActiveTab] = useState('Tất cả');
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveSubCategory(null);
  };

  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory);
  };

  const handleClearFilter = () => {
    setActiveTab('Tất cả');
    setActiveSubCategory(null);
  };

  // Filter logic
  const getFilteredItems = () => {
    if (activeTab === 'Tất cả') {
      return items;
    }

    const categoryConfig = categories[activeTab];
    if (categoryConfig && categoryConfig.tag) {
      // Nếu là tab đặc biệt (Mẫu thẻ, Add-ons, Khác) thì filter theo tag
      return items.filter(({ content: { frontMatter } }) => {
        const tags = (frontMatter.tags || []).map(tag => tag.toLowerCase());
        return tags.includes(categoryConfig.tag);
      });
    }

    // Các tab còn lại (có subCategories)
    return items.filter(({ content: { frontMatter } }) => {
      const category = frontMatter.category || '';
      const tags = (frontMatter.tags || []).map(tag => tag.toLowerCase());

      if (activeSubCategory) {
        return category === activeSubCategory.label ||
          tags.includes(activeSubCategory.tag);
      }

      if (!categoryConfig) return false;

      return categoryConfig.subCategories.some(sub =>
        category === sub.label || tags.includes(sub.tag)
      );
    });
  };

  const filteredItems = getFilteredItems();

  return (
    <Layout title="Tất cả bộ thẻ" description="Các bộ thẻ Anki được chia sẻ bởi cộng đồng">
      <div className={styles.main}>
        <h1 className={styles.title}>
            Chào mừng bạn đến với Anki Việt Nam 👋
          </h1>
        <p className={styles.subtitle}>
            Dưới đây là các bộ thẻ đã chia sẻ của cộng đồng!
          </p>

        <div className={styles.filterContainer}>
          <div className={styles.clearFilterContainer}>
            <button
              onClick={handleClearFilter}
              className={`${styles.clearFilterBtn} ${activeTab !== 'Tất cả' ? styles.active : ''}`}>
              <FontAwesomeIcon icon={faTimes} className={styles.clearFilterIcon} />
              <span>Xóa bộ lọc</span>
            </button>
          </div>

          <div className={styles.tabContainer}>
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                className={`${styles.tabButton} ${activeTab === category ? styles.active : ''}`}
                onClick={() => handleTabClick(category)}>
                {category}
              </button>
            ))}
            </div>

          {categories[activeTab].subCategories.length > 0 && (
            <div className={styles.subCategoryContainer}>
              {categories[activeTab].subCategories.map((subCategory) => (
                <button
                  key={subCategory.tag}
                  className={`${styles.subCategoryLink} ${activeSubCategory?.tag === subCategory.tag ? styles.active : ''}`}
                  onClick={() => handleSubCategoryClick(subCategory)}>
                  {subCategory.label}
                </button>
              ))}
              </div>
            )}
          </div>

        <div className={styles.postGrid}>
            {filteredItems.map((item, index) => (
              <BlogCard 
                key={index}
                item={item}
                defaultThumbnail={DEFAULT_THUMBNAIL}
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
          <div className={styles.noResults}>
            <p>Không tìm thấy bài viết nào phù hợp với bộ lọc hiện tại.</p>
            </div>
          )}
      </div>
    </Layout>
  );
}

export default BlogListPage;
