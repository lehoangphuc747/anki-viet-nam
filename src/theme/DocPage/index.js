import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faSearch, 
  faUser, 
  faChevronRight,
  faChevronDoubleLeft
} from '@fortawesome/free-solid-svg-icons';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function DocPage({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('co-ban');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64; // Height of the header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    const sections = document.querySelectorAll('.card');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={styles.main}>
      <aside className={`${styles.sidebar} ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className={styles.sidebarHeader}>
          <img src="/img/vietnam-logo.ico" alt="Anki Logo" className={styles.sidebarLogo} />
          <Link to="/" className={styles.sidebarTitle}>Anki Việt Nam</Link>
        </div>
        <nav className={styles.sidebarNav}>
          <button
            onClick={() => handleSectionClick('co-ban')}
            className={`${styles.sidebarLink} ${activeSection === 'co-ban' ? styles.active : ''}`}
          >
            <span>KIẾN THỨC CƠ BẢN</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button
            onClick={() => handleSectionClick('nang-cao')}
            className={`${styles.sidebarLink} ${activeSection === 'nang-cao' ? styles.active : ''}`}
          >
            <span>KIẾN THỨC NÂNG CAO</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button
            onClick={() => handleSectionClick('faq')}
            className={`${styles.sidebarLink} ${activeSection === 'faq' ? styles.active : ''}`}
          >
            <span>CÂU HỎI THƯỜNG GẶP</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </nav>
        <div className={styles.sidebarFooter}>
          <button onClick={toggleSidebar} className={styles.sidebarToggle}>
            <FontAwesomeIcon icon={faChevronDoubleLeft} className="mr-2" />
            Thu gọn
          </button>
        </div>
      </aside>

      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <nav className={styles.headerNav}>
              <button
                onClick={toggleSidebar}
                className={styles.mobileMenuButton}
                aria-label="Toggle menu"
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
              <div className={styles.navLinks}>
                <Link to="/about" className={styles.navLink}>Về tôi</Link>
                <Link to="/docs" className={styles.navLink}>Hướng dẫn</Link>
                <Link to="/blog" className={styles.navLink}>Tất cả bộ thẻ</Link>
                <Link to="/categories" className={styles.navLink}>Danh mục</Link>
                <Link to="/lang-ki" className={styles.navLink}>Làng Kí</Link>
              </div>
              <div className={styles.headerActions}>
                <div className={styles.searchContainer}>
                  <input
                    type="search"
                    placeholder="Tìm kiếm"
                    className={styles.searchInput}
                  />
                  <span className={styles.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                </div>
                <button className={styles.userButton} aria-label="User account">
                  <FontAwesomeIcon icon={faUser} />
                </button>
              </div>
            </nav>
          </div>
        </header>

        <main className={styles.content}>
          <div className={styles.contentHeader}>
            <h1 className={styles.contentTitle}>Tài Liệu Hướng Dẫn Anki</h1>
            <p className={styles.contentSubtitle}>
              Khám phá mọi thứ bạn cần biết để sử dụng Anki hiệu quả.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <Link to="/docs/co-ban" id="co-ban" className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>I. KIẾN THỨC CƠ BẢN</h2>
                <p className={styles.cardDescription}>
                  Những điều cần biết cho người mới bắt đầu, từ cài đặt đến tạo thẻ đầu tiên.
                </p>
                <span className={styles.cardLink}>Xem chi tiết →</span>
              </div>
            </Link>

            <Link to="/docs/nang-cao" id="nang-cao" className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>II. KIẾN THỨC NÂNG CAO</h2>
                <p className={styles.cardDescription}>
                  Tối ưu hóa việc học với các add-on, tùy chỉnh thẻ, và các chiến lược học tập chuyên sâu.
                </p>
                <span className={styles.cardLink}>Xem chi tiết →</span>
              </div>
            </Link>

            <Link to="/docs/faq" id="faq" className={styles.card}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>III. CÂU HỎI THƯỜNG GẶP (FAQ)</h2>
                <p className={styles.cardDescription}>
                  Giải đáp các thắc mắc phổ biến khi sử dụng Anki.
                </p>
                <span className={styles.cardLink}>Xem chi tiết →</span>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
} 