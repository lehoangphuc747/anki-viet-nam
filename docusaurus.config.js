// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anki Việt Nam',
  tagline: 'Cộng đồng Anki Việt Nam',
  favicon: 'img/vietnam-logo.ico',

  // Set the production url of your site here
  url: 'https://ankivn.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lehoangphuc747',  // Tên GitHub của bạn
  projectName: 'anki-viet-nam',        // Tên repository của bạn
  deploymentBranch: 'gh-pages',        // Nhánh deploy

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi', // Đặt ngôn ngữ mặc định là tiếng Việt
    locales: ['vi'],     // Chỉ hỗ trợ tiếng Việt
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        direction: 'ltr', // Hướng văn bản từ trái sang phải
      },
    },
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],


  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  
  
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: 'Danh mục',
          blogSidebarCount: 0,
          sortPosts: 'descending',
          postsPerPage: 100,
          authorsMapPath: 'authors.yml',
          tags: 'tags.yml',
          exclude: ['**/uncategorized/**'],
          routeBasePath: 'blog',
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          blogTitle: 'Tất cả bộ thẻ',
          blogDescription: 'Các bộ thẻ Anki được chia sẻ bởi cộng đồng',
          feedOptions: {
            type: 'all',
            title: 'Anki Việt Nam',
            description: 'Các bộ thẻ Anki được chia sẻ bởi cộng đồng',
            language: 'vi',
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  scripts: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-BVE4ZW13RS',
      async: true,
    },
    {
      src: '/js/gtag-init.js',
      async: true,
    },
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/image-26.webp',
      
      // Add announcement bar
      announcementBar: {
        id: 'announcement',
        content: 'Anki Việt Nam',
        backgroundColor: '#db272a',
        textColor: '#ffffff',
        isCloseable: false,
      },
      
      // Add Algolia search configuration
      algolia: {
        appId: 'P0W1UBODSH',
        apiKey: 'f97d2d0f5c66288fcb6faf8776ac5654', // Search-Only API key
        indexName: 'ankivn',
        contextualSearch: true,
        searchParameters: {},
        placeholder: 'Tìm kiếm...',
        insights: true, // Enable insights
        debug: false,
        // ❌ Xóa dòng này nếu bạn không có trang search tùy chỉnh
        // searchPagePath: 'search',
      },
      
      zoom: {
        selector: '.markdown :not(em) > img', // Áp dụng zoom cho ảnh Markdown
        background: {
          light: 'rgb(255, 255, 255)', // nền trắng khi zoom (light mode)
          dark: 'rgb(50, 50, 50)',     // nền xám khi zoom (dark mode)
        },
        config: {
          margin: 24,
          scrollOffset: 0,
        },
      },

      mermaid: {
        theme: {light: 'neutral', dark: 'forest'}, // Các them khác xem tại đây: https://mermaid.js.org/config/theming.html
      },
      metadata: [
        { name: 'og:title', content: 'Anki Việt Nam - Cộng đồng Anki Việt Nam' },
        { name: 'og:description', content: 'Hướng dẫn sử dụng Anki và chia sẻ bộ thẻ miễn phí.' },
        { name: 'og:image', content: 'https://ankivn.com/img/image-26.webp' },
        { name: 'og:url', content: 'https://ankivn.com' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Anki Việt Nam - Cộng đồng Anki Việt Nam' },
        { name: 'twitter:description', content: 'Hướng dẫn sử dụng Anki và chia sẻ bộ thẻ miễn phí.' },
        { name: 'twitter:image', content: 'https://ankivn.com/img/image-26.webp' },
        { name: 'algolia-site-verification', content: '7592C146168708CB' },
      ],

      // Cho phép thu gọn/mở rộng Sidebar trong giao diện tài liệu: https://docusaurus.io/docs/sidebar#auto-collapse-sidebar-categories
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        title: 'Anki Việt Nam',
        logo: {
          alt: 'Anki Việt Nam Logo',
          src: 'img/vietnam-logo.ico', // Ensure this path is correct and the file exists
        },
        items: [
          { to: '/phuc-lee', label: 'Về tui', position: 'left' },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Hướng dẫn',
          },
          { to: '/blog', label: 'Tất cả bộ thẻ', position: 'left' },
          {
            type: 'dropdown',
            label: 'Danh mục',
            position: 'left',
            items: [
              { to: '/blog/tags/english', label: 'Tiếng Anh' },
              { to: '/blog/tags/chinese', label: 'Tiếng Trung' },
              { to: '/blog/tags/japanese', label: 'Tiếng Nhật' },
              { to: '/blog/tags/korean', label: 'Tiếng Hàn' },
              { to: '/blog/tags/khac', label: 'Khác' },
              { to: '/blog/tags/template', label: 'Mẫu thẻ' },
            ],
          },
          {
            type: 'html',
            position: 'left',
            value: '<a href="https://langki-hub-vn.netlify.app" target="_blank" rel="noopener noreferrer">Langki Hub</a>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Cộng đồng',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/groups/ankivocabulary/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anki Việt Nam. Built with ❤️`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;