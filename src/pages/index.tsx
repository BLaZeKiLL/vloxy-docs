import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const Svg = require('@site/static/img/vloxy_logo.svg').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="card">
        <div className="card__body">
          <div className="row">
            <Svg className={styles.logo} role="img" />
            <div className={clsx('col', styles.vloxy_title)}>
              <h1 className="hero__title">{siteConfig.title}</h1>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/docs/introduction">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
