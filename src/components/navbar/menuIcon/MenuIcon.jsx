import { React, useRef, useEffect } from 'react';
import styles from './menuIcon.module.scss';

const MenuIcon = ({ menuToggle, isOpen }) => {
  const menuIcon = useRef(null);

  const classes = isOpen
    ? `${styles.menuIconActive} ${styles.menuIcon}`
    : styles.menuIcon;

  return (
    <div className={classes} ref={menuIcon} onClick={() => menuToggle()}>
      <div></div>
    </div>
  );
};

export default MenuIcon;
