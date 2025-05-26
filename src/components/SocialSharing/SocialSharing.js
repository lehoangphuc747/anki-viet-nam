import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import styles from './SocialSharing.module.css';

const SOCIAL_SHARE_URLS = {
  facebook: (url) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
};

const SocialSharing = ({
  title = 'Chia sẻ bài viết với cộng đồng của bạn!',
  iconColor = 'var(--ifm-color-emphasis-800)',
  iconSize = '1.5rem',
  pageUrl,
  postTitle,
  showShare = true,
}) => {
  // Handle copy link action
  const handleCopyLink = () => {
    navigator.clipboard.writeText(pageUrl);
    alert('Đã copy link vào clipboard!');
  };

  return (
    <div className={styles.socialSharing}>
      <hr className={styles.separator} />
      <p className={styles.inviteText}>{title}</p>
      <div className={styles.shareButtons}>
        {showShare && (
          <a
            href={SOCIAL_SHARE_URLS.facebook(pageUrl)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareButton}
            style={{ color: iconColor, fontSize: iconSize }}
            aria-label="Chia sẻ lên Facebook">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        )}
        <button
          onClick={handleCopyLink}
          className={`${styles.shareButton} ${styles.copyButton}`}
          style={{ color: iconColor, fontSize: iconSize }}
          aria-label="Copy link">
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  );
};

// Define default props
SocialSharing.propTypes = {
  title: PropTypes.string,
  iconColor: PropTypes.string,
  iconSize: PropTypes.string,
  pageUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string,
  showShare: PropTypes.bool,
};

export default SocialSharing;
