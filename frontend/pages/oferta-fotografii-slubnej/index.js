import Layout from '../../components/layouts/layout';

// import Decor from '../components/elements/decor';
import HeaderDecor from '../../components/elements/headerDecor';
import OffertSection from '../../components/elements/offertSection';
import getPricing from '../../lib/staticContent/pricing';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Oferta fotografii ślubnej - Wytwórnia Wspomnień';
const DESCRIPTION = 'Zapraszam Cię do zapoznania się z moją ofertą na reportaż ślubny, sesję ślubną, narzeczeńską. Fotografia Trójmiasto, Gdańsk i okolice.';

export default function Oferta() {
  const reportazSlubny = getPricing('reportaz-slubny');
  const sesjaSlubna = getPricing('sesja-slubna');
  const sesjaNarzeczenska = getPricing('sesja-narzeczenska');

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
      <section className="w-full">

        <OffertSection
          name={reportazSlubny.name}
          text={reportazSlubny.text}
          img={reportazSlubny.img}
          url={reportazSlubny.url}
          pricing={reportazSlubny.pricing}
        />

        <OffertSection
          name={sesjaSlubna.name}
          text={sesjaSlubna.text}
          img={sesjaSlubna.img}
          url={sesjaSlubna.url}
          pricing={sesjaSlubna.pricing}
          bg="/static/pattern.webp"
        />

        <OffertSection
          name={sesjaNarzeczenska.name}
          text={sesjaNarzeczenska.text}
          img={sesjaNarzeczenska.img}
          url={sesjaNarzeczenska.url}
          pricing={sesjaNarzeczenska.pricing}
        />

      </section>
    </Layout>
  );
}
