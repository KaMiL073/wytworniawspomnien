import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DropdownSubmenu from './header/dropdownSubmenu';

import styles from '../../styles/Header.module.scss';

export default function Header() {
  const submenuGenericClasses = 'uppercase font-bold text-sm invisible absolute -left-full xl:visible xl:relative xl:left-auto xl:flex xl:flex-grow xl:flex-row xl:space-x-10 xl:justify-end';
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [submenuClasses, setSubmenuClasses] = useState(submenuGenericClasses);
  const mobileMenuToggle = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
    const mobileMenuClasses = 'absolute bg-white top-24 w-3/4 h-screen uppercase font-bold';
    if (!isMobileMenuActive) {
      setSubmenuClasses(`${styles.submenu} ${mobileMenuClasses} right-0 opacity-100`);
    } else {
      setSubmenuClasses(`${styles.submenu} ${mobileMenuClasses} -left-full opacity-0 invisible`);
    }
  };

  const OfertaSubmenu = [
    { href: '/oferta-1', title: 'Oferta 1' },
    { href: '/oferta-2', title: 'Oferta 2' },
  ];

  return (
    <>
      <nav className="w-full sticky top-0 z-40 bg-white">
        <div className={`${styles.navigation} px-4 xl:px-0`}>
          <div className="flex max-w-screen-xl h-full mx-2 items-center justify-between xl:mx-auto">
            <Link href="/">
              <a href="/" className={`flex-none ${styles.logo}`}>
                <Image src="//static/logo.svg" alt="DKS" layout="fill" objectFit="contain" />
              </a>
            </Link>
            <div>
              <ul className={submenuClasses}>
                <li><Link href="/"><a href="/">Home</a></Link></li>
                <li><Link href="/"><a href="/">O mnie </a></Link></li>
                <li><Link href="/"><a href="/">Portfolio</a></Link></li>
                <li>
                  <DropdownSubmenu elements={OfertaSubmenu} label="Oferta" />
                </li>
                <li><Link href="/"><a href="/">Blog</a></Link></li>
                <li><Link href="/"><a href="/">Kontakt</a></Link></li>
              </ul>
            </div>
            <button
              type="button"
              className={`xl:hidden ${styles.hamburger} ${isMobileMenuActive ? styles.active : ''}`}
              onClick={mobileMenuToggle}
              onKeyPress={mobileMenuToggle}
              aria-label="navigation"
            >
              <span />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
