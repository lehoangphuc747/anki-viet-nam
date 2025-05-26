import React from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

const categories = {
  'Ngoại ngữ': [
    { label: 'Tiếng Anh', tag: 'english' },
    { label: 'Tiếng Trung', tag: 'chinese' },
    { label: 'Tiếng Nhật', tag: 'japanese' },
    { label: 'Tiếng Hàn', tag: 'korean' },
  ],
  'Giáo dục': [
    { label: 'THPT', tag: 'thpt' },
    { label: 'THCS', tag: 'thcs' },
    { label: 'Đại học', tag: 'university' },
  ],
  'Chuyên ngành': [
    { label: 'Y Dược', tag: 'medical' },
  ],
  'Khác': [
    { label: 'Template', tag: 'template' },
    { label: 'Khác', tag: 'khac' },
  ],
};

export default function CategoryGroups() {
  return (
    <div className="category-groups">
      <div className="filter-section">
        <div className="filter-title">Lọc nhanh</div>
        <div className="filter-tags">
          <span className="filter-tag active">Tất cả</span>
          <span className="filter-tag">Mới nhất</span>
          <span className="filter-tag">Phổ biến</span>
        </div>
      </div>

      {Object.entries(categories).map(([groupName, items]) => (
        <div key={groupName} className="category-group">
          <h3 className="category-group-title">{groupName}</h3>
          <div className="category-group-items">
            {items.map(({ label, tag }) => (
              <Link
                key={tag}
                to={`/blog/tags/${tag}`}
                className="category-item"
              >
                {label}
                <span className="category-count">(12)</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 