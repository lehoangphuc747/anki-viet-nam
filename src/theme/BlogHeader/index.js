import React from 'react';
import styles from './styles.module.css';

function BlogHeader() {
  return (
    <header className={styles.blogHeader}>
      <h1>
        Chào mừng bạn đến với <span className={styles.highlight}>Anki Việt Nam</span>
        {/* Để chỉnh màu của phần tử highlight, hãy sửa trong styles.module.css ở BlogHeader*/}
      </h1>
      <p>Dưới đây là các bộ thẻ đã chia sẻ của cộng đồng!</p>
      {/* <button className={styles.ctaButton}>Đăng ký</button> */}
    </header>
  );
}

export default BlogHeader;
