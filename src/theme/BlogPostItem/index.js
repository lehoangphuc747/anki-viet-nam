import React from 'react';
import OriginalBlogPostItem from '@theme-original/BlogPostItem';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import SupportFooter from '@site/src/components/BlogPost/SupportFooter';

// BlogCard moved to @BlogPage/BlogCard

export default function BlogPostItem(props) {
  // const frontMatter = props?.frontMatter || {};
  // const metadata = props?.metadata || {};

  // const postTitle = frontMatter.title || 'Untitled Post';
  // const permalink = metadata.permalink || '#';

  return (
    <>
      {/* Render the original blog post */}
      <OriginalBlogPostItem {...props} />

      <SupportFooter />
    </>
  );
}
