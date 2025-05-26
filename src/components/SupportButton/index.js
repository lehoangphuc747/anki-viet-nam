import React from 'react';
import styles from './styles.module.css';

export default function SupportButton() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
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
        Báo lỗi, góp ý, hỗ trợ, hỏi đáp,... thậm chí tư vấn tâm lý, tình cảm, etc
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
    </div>
  );
} 