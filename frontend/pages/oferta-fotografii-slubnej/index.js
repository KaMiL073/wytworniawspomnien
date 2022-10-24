import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';

// import Decor from '../components/elements/decor';
import HeaderDecor from '../../components/elements/headerDecor';
import Pricing from '../../components/elements/pricing';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Oferta fotografii ślubnej - Wytwórnia Wspomnień';
const DESCRIPTION = 'Zapraszam Cię do zapoznania się z moją ofertą na reportaż ślubny, sesję ślubną, narzeczeńską. Fotografia Trójmiasto, Gdańsk i okolice.';

const pricing1 = [
  {
    label: 'Mini',
    price: 450,
    content: `
        <ul>
            <li><strong>Zdjęcia</strong> <br/> 15</li>
            <li><strong>Odbitki</strong> <br/> 15x23 <br/> jedwabny paier</li>
            <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
        </ul>
        `,
  },
  {
    label: 'Standard',
    price: 600,
    content: `
        <ul>
            <li><strong>Zdjęcia</strong> <br/> 25</li>
            <li><strong>Odbitki</strong> <br/> 15x23 <br/> jedwabny paier</li>
            <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
        </ul>
        `,
  },
  {
    label: 'Premium',
    price: 1100,
    content: `
    <ul>
    <li><strong>Zdjęcia</strong> <br/> <strong>40</strong></li>
    <li><strong>Odbitki</strong> <br/> 15x23 <br/> jedwabny paier</li>
    <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
    <li><strong>Dodatki</strong> <br/> Teczka na odbitki,<strong> presoanlizowany album 20x20, 10 rozkładówek</strong></li>
</ul>
        `,
  },
];

const pricing = [
  {
    label: 'Standard',
    price: 3000,
    content: `
        <ul>
            <li><strong>Zawiera</strong> <br/> Przygotowania, ceremonia, wesele, mini sesja ślubna w dniu ślubu w okolicy Sali weselnej</li>
            <li><strong>Zdjęcia</strong> <br/> 400 </li>
            <li><strong>Odbitki</strong> <br/>50 szt - 13x19 <br/> Jedwabny papier </li>
            <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Pendrive z pudełkiem na odbitki </li>         
        </ul>
        `,
  },
  {
    label: 'Premium',
    price: 4000,
    content: `
      <ul>
        <li><strong>Zawiera</strong> <br/> Przygotowania, ceremonia, wesele, mini sesja w dniu ślubu w okolicy Sali weselnej, pełna sesja ślubna w odrębnym dniu</li>
        <li><strong>Zdjęcia</strong> <br/> 500 </li>
        <li><strong>Odbitki</strong> <br/>100 szt - 13x19 <br/> Jedwabny papier </li>
        <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
        <li><strong>Dodatki</strong> <br/> Pendrive z pudełkiem na odbitki, Personalizowany album 20x20, 20 rozkładówek</li>         
      </ul>
        `,
    pricing: '',
  },
];


const pricing2 = [
  {
    label: 'Standard',
    price: 700,
    content: `
        <ul>
            <li><strong>Zdjęcia</strong> <br/> 30 </li>
            <li><strong>Odbitki</strong> <br/> 13x19 <br/> Jedwabny papier </li>
            <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Teczka na odbitkii </li>         
        </ul>
        `,
  },
  {
    label: 'Premium',
    price: 1200,
    content: `
      <ul>
        <li><strong>Zdjęcia</strong> <br/> 50 </li>
        <li><strong>Odbitki</strong> <br/> 13x19 <br/> Jedwabny papier </li>
        <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
        <li><strong>Dodatki</strong> <br/> Teczka na odbitki, Personalizowany album 20x20, 10 rozkładówek</li>         
      </ul>
        `,
  },
];

export default function Oferta() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <section className={styles.oferta}>

        <div className={styles.content}>
          <h1>Oferta fotografii ślubnej</h1>
          <HeaderDecor />
          <p>
            Witam Was serdecznie!
            Poniżej chciałbym przedstawić Wam moją obecną ofertę na reportaż ślubny
            oraz sesję ślubną i narzeczeńską.
            Oferta została podzielona na pakiety tak, abyście mogli zdecydować
            który będzie dla Was najbardziej odpowiedni.
            Cena reportażu ślubnego dotyczy zdjęć wykonywanych
            do 50km od Gdańsk Południe natomiast cena sesji ślubnych
            i narzeczeńskich do 30km od Gdańsk
            Południe. Jeżeli odległość będzie większa należy doliczyć 1zł za km w jedną stronę.
          </p>
        </div>
      </section>
      <section className={styles.container}>
        <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-0 my-16">
          <div className="md:w-9/12 relative">
            <Image
              src="/static/sesja-narzeczenska.webp"
              alt="Picture of the author"
              width={866}
              height={538}
            />
          </div>
          <div className="md:w-3/12 text-center">
            <h2>Narzeczone</h2>
            <p>
              Cennik plenerowych sesji narzeczeńskich podzielony został na trzy warianty. 
              Pakiety zostały utworzone w taki sposób, 
              aby każdy znalazł w nich taką ilość zdjęć i dodatków, jaka go interesuje. 
              Pamiętajcie, że istnieje możliwość powiększenia pakietu w trakcie wykonywania usługi. 
              Decyzja należy wyłącznie do Was ;)
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
          <Pricing elements={pricing1} />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mx-4 md:mx-0 my-16">
          <div className="md:w-3/12 text-center ">
            <h2>Ślubne</h2>
            <p>
              Cennik plenerowych sesji ślubnych podzielony został na dwa warianty. 
              Dostosujcie odpowiedni pakiet do swoich potrzeb. 
              Jeśli chcecie, mniejszy pakiet możemy zamienić 
              w dowolnej chwili na większy. 
              Decyzję pozostawiam już Wam :)
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
          <div className="md:w-9/12 relative w-full h-60 md:h-[30rem]">
            <Image
              src="//static/sesja-rodzinna.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
          <Pricing elements={pricing2} />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mx-4 md:mx-0 my-16">
          <div className="md:w-3/12 text-center ">
            <h2>Reportaż Ślubny</h2>
            <p>
              Cennik reportażu ślubnego został podzielony na dwa pakiety. 
              Pierwszy pakiet skierowany jest do tych, 
              którzy chcą uwiecznić cały dzień rozpoczynając 
              od przygotowań, kończąc na oczepinach.
              Drugi pakiet rozszerza ofertę o większą ilość odbitek i zdjęć. 
              Dodatkowo pakiet zawiera odrębną plenerową sesję ślubną oraz piękny, 
              indywidualnie zaprojektowany 20 stronnicowy album. 
              Wybór należy oczywiście do Was :)
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
          <div className="md:w-9/12 relative w-full h-60 md:h-[30rem]">
            <Image
              src="//static/sesja-rodzinna.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
          <Pricing elements={pricing} />
        </div>
      </section>
    </Layout>
  );
}
