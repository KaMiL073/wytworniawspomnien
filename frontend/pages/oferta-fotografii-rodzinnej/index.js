import Layout from '../../components/layouts/layout';

// import Decor from '../components/elements/decor';
import HeaderDecor from '../../components/elements/headerDecor';

import getPricing from '../../lib/staticContent/pricing';

import OffertSection from '../../components/elements/offertSection';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Oferta fotografii rodzinnej - Wytwórnia Wspomnień';
const DESCRIPTION = 'Zapraszam Cię do zapoznania się z moją ofertą na sesję rodzinną, ciążową, reportaż z chrztu świętego. Fotografia Trójmiasto, Gdańsk i okolice.';

export default function Oferta() {
  const sesjaRodzinna = getPricing('sesja-rodzinna');
  const sesjaCiazowa = getPricing('sesja-ciazowa');
  const reportazZChrztuSwietego = getPricing('reportaz-z-chrztu-swietego');

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

        <OffertSection
          name={sesjaRodzinna.name}
          text={sesjaRodzinna.text}
          img={sesjaRodzinna.img}
          url={sesjaRodzinna.url}
          pricing={sesjaRodzinna.pricing}
        />

        <OffertSection
          name={sesjaCiazowa.name}
          text={sesjaCiazowa.text}
          img={sesjaCiazowa.img}
          url={sesjaCiazowa.url}
          pricing={sesjaCiazowa.pricing}
        />

        <OffertSection
          name={reportazZChrztuSwietego.name}
          text={reportazZChrztuSwietego.text}
          img={reportazZChrztuSwietego.img}
          url={reportazZChrztuSwietego.url}
          pricing={reportazZChrztuSwietego.pricing}
        />

      </section>
    </Layout>
  );
}
