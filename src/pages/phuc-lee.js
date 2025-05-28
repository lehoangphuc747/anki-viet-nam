import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './phuc-lee.module.css';

const currentYear = new Date().getFullYear();

export default function PhucLeePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    return () => {
      document.body.classList.remove('dark-mode');
    };
  }, [darkMode]);

  return (
    <Layout title="Về Lê Hoàng Phúc" description="Giới thiệu về Lê Hoàng Phúc, biệt danh Tiếng Hàn Phúc Lee, kinh nghiệm giảng dạy, học bổng và quản trị cộng đồng Anki.">
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Lê Hoàng Phúc</h1>
          <p>Tiếng Hàn Phúc Lee</p>
        </header>
        <div className={styles.profileImageContainer}>
          <img src="/img/tieng-han-phuc-lee.jpg" alt="Tiếng Hàn Phúc Lee" className={styles.profileImage}
            onError={e => { e.target.onerror = null; e.target.src = 'https://placehold.co/250x250/CCCCCC/333333?text=Image+Not+Found'; }} />
        </div>
        <section id="gioi-thieu" className={styles.card}>
          <h2>Giới thiệu chung</h2>
          <p>Xin chào, mình là <strong>Lê Hoàng Phúc</strong>, còn được biết đến với biệt danh <strong>Tiếng Hàn Phúc Lee</strong>. Mình từng nhận <strong>học bổng trao đổi sinh viên toàn phần</strong> tại <strong>Đại học Wonkwang</strong>, <strong>học bổng KF Samsung</strong> và hiện tại, mình đang theo học chương trình <strong>thạc sĩ ngành Quản trị Kinh doanh (MBA)</strong> tại <strong>Đại học Quốc gia Kangwon</strong> với <strong>học bổng GCS (Global Chuncheon Scholarship)</strong> – một <strong>học bổng toàn phần do thành phố Chuncheon tài trợ</strong> dành cho sinh viên quốc tế xuất sắc.</p>
        </section>
        <section id="thong-tin-ca-nhan" className={styles.card}>
          <h2>Thông tin cá nhân</h2>
          <ul>
            <li><strong>Nơi sinh sống:</strong> Thành phố Đà Lạt, mảnh đất đầy thơ mộng và lãng mạn.</li>
            <li><strong>Chuyên ngành:</strong> Tốt nghiệp chuyên ngành <strong>Hàn Quốc học</strong> tại <strong>Trường Đại học Đà Lạt</strong>.</li>
            <li><strong>Năm sinh:</strong> 2001.</li>
            <li><strong>Cung hoàng đạo:</strong> Cự Giải ♋.</li>
            <li><strong>Học bổng:</strong>
              <ul>
                <li>Học bổng trao đổi sinh viên toàn phần – Đại học <strong>Wonkwang</strong>, Hàn Quốc.</li>
                <li>Học bổng <strong>KF Samsung</strong>.</li>
                <li><strong>(Hiện tại)</strong> Học bổng GCS (Global Chuncheon Scholarship) – Học bổng toàn phần hệ thạc sĩ do thành phố Chuncheon tài trợ, tại Đại học Quốc gia <strong>Kangwon</strong>.</li>
              </ul>
            </li>
          </ul>
        </section>
        <section id="kinh-nghiem" className={styles.card}>
          <h2>Kinh nghiệm</h2>
          <ul>
            <li><strong>Quản trị cộng đồng:</strong> Admin của nhóm <strong>Anki Việt Nam</strong> với hơn <strong>40.000 thành viên</strong>.</li>
            <li><strong>Hướng dẫn sử dụng Anki:</strong> Với khoảng <strong>3 năm kinh nghiệm</strong>, đã hướng dẫn và hỗ trợ hơn <strong>100 người</strong> làm chủ công cụ học tập Anki hiệu quả.</li>
            <li><strong>Giảng dạy Tiếng Hàn:</strong> Từng giảng dạy tại <strong>Trường Hàn ngữ Việt - Hàn Kanata</strong> (gần 1 năm), chia sẻ kiến thức ngôn ngữ và văn hóa Hàn Quốc.</li>
            <li><strong>Phiên dịch và Hành chính:</strong> Từng làm việc tại <strong>Viện King Sejong Đà Lạt</strong> (6 tháng).</li>
            <li><strong>Quản lý và Điều hành:</strong> Quản lý nhà hàng và điều hành tour cho công ty Hàn Quốc (3 tháng).</li>
          </ul>
        </section>
        <section id="chia-se" className={styles.card}>
          <h2>Đôi lời chia sẻ</h2>
          <p>Là một người trẻ yêu thích ngôn ngữ, mình luôn cố gắng giúp mọi người hiểu thêm về <strong>ngôn ngữ và văn hóa Hàn Quốc</strong>. Từ những ngày còn học tại Đà Lạt, mình đã mơ ước mang những điều thú vị về Hàn Quốc đến với cộng đồng.</p>
          <blockquote>Đối với mình, học ngôn ngữ không chỉ là học cách nói mà còn là <strong>hiểu văn hóa, con người, và cả cách tư duy</strong>.</blockquote>
          <p>Mình cũng là một người rất yêu thích công cụ học tập hiệu quả, đặc biệt là <strong>Anki</strong>. Mình bắt đầu sử dụng Anki từ những năm đầu đại học (2019), và cho đến nay, nó vẫn là một phần không thể thiếu trong hành trình học của mình. Nhờ có Anki, mình cảm thấy việc ghi nhớ từ vựng, cấu trúc và kiến thức chuyên ngành trở nên <strong>tiện hơn, dễ hơn và hiệu quả hơn rất nhiều</strong>.</p>
        </section>
        <section id="lien-he" className={styles.card}>
          <h2>Liên hệ với mình</h2>
          <p>Nếu bạn có chung đam mê về Hàn Quốc học, ngôn ngữ Hàn Quốc, Anki, hoặc chỉ đơn giản muốn kết bạn, hãy liên hệ với mình qua các kênh sau:</p>
          <ul className={styles.contactLinks}>
            <li className={styles.facebook}><a href="https://www.facebook.com/tui.la.phuc747/" target="_blank" rel="noopener noreferrer">Facebook: Lê Hoàng Phúc</a></li>
            <li><a href="mailto:lehoangphuc7477@gmail.com">Email: lehoangphuc7477@gmail.com</a></li>
          </ul>
        </section>
        <button
          className={styles.themeToggleButton}
          title="Chuyển chế độ sáng/tối"
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </Layout>
  );
}
