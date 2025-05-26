import React from 'react';
import styles from './styles.module.css';
import SupportButton from '../SupportButton';

const FeatureList = [
  {
    description: (
      <>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '2rem', 
          fontSize: '1.8rem',
          fontWeight: '700',
          background: 'linear-gradient(45deg, #2b2b2b, #1a1a1a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          letterSpacing: '-0.5px',
          lineHeight: '1.4'
        }}>
          Đang gặp lỗi hay vấn đề gì đó đúng khômmmmm? Bấm nút bên dưới nà!!!.
        </div>
        <div style={{ textAlign: 'center' }}>
          <a 
            href="https://m.me/tui.la.phuc747" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.supportButton}
          >
            NHẮN MÌNH
          </a>
        </div>
      </>
    ),
  },
];

/* Original features commented out
const FeatureList = [
  {
    title: 'Tự động hóa học tập',
    Svg: require('@site/static/img/automation.svg').default,
    description: (
      <>
        Anki giúp bạn học tập hiệu quả thông qua phương pháp lặp lại cách quãng, giúp bạn nhớ lâu dài.
      </>
    ),
  },
  {
    title: 'Cộng đồng hỗ trợ mạnh mẽ',
    Svg: require('@site/static/img/group.svg').default,
    description: (
      <>
        Cộng đồng Anki Việt Nam luôn sẵn sàng hỗ trợ bạn trong việc học và sử dụng phần mềm.
      </>
    ),
  },
  {
    title: 'Tài nguyên phong phú',
    Svg: require('@site/static/img/resources.svg').default,
    description: (
      <>
        Cộng đồng Anki Việt Nam cung cấp các tài nguyên học tập miễn phí và hữu ích để bạn bắt đầu học ngay.
      </>
    ),
  },
];
*/

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <SupportButton />
          </div>
        </div>
      </div>
    </section>
  );
}
