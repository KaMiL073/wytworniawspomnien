import Link from 'next/link';
import styles from './styles/ctaSection.module.scss';

export default function CtaSection() {
  return (
    <section className={`w-full max-h-screen relative py-8 mt-4 ${styles.ctaSection}`}>
      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
        <div className="w-1/2">
          <p className="text-3xl">Fotografia ślubna i rodzinna – Gdańsk i okolice</p>
        </div>
        <div className="w-1/2">
          <Link href="/kontakt">
            <a className={styles.btn} href="/">Umów sie na sesje </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
