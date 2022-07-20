import PropTypes from 'prop-types';
import Image from 'next/image'
import Link from 'next/link'
import HeaderDecor from '../elements/headerDecor';
import DecorRight from '../elements/decorRight';

import styles from './styles/aboutSection.module.scss';

export default function aboutSection() {
    return (
        <section className={styles.aboutSection}>
                        <DecorRight />

            <div className={`flex ${styles.content}`}>
                <div className={`md:w-9/12`}>
                    <Image
                    src="/static/aboutSection.webp"
                    alt="Picture of the author"
                    width={875}
                    height={628}
                    />
                </div>
                <div className="md:w-3/12 mt-16 md:mt-0">
                    <h2>Tu Tomek, Fotograf z Gdańska</h2>
                    <HeaderDecor />
                    <p>Zapraszam Cię na wspaniałą fotograficzną przygodę, 
                        w której to ty będziesz jej częścią. 
                        Zapraszam Cię zarówno na plenerową sesję rodzinną, 
                        sesję ciążową jak i sesję narzeczeńską. 
                        Wykonam dla Ciebie także reportaż z chrztu świętego.</p>
                    <Link href="/">
                        <a className={styles.btn} href="/">Więcje</a>
                    </Link>
               </div>
            </div>
        </section >
    );
}