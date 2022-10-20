import Image from 'next/image';
import Layout from '../components/layouts/layout';

import Decor from '../components/elements/decor';
import HeaderDecor from '../components/elements/headerDecor';
import styles from '../styles/About.module.scss';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

export default function coontact() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <section className={styles.aboutSection}>
        <Decor />
        <div className={`flex ${styles.content}`}>
          <div className="flex relative w-full h-60 md:h-[30rem]">
            <Image
              src="/static/aboutSection.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="lg:w-2/4 xl:w-3/12 px-8 2xl:px-0 text-center">
            <h1>Kontakt</h1>
            <HeaderDecor />
            <p>
              Jeśli podobają się wam moje prace i chcecie porozmawiać,
              zapytać o ofertę lub wolny termin to zapraszam do kontaktu ze mną.
              Proszę opiszcie dokładnie czego oczekujecie ode mnie.
              Im bardziej szczegółowo przedstawicie mi wasze zapytanie
              tym bardziej wyczerpującą odpowiedź będę w stanie
              wam zapewnić. Proszę abyście pisali do mnie od razu na &quot;ty&quot; :)
            </p>
            <p>
              Email:
              <br />
              Telefon:
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}