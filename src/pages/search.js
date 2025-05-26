import React from 'react';

export default function CustomSearchPage() {
  return (
    <main style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '2rem',
      backgroundColor: '#f9f9f9',
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔍 Tìm kiếm</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>Trang tìm kiếm đang được phát triển...</p>
    </main>
  );
}