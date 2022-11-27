import Image from 'next/image';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
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
          <div className={`flex relative w-full ${styles.imageAbout}`}>
            <Image
              src="/static/kontakt.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="lg:w-2/4 px-8 2xl:px-0 text-center">
            <h1>Kontakt</h1>
            <p>
              <HeaderDecor />
              Jeśli podobają się wam moje prace i chcecie porozmawiać,
              zapytać o ofertę lub wolny termin to zapraszam do kontaktu ze mną.
              Proszę opiszcie dokładnie czego oczekujecie ode mnie.
              Im bardziej szczegółowo przedstawicie mi wasze zapytanie
              tym bardziej wyczerpującą odpowiedź będę w stanie
              wam zapewnić. Proszę abyście pisali do mnie od razu na &quot;ty&quot; :)
            </p>
            <p>
              <EmailIcon className="w-6 h-6 mr-2 mb-2" />
              {' '}
              kontakt@wytworniawspomnien.pl
              <br />
              <LocalPhoneIcon className="w-6 h-6 mr-2 mb-2" />
              {' '}
              +48 452 540 070
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
