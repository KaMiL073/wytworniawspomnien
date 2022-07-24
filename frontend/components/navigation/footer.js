import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={`flex flex-col md:flex-row items-center max-w-screen-xl m-auto py-8  ${styles.footer}`}>
      <div className="w-4/12 relative h-full">
        <Link href="/">
          <a href="/" className={`flex-none ${styles.logo}`}>
            <Image
              src="/static/logo.svg"
              alt="Wytwórnia Wspomnień"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </Link>
      </div>
      <div className="w-4/12">
        <div className="flex">
          <div className="w-1/2">
            <Link href="/">
                <a href="/" className={`flex-none ${styles.icon}`}>
                  <Image
                    src="/static/fb.svg"
                    alt="Wytwórnia Wspomnień"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
          </div>
          <div className="w-1/2">
              <Link href="/">
                <a href="/" className={`flex-none ${styles.icon}`}>
                  <Image
                    src="/static/in.svg"
                    alt="Wytwórnia Wspomnień"
                    layout="fill"
                    objectFit="contain"
                  />
                </a>
              </Link>
            
          </div>
        </div>
      </div>
      <div className="w-4/12 ">
        <p>@ Wytwórnia Wspomnień</p>
      </div>
    </footer>
  );
}
