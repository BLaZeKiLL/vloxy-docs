import React from 'react';
import clsx from 'clsx';

import Link from '@docusaurus/Link';

import Layout from '@theme/Layout';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Title from '@site/src/components/Title';

import styles from './index.module.css';


function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="card">
        <div className="card__body">
          <div>
            <Title size={100}/>

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
