import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

const DEFAULT_THUMBNAIL = 'http://ankivn.com/img/default-thumbnail.webp';

function BlogCard({ image, title, description, date, category, link, readingTime }) {
  // Sử dụng hình ảnh mặc định nếu không có hình ảnh được chỉ định
  const thumbnail = image || DEFAULT_THUMBNAIL;

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
