import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Tự động hóa học tập',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Anki giúp bạn học tập hiệu quả thông qua phương pháp lặp lại cách quãng, giúp bạn nhớ lâu dài.
      </>
    ),
  },
  {
    title: 'Cộng đồng hỗ trợ mạnh mẽ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Cộng đồng Anki Việt Nam luôn sẵn sàng hỗ trợ bạn trong việc học và sử dụng phần mềm.
      </>
    ),
  },
  {
    title: 'Tài nguyên phong phú',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Cộng đồng Anki Việt Nam cung cấp các tài nguyên học tập miễn phí và hữu ích để bạn bắt đầu học ngay.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
