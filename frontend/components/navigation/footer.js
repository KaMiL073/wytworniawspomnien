import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`flex flex-col md:flex-row items-center max-w-screen-xl m-auto py-8 ${styles.footer}`}>
      <div className="w-4/12 flex items-center">
        <Link href="/">
          <a className={styles.logo} href="/">
            <Image src="//static/logo.svg" alt="Wytwórnia Wspomnień" layout="fill" objectFit="contain" />
          </a>
        </Link>
      </div>
      <div className="w-4/12">
        <div className="flex flex-row justify-center space-x-4">
          <div className="h-14 w-14 relative">
            <Link href="https://www.facebook.com/Wytworniawspomnienpl/">
              <a target="_blank" href="https://www.facebook.com/Wytworniawspomnienpl/" rel="noreferrer">
                <Image src="//static/fb.svg" alt="Wytwórnia Wspomnień" layout="fill" objectFit="contain" />
              </a>
            </Link>
          </div>
          <div className="h-14 w-14 relative">
            <Link href="https://www.instagram.com/wytworniawspomnien.pl/">
              <a target="_blank" href="https://www.instagram.com/wytworniawspomnien.pl/" rel="noreferrer">
                <Image src="//static/in.svg" alt="Wytwórnia Wspomnień" layout="fill" objectFit="contain" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-4/12 items-center text-right">
        <p>@ Wytwórnia Wspomnień</p>
      </div>
    </footer>
  );
}
