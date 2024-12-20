import React from 'react';
import './YouTubeEmbed.css';

export default function YouTubeEmbed({ videoId, title = "YouTube video" }) {
  return (
    <div className="youtube-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}