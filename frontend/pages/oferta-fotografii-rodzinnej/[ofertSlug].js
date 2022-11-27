import Image from 'next/image';
import PropTypes from 'prop-types';
import Layout from '../../components/layouts/layout';

import Decor from '../../components/elements/decor';
import HeaderDecor from '../../components/elements/headerDecor';
import styles from '../../styles/About.module.scss';
import Pricing from '../../components/elements/pricing';
import getPricing from '../../lib/staticContent/pricing';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';
const sesjaRodzinna = getPricing('sesja-rodzinna');
const sesjaCiazowa = getPricing('sesja-ciazowa');
const reportazZChrztuSwietego = getPricing('reportaz-z-chrztu-swietego');


const oferts = [
  {
    slug: 'sesja-rodzinna',
    name: 'Sesja rodzinna',
    lead: `
          Sesja rodzinna w plenerze to wyjątkowa okazja
          do wspólnego spędzenia czasu pośród natury.
          To od Was zależy czy sesję wykonamy nad morzem,
          w lesie, parku czy na łące.
          Moją rolą będzie uchwycić jak najwięcej niezapomnianych chwil.
          Waszą rolą będzie świetnie się przy tym bawić.
          Na sesji rodzinnej w dużej mierze podążamy za dziećmi.
          To dzięki ich spontaniczności sesja jest pełna radosnych,
          emocjonalnych kadrów.
          Przed sesją wyślę Wam wszelkie informację jak się do niej przygotować.
          Zdjęcia wykonuję na terenie Trójmiasta –
          Gdańsk, Sopot, Gdynia oraz w okolicach.
        `,
    src: '//static/sesja-rodzinna.webp',
    seo_title: 'Oferta – Sesja rodzinna - Wytwórnia Wspomnień',
    seo_description: 'Sesja rodzinna w plenerze jest wspaniałą okazją do uwiecznienia Waszych wspólnych niezapomnianych chwil.  Fotografia Trójmiasto, Gdańsk i okolice.',
    pricing: sesjaRodzinna.pricing,
  },
  {
    slug: 'sesja-ciazowa',
    name: 'Sesja ciążowa',
    lead: `
      Sesja brzuszkowa w plenerze to wspaniała okazja na uwiecznienie waszej ciąży. 
      Możemy umówić się na sesję w lesie, na łące, w parku bądź nad morzem. 
      Sesję ciążową cechują piękne, delikatne ujęcia. 
      Sesję ciążową najlepiej wykonać w 6-8 miesiącu ciąży, 
      gdzie brzuszek jest już odpowiednio duży, 
      lecz jest to jeszcze bezpieczny czas przed porodem. 
      Przed sesją wyślę Wam wszelkie informację jak się do niej przygotować. 
      Zdjęcia wykonuję na terenie Trójmiasta – Gdańsk, Sopot, Gdynia oraz w okolicach.
    `,
    src: '//static/sesja-ciazowa.webp',
    seo_title: 'Oferta – Sesja ciążowa - Wytwórnia Wspomnień',
    seo_description: 'Sesja brzuszkowa w plenerze, to wyjątkowa okazja na uwiecznienie Waszej ciąży. Fotografia Trójmiasto, Gdańsk i okolice.',
    pricing: sesjaCiazowa.pricing,
  },
  {
    slug: 'reportaz-z-chrztu-swietego',
    name: 'Reportaż z chrztu świętego',
    lead: `
      Sakrament Chrztu Świętego to piękny moment w życiu rodziny. 
      Uwiecznienie tych wyjątkowych chwil na fotografiach będzie wspaniałą pamiątką 
      dla Waszego dziecka. 
      W tym szczególnym dniu będę za Wami podążać, 
      łapiąc w kadrze Wasze emocje oraz czułe spojrzenia. 
      Reportaż obejmuje ceremonię w kościele wraz ze zdjęciami 
      rodzinnymi po mszy świętej. Możemy także poszerzyć ofertę 
      o przygotowania przed uroczystością wraz z reportażem przyjęcia. 
      Zdjęcia wykonuję na terenie Trójmiasta – Gdańsk, Sopot, Gdynia oraz w okolicach.
    `,
    src: '//static/chrzciny.webp',
    seo_title: 'Oferta – Chrzciny - Wytwórnia Wspomnień',
    seo_description: 'Sakrament Chrztu Świętego, to wyjątkowy moment w życiu rodziny. Uwiecznij te wspaniałe chwile na pamiątkę dla Twojego dziecka. Trójmiasto, Gdańsk i okolice.',
    pricing: reportazZChrztuSwietego.pricing,
  },

];

export default function Offer({ ofert }) {

  const metaTitle = (ofert.seo_title == null) ? TITLE : ofert.seo_title;
  const metaDescription = (ofert.seo_description == null) ? DESCRIPTION : ofert.seo_description;
  const { pricing } = ofert;

  return (
    <Layout title={metaTitle} description={metaDescription}>
      <section className={styles.aboutSection}>
        <Decor />
        <div className={`flex ${styles.content}`}>
          <div className={`flex relative w-full ${styles.imageAbout}`}>
            <Image
              src={ofert.src}
              alt="Picture of the author"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="lg:w-2/4 xl:w-3/12 px-8 2xl:px-0 text-center">
            <h1>{ofert.name}</h1>
            <HeaderDecor />
            <p>
              {ofert.lead}
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full sm:flex-col sm:space-y-4 my-24 mx-auto md:items-end justify-center max-w-screen-xl">
        <Pricing elements={pricing} />
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = oferts.map((ofert) => ({
    params: {
      ofertSlug: ofert.slug.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { ofertSlug } }) {
  const requestedofert = oferts.find((ofert) => ofert.slug === ofertSlug);

  if (!requestedofert) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ofert: requestedofert,
    },
    revalidate: 60,
  };
}
Offer.propTypes = {
  ofert: PropTypes.shape({
    src: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    lead: PropTypes.string,
    seo_title: PropTypes.string,
    seo_description: PropTypes.string,
    pricing: PropTypes.array,
  }).isRequired,
};
