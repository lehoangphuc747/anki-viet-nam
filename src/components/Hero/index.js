import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Chào mừng đến với <span className={styles.highlight}>Anki Việt Nam</span>
        </h1>
        <p className={styles.heroSubtitle}>
          Nền tảng chia sẻ bộ thẻ Anki miễn phí và cộng đồng học tập sôi động
        </p>
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <FontAwesomeIcon icon={faBook} className={styles.statIcon} />
            <div className={styles.statContent}>
              <span className={styles.statNumber}>100+</span>
              <span className={styles.statLabel}>Bộ thẻ</span>
            </div>
          </div>
          <div className={styles.statItem}>
            <FontAwesomeIcon icon={faUsers} className={styles.statIcon} />
            <div className={styles.statContent}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>Thành viên</span>
            </div>
          </div>
        </div>
        <div className={styles.heroButtons}>
          <a href="/blog" className={clsx(styles.heroButton, styles.primaryButton)}>
            Khám phá bộ thẻ
          </a>
          <a href="/docs/intro" className={clsx(styles.heroButton, styles.secondaryButton)}>
            Hướng dẫn sử dụng
          </a>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img src="/img/hero-image.webp" alt="Anki Việt Nam" />
      </div>
    </div>
  );
} 