import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Anki Việt Nam
        </Heading>
        <p className="hero__subtitle">
          Cùng nhau học hỏi và chia sẻ kinh nghiệm sử dụng Anki
        </p>
        <div className={styles.buttons} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', width: '100%' }}>
          {/* Nút đầu tiên */}
          <Link className="button button--secondary button--lg" style={{ width: '200px', textAlign: 'center' }} to="/docs/khai-pha-suc-manh-nao-bo-goi-nho-chu-dong-lap-lai-ngat-quang-anki">
            Hướng dẫn 
          </Link>
          {/* Nút thứ hai */}
          <Link className="button button--secondary button--lg" style={{ width: '200px', textAlign: 'center' }} to="/blog">
            Bộ thẻ
          </Link>
          {/* Nút thứ ba */}
          <Link className="button button--secondary button--lg" style={{ width: '200px', textAlign: 'center' }} to="/download">
            Tải xuống
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Chào mừng bạn đến với ${siteConfig.title}`}
      description="Mô tả website được đặt bên dưới thẻ <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
