import React, { useState } from 'react';
import OriginalTOC from '@theme-original/TOC';

export default function TOCWrapper(props) {
  const [open, setOpen] = useState(false);

  // Nếu không có TOC thì không render gì cả
  if (!props.toc || props.toc.length === 0) return null;

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 10,
          background: '#eee',
          border: 'none',
          borderRadius: '50%',
          width: 28,
          height: 28,
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1.1rem',
        }}
        aria-label={open ? 'Ẩn mục lục' : 'Hiện mục lục'}
        title={open ? 'Ẩn mục lục' : 'Hiện mục lục'}
      >
        {open ? '←' : '→'}
      </button>
      {open && (
        <div>
          <OriginalTOC {...props} />
        </div>
      )}
    </div>
  );
}
