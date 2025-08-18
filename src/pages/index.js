import React, { useState, useEffect } from 'react';
import { Search, Moon, Sun, BookOpen, Users, Download, MessageSquare, Facebook, Menu, X, LifeBuoy } from 'lucide-react';
import Link from '@docusaurus/Link';
import styles from './HomePage.module.css'; // Import file CSS Module
import SearchBar from '@theme/SearchBar';
import Layout from '@theme/Layout';

// Dữ liệu giả, bạn có thể thay thế
const navLinks = [
  { name: 'Về tụi', to: '/about' },
  { name: 'Hướng dẫn', to: '/docs' },
  { name: 'Tất cả bộ thẻ', to: '/blog' },
  { name: 'Lanki Hub', to: '/lang-ki' },
];

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Force light mode
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark');
    
    // Lưu preference vào localStorage
    localStorage.setItem('theme', 'light');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Force light mode khi người dùng cố gắng chuyển sang dark mode
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <Layout>
      <div className={styles.appContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>Chào mừng đến với Anki Việt Nam</h1>
            <p className={styles.heroSubtitle}>
              Nền tảng học tập và chia sẻ kiến thức Anki toàn diện, giúp bạn chinh phục mọi mục tiêu học tập.
            </p>
            <div className={styles.heroActions}>
              <a href="/docs/intro" className={`${styles.button} ${styles.buttonPrimary}`}>
                <BookOpen size={20} /> Hướng Dẫn Sử Dụng
              </a>
              <Link to="/blog" className={`${styles.button} ${styles.buttonSecondary}`}>
                <Users size={20} /> Khám Phá Bộ Thẻ
              </Link>
              <a href="https://apps.ankiweb.net/" className={`${styles.button} ${styles.buttonSecondary}`} target="_blank" rel="noopener noreferrer">
                <Download size={20} /> Tải Anki
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Tại sao chọn Anki Việt Nam?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrapper}><BookOpen size={32} /></div>
                <h3 className={styles.featureTitle}>Bộ sưu tập thẻ đồ sộ</h3>
                <p>Truy cập hàng ngàn bộ thẻ chất lượng cao được biên soạn kỹ lưỡng.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrapper}><Users size={32} /></div>
                <h3 className={styles.featureTitle}>Cộng đồng hỗ trợ</h3>
                <p>Tham gia cộng đồng năng động, chia sẻ kinh nghiệm và nhận giúp đỡ.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIconWrapper}><LifeBuoy size={32} /></div>
                <h3 className={styles.featureTitle}>Hướng dẫn chi tiết</h3>
                <p>Tài liệu hướng dẫn từ cơ bản đến nâng cao để bạn tận dụng tối đa Anki.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className={styles.communitySection}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Tham Gia Cộng Đồng & Nhận Hỗ Trợ</h2>
            <p className={styles.sectionSubtitle}>
              Có câu hỏi, góp ý hay cần hỗ trợ? Đừng ngần ngại liên hệ hoặc tham gia thảo luận cùng chúng tôi!
            </p>
            <div className={styles.communityActions}>
               <a href="https://www.facebook.com/tui.la.phuc747/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonRed}`}>
                  <MessageSquare size={20} /> Gửi Tin Nhắn
              </a>
              <a href="https://www.facebook.com/groups/ankivocabulary/" target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.buttonBlue}`}>
                  <Facebook size={20} /> Tham Gia Nhóm
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
