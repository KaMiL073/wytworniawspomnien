import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';

// import Decor from '../components/elements/decor';
import HeaderDecor from '../../components/elements/headerDecor';
import Pricing from '../../components/elements/pricing';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Oferta fotografii rodzinnej - Wytwórnia Wspomnień';
const DESCRIPTION = 'Zapraszam Cię do zapoznania się z moją ofertą na sesję rodzinną, ciążową, reportaż z chrztu świętego. Fotografia Trójmiasto, Gdańsk i okolice.';

const pricing = [
  {
    label: 'Mini',
    price: 500,
    content: `
        <ul>
            <li><strong>Zdjęcia</strong> <br/> 20</li>
            <li><strong>Odbitki</strong> <br/> 13x23 <br/> jedwabny paier</li>
            <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
        </ul>
        `,
  },
  {
    label: 'Standard',
    price: 700,
    content: `
        <ul>
            <li><strong>Zdjęcia</strong> <br/> 30</li>
            <li><strong>Odbitki</strong> <br/> 13x23 <br/> jedwabny paier</li>
            <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
        </ul>
        `,
  },
  {
    label: 'Premium',
    price: 1200,
    content: `
    <ul>
    <li><strong>Zdjęcia</strong> <br/> 50</li>
    <li><strong>Odbitki</strong> <br/> 13x23 <br/> jedwabny paier</li>
    <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
    <li><strong>Dodatki</strong> <br/> Teczka na odbitki, presoanlizowany album 20x20, 10 rozkładówek</li>
</ul>
        `,
  },
];

const pricing2 = [
  {
    label: 'Standard',
    price: 700,
    content: `
        <ul>
            <li><strong>Zawiera</strong> <br/> Ceremonia, mini sesja rodzinna</li>
            <li><strong>Zdjęcia</strong> <br/> 30 </li>
            <li><strong>Odbitki</strong> <br/>50 szt - 13x23 <br/> Jedwabny papier </li>
            <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Teczka na odbitki </li>         
        </ul>
        `,
  },
  {
    label: 'Premium',
    price: 1200,
    content: `
      <ul>
        <li><strong>Zawiera</strong> <br/> Przygotowania, ceremonia, mini sesja rodzinna, przyjęcie</li>
        <li><strong>Zdjęcia</strong> <br/> 50 </li>
        <li><strong>Odbitki</strong> <br/> 13x23 <br/> Jedwabny papier </li>
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
          <h1>Oferta fotografii rodzinnej</h1>
          <HeaderDecor />
          <p>
            Jest mi niezmiernie miło, że chcecie zapoznać się z moją ofertą.
            Poniżej znajdziecie odrębne cenniki
            na plenerowe sesje fotograficzne oraz reportaż z chrztu świętego.
            Oferta została podzielona na pakiety tak,
            abyście wybrali to na czym Wam najbardziej zależy.
            Cena sesji rodzinnych dotyczy zdjęć wykonanych do 30km od Gdańsk Południe.
            Jeżeli odległość będzie większa należy doliczyć 1zł za km
            w jedną stronę.
          </p>
        </div>
      </section>
      <section className={styles.container}>
        <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-0 my-16">
          <div className="md:w-9/12 relative">
            <Image
              src="//static/sesja-rodzinna.webp"
              alt="Picture of the author"
              width={866}
              height={538}
            />
          </div>
          <div className="md:w-3/12 text-center">
            <h2>Rodzinne</h2>
            <p>
              Cennik plenerowych sesji rodzinnych występuje w trzech wariantach. 
              Pakiety zostały podzielone w taki sposób, 
              aby każdy znalazł w nich taką ilość zdjęć i dodatków, 
              jaka go interesuje. 
              Istnieje możliwość powiększenia pakietu w trakcie wykonywania usługi. 
              Decyzja należy do Was ;)
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-between max-w-screen-xl">
          <Pricing elements={pricing} />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mx-4 md:mx-0 my-16">
          <div className="md:w-3/12 text-center ">
            <h2>Ciążowe</h2>
            <p>
              Cennik plenerowych sesji ciążowych składa się z trzech wariantów. 
              Każdy z pakietów różni się od siebie zarówno ilością zdjęć jak i dodatków. 
              Zawsze istnieje możliwość zwiększenia pakietu w trakcie wykonywania usługi. 
              Wybór należy wyłącznie do Was :)
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
          <div className="md:w-9/12 relative w-full h-60 md:h-[30rem]">
            <Image
              src="//static/sesja-ciazowa.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
          <Pricing elements={pricing} />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mx-4 md:mx-0 my-16">
          <div className="md:w-3/12 text-center ">
            <h2>Cennik reportażu z chrztu świętego</h2>
            <p>
              Cennik reportażu z chrztu świętego został podzielony na dwa pakiety. 
              Pierwszy pakiet skierowany jest dla tych, 
              którzy chcą uwiecznić tylko ceremonię oraz wykonać mini sesję rodzinną. 
              Drugi pakiet jest pełnym reportażem od przygotowań 
              do chrztu kończąc na zdjęciach z przyjęcia. 
              Zdecyduj który wariant jest dla Ciebie :)
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
          <div className="md:w-9/12 relative w-full h-60 md:h-[30rem]">
            <Image
              src="//static/chrzciny.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
          <Pricing elements={pricing2} />
        </div>
      </section>
    </Layout>
  );
}
