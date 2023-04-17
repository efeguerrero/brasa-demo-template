import React from 'react';

import styles from './link.module.scss';

const Link = ({ url, linkName, menuToggle }) => {
  return (
    <a className={styles.link} href={url} onClick={() => menuToggle()}>
      {linkName}
    </a>
  );
};

export default Link;
