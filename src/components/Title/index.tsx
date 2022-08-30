import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Logo from '../../../static/img/vloxy_logo.svg';

import styles from './styles.module.css';

const Title = (props: {size: number}) => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className={styles.container}>
      <Logo width={props.size} height={props.size}/>
      <h1 style={{ fontSize: `${props.size * 0.75}px` }} className={styles.title}>{siteConfig.title}</h1>
    </div>
  );
};

export default Title;