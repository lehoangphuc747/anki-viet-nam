import React from 'react';

export default function VideoPlayer({ src, controls = true, autoplay = false, loop = false }) {
  return (
    <div className="video-container">
      <video
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        className="custom-video"
      >
        <source src={src} type="video/mp4" />
        Trình duyệt của bạn không hỗ trợ video.
      </video>
    </div>
  );
}