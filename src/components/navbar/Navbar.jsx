import React, { useRef, useState } from 'react';
import MenuIcon from './menuIcon/MenuIcon';

//Logo url in public and alt text

import logo from '/src/icons/brand/logo.svg';
const logoAlt = 'Website Logo';

//Component Imports
import Link from './link/Link.jsx';
import Socials from './socials/Socials';

//links Import
import links from './links';

//Styles Import
import styles from './navbar.module.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refDrawer = useRef(null);
  const refGrayCanva = useRef(null);
  const menuToggle = () => {
    refDrawer.current.classList.toggle(`${styles.drawerActive}`);
    setIsOpen((prev) => !prev);
    document.body.classList.toggle('noScroll');
    refGrayCanva.current.classList.toggle(`${styles.grayCanvaActive}`);
  };

  return (
    <nav className={styles.navContainer}>
      <div ref={refGrayCanva} className={styles.grayCanva}></div>
      <div className={styles.navIcons}>
        <a href="/">
          <img src={logo} alt={logoAlt} className={styles.navLogo} />
        </a>
        <div className={styles.linksContainerDesktop}>
          {links.map((link, index) => {
            return <Link url={link.url} linkName={link.name} key={index} />;
          })}
        </div>
        <MenuIcon menuToggle={menuToggle} isOpen={isOpen} />
      </div>
      <div ref={refDrawer} className={styles.drawer}>
        <div className={styles.linksContainerDrawer}>
          {links.map((link, index) => {
            return (
              <Link
                url={link.url}
                linkName={link.name}
                menuToggle={menuToggle}
                key={index}
              />
            );
          })}
        </div>
        <div className={styles.socialsContainer}>
          <Socials />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
