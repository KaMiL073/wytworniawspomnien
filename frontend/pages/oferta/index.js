import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';

// import Decor from '../components/elements/decor';
import HeaderDecor from '../../components/elements/headerDecor';
import Pricing from '../../components/elements/pricing';
import ChristeningPrice from '../../components/elements/christeningPrice';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

export default function Oferta() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <section className={styles.oferta}>

        <div className={styles.content}>
          <h1>Oferta usługi fotograficznej</h1>
          <HeaderDecor />
          <p>
            Jest mi niezmiernie miło, że chcesz zapoznać się z moją ofertą.
            Poniżej znajdziesz odrębne cenniki na plenerowe sesje fotograficzne
            oraz reportaż z chrztu świętego.
            Oferta została podzielona na pakiety tak, abyś wybrał to na czym
            Ci najbardziej zależy.
            Cena sesji rodzinnych dotyczy zdjęć wykonywanych do 30 km od Gdańsk Południe.
            Jeżeli odległość będzie większa należy doliczyć 1zł za km w jedną stronę.
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
            <h2>Cennik plenerowych sesji zdjęciowych</h2>
            <p>
              Cennik plenerowych sesji zdjęciowych obejmuje sesje rodzinne, ciążowe
              oraz par. Pakiety zostały podzielone w taki sposób,
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
          <Pricing />
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
              src="/static/chrzciny.webp"
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
          <ChristeningPrice />
        </div>
      </section>
    </Layout>
  );
}
