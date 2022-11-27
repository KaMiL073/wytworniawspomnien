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
const reportazSlubny = getPricing('reportaz-slubny');
const sesjaSlubna = getPricing('sesja-slubna');
const sesjaNarzeczenska = getPricing('sesja-narzeczenska');

const oferts = [
  {
    slug: 'reportaz-slubny',
    name: 'Reportaż ślubny',
    lead: `
        Reportaż ślubny stanowi niezwykłą pamiątkę z wyjątkowego dnia jakim jest ślub. Opowiada on
        piękną historię naznaczoną prawdziwymi emocjami. Pełno w nim ulotnych chwil które wywołują
        szczere wzruszenie bądź niewymowną radość. Ten szczególny dzień warto aby został pięknie
        uwieczniony. Chciałbym poprowadzić cię przez tą wyjątkową przygodę rozpoczynając od
        przygotowań, poprzez ślub, kończąc na weselu. Dodatkowo w innym dniu wykonam dla ciebie
        malowniczą sesję ślubną w plenerze. Jeśli podobają ci się moje prace a od fotografa wymagasz
        profesjonalnego, indywidualnego podejścia to zapraszam do kontaktu. Zdjęcia wykonuje na terenie
        Trójmiasta – Gdańsk, Sopot, Gdynia oraz w okolicach.
        `,
    src: '//static/reportaż-slubny.webp',
    seo_title: 'Oferta – Reportaż ślubny - Wytwórnia Wspomnień',
    seo_description: 'Reportaż ślubny stanowi niezwykłą pamiątkę z wyjątkowego dnia jakim jest ślub. Uwiecznię dla Ciebie te wyjątkowe chwile! Fotografia Trójmiasto, Gdańsk i okolice',
    pricing: reportazSlubny.pricing,
  },
  {
    slug: 'sesja-slubna',
    name: 'Sesja ślubna',
    lead: `
        Sesja ślubna w plenerze jest wspaniałą okazją na uwiecznienie was w wyjątkowej roli Państwa
        młodych. To wy decydujecie czy sesję wykonamy nad morzem, w parku, lesie czy na łące. A może
        bliżej wam do klimatów miejskich bądź industrialnych? Moim zadaniem będzie uchwycić jak
        najwięcej pięknych momentów pełnych wdzięku i czułości. To czas w którym macie być skupieni
        wyłącznie na sobie. Przed sesją wyślę Wam wszelkie informację jak się do niej przygotować. Zdjęcia
        wykonuje na terenie Trójmiasta – Gdańsk, Sopot, Gdynia oraz w okolicach.
        `,
    src: '//static/sesja-slubna.webp',
    seo_title: 'Oferta – Sesja Ślubna - Wytwórnia Wspomnień',
    seo_description: 'Sesja ślubna w plenerze, to idealna okazja na uwiecznienie Was w wyjątkowej roli Państwa Młodych. Fotografia Trójmiasto, Gdańsk i okolice.',
    pricing: sesjaSlubna.pricing,
  },
  {
    slug: 'sesja-narzeczenska',
    name: 'Sesja narzeczeńska',
    lead: `
    Sesja narzeczeńska w plenerze to piękna okazja na spędzenie wyjątkowych chwil przed
    obiektywem. Chciałbym Was uwiecznić nad morzem, na łące, w parku bądź w lesie. Sesja
    par to gwarancja pięknych, czułych ujęć. To czas w którym macie być skupieni wyłącznie na
    sobie. Przed sesją wyślę Wam wszelkie informację jak się do niej przygotować. Zdjęcia
    wykonuję na terenie Trójmiasta – Gdańsk, Sopot, Gdynia oraz w okolicach.
    `,
    src: '//static/sesja-narzeczenska.webp',
    seo_title: 'Oferta – Sesja narzeczeńska - Wytwórnia Wspomnień',
    seo_description: 'Sesja narzeczeńska w plenerze, to wspaniała okazja na spędzenie wyjątkowych chwil przed obiektywem. Fotografia Trójmiasto, Gdańsk i okolice.',
    pricing: sesjaNarzeczenska.pricing,
  },
];

export default function OfferA({ ofert }) {
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
      ofertaSlubnaSlug: ofert.slug.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params: { ofertaSlubnaSlug } }) {
  const requestedofert = oferts.find((ofert) => ofert.slug === ofertaSlubnaSlug);

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
OfferA.propTypes = {
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
