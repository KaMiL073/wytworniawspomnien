import Image from 'next/image';
import Link from 'next/link';
import HeaderDecor from '../elements/headerDecor';
import Decor from '../elements/decor';

import styles from './styles/heroSections.module.scss';

export default function heroSections() {
  return (
    <section className={styles.heroSections}>
      <Decor />
      <div className={`md:flex items-center ${styles.content}`}>
        <div className="md:w-1/2 relative">
          <h1>
          Fotografia ślubna i rodzinna 
            <br />
            {' '}
            – Gdańsk i okolice
          </h1>
          <HeaderDecor />
          <p>
            Choć wytwórnia której jestem właścicielem nie znajduje
            się w słonecznej Kalifornii,
            a swoją wielkością nie przyćmiewa takich gigantów
            jak Paramount czy Warner Bross, to muszę Wam zdradzić,
            że z całą pewnością będziecie się mogli poczuć u mnie,
            jak prawdziwe gwiazdy rodem z Hollywood :)
          </p>

          <div className={styles.groupBtn}>
            <Link href="/kontakt">
              <a className={styles.btn} href="/">Umów sie na sesje </a>
            </Link>
            <Link href="/portfolio">
              <a className={styles.btn} href="/">Portfolio</a>
            </Link>
          </div>
        </div>
        <div className={`md:w-1/2`}>
          <div className={`flex relative w-full h-60 ${styles.heroImges}`}>
            <Image
              src="/static/home-hero.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
