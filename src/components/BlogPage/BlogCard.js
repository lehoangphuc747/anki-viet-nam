import React from 'react';
import Link from '@docusaurus/Link';
import styles from '@site/src/theme/BlogPostItem/styles.module.css';

export default function BlogCard({ item, defaultThumbnail }) {
  const { content: { frontMatter, metadata } } = item;
  const { title, description, image, date, tags = [] } = frontMatter;
  const { permalink } = metadata;

  return (
    <div className={styles.card}>
      <Link to={permalink} className={styles.cardLink}>
        <div className={styles.imageContainer}>
          <img
            src={image || defaultThumbnail}
            alt={title}
            className={styles.image}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultThumbnail;
            }}
          />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.meta}>
            <div className={styles.date}>
              <span>{new Date(date).toLocaleDateString('vi-VN')}</span>
            </div>
            {tags.length > 0 && (
              <div className={styles.tags}>
                {tags.map((tag, index) => (
                  <span key={index} className={`${styles.tag} ${styles[`tag-${tag.toLowerCase()}`]}`}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}


