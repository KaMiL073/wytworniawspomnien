import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';

// import Decor from '../components/elements/decor';
import HeaderDecor from '../../components/elements/headerDecor';
import Pricing from '../../components/elements/pricing';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Oferta fotografii ślubnej - Wytwórnia Wspomnień';
const DESCRIPTION = 'Zapraszam Cię do zapoznania się z moją ofertą na reportaż ślubny, sesję ślubną, narzeczeńską. Fotografia Trójmiasto, Gdańsk i okolice.';
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
            <h2>Reportaż ślubny</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae numquam eligendi alias sequi soluta quia ipsa aspernatur quo, ea,
              expedita delectus nulla molestiae deleniti explicabo
              quas culpa veritatis reprehenderit praesentium,
              quis fuga quisquam suscipit nihil.
              Laborum necessitatibus placeat perferendis et mollitia praesentium eos,
              sapiente possimus, laudantium dolore commodi non veritatis eaque minus sunt.
              Sint praesentium architecto error,
              eaque at ea reprehenderit facere maxime!
              Possimus quasi ipsam impedit rerum praesentium laudantium excepturi sit magni,
              voluptatem consectetur quod, voluptatibus assumenda unde eum.
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
          <Pricing elements={pricing} />
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mx-4 md:mx-0 my-16">
          <div className="md:w-3/12 text-center ">
            <h2>Sesja ślubna</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae numquam eligendi alias sequi soluta quia ipsa aspernatur quo, ea,
              expedita delectus nulla molestiae
              deleniti explicabo quas culpa veritatis reprehenderit praesentium,
              quis fuga quisquam suscipit nihil.
              Laborum necessitatibus placeat perferendis et mollitia praesentium eos,
              sapiente possimus, laudantium dolore commodi non veritatis eaque minus sunt.
              Sint praesentium architecto error,
              eaque at ea reprehenderit facere maxime!
              Possimus quasi ipsam impedit rerum praesentium laudantium excepturi sit magni,
              voluptatem consectetur quod, voluptatibus assumenda unde eum.
            </p>
            <Link href="/">
              <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
            </Link>
          </div>
          <div className="md:w-9/12 relative w-full h-60 md:h-[30rem]">
            <Image
              src="/static/chrzciny.webp"
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
