import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
// import SocialSharing from '@site/src/components/SocialSharing/SocialSharing';
import SupportButton from '@site/src/components/SupportButton';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTag } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

export function BlogCard({ item, defaultThumbnail }) {
  const { content: { frontMatter, metadata }, content } = item;
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
              <FontAwesomeIcon icon={faCalendarAlt} className={styles.icon} />
              <span>{new Date(date).toLocaleDateString('vi-VN')}</span>
            </div>
            {tags.length > 0 && (
              <div className={styles.tags}>
                <FontAwesomeIcon icon={faTag} className={styles.icon} />
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

export default function BlogPostItem(props) {
  // const frontMatter = props?.frontMatter || {};
  // const metadata = props?.metadata || {};

  // const postTitle = frontMatter.title || 'Untitled Post';
  // const permalink = metadata.permalink || '#';

  return (
    <>
      {/* Render the original blog post */}
      <OriginalBlogPostItem {...props} />

      {/* Add Social Sharing section */}
      <BrowserOnly>
        {() => {
          // const pageUrl = `${window.location.origin}${permalink}`;
          return (
            <>
              {/* <SocialSharing
                title="Chia sẻ bài viết với cộng đồng của bạn!"
                iconColor="var(--ifm-color-emphasis-800)"
                iconSize="1.8rem"
                pageUrl={pageUrl}
                postTitle={postTitle}
              /> */}
              <hr />
              <SupportButton />
            </>
          );
        }}
      </BrowserOnly>
    </>
  );
}
