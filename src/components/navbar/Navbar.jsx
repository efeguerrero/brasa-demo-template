import { React, useRef, useState } from 'react';
import MenuIcon from './menuIcon/MenuIcon';

//Logo url in public and alt text
const logo = '/assets/icons/logo.svg';
const logoAlt = 'Website Logo';

//Component Imports
import Link from './link/Link.jsx';
import Socials from './socials/Socials';

//links Import
import links from './links';

//Styles Import
import styles from './navbar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refDrawer = useRef(null);
  const menuToggle = () => {
    refDrawer.current.classList.toggle(`${styles.drawerActive}`);
    setIsOpen((prev) => !prev);
    // document.body.classList.toggle('no-scroll');
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navIcons}>
        <a href="/">
          <img src={logo} alt={logoAlt} className={styles.navLogo} />
        </a>
        <div className={styles.linksContainerDesktop}>
          {links.map((link) => {
            return <Link url={link.url} linkName={link.name} />;
          })}
        </div>
        <MenuIcon menuToggle={menuToggle} isOpen={isOpen} />
      </div>
      <div ref={refDrawer} className={styles.drawer}>
        <div className={styles.linksContainerDrawer}>
          {links.map((link) => {
            return (
              <Link
                url={link.url}
                linkName={link.name}
                menuToggle={menuToggle}
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
