import Layout from '../components/layouts/layout';
import HeroSections from '../components/homepage/heroSections';
import AboutSection from '../components/homepage/aboutSection';
import OfferSection from '../components/homepage/offerSection';
import CtaSection from '../components/elements/ctaSection';

const TITLE = 'Wytwórnia Wspomnień - Fotografia ślubna, rodzinna Trójmiasto';
const DESCRIPTION = 'Cześć! Zapraszam Cię na fotograficzną przygodę! Naturalne sesje i reportaże ślubne. Sesje rodzinne pełne uczuć. Fotografia Trójmiasto, Gdańsk i okolice.';

const about = [
  {
    name: 'Tu Tomek, Fotograf z Gdańska',
    lead: `Zapraszam Cię na wspaniałą fotograficzną przygodę, 
           w której to ty będziesz jej częścią. 
           Zapraszam Cię zarówno na plenerową sesję rodzinną, 
           sesję ciążową jak i sesję narzeczeńską. 
           Wykonam dla Ciebie także reportaż z chrztu świętego.`,
    src: '/static/aboutSection.webp',
    linkUrl: '/o-mnie',
  },
];
const OfferSection2 = [
  {
    name: 'Fotografia Ślubna',
    lead: `Czy marzy Wam się piękny, naturalny reportaż ślubny, który chwila po chwili opowie wspaniałą
    historię z tego wyjątkowego dnia? Czy zależy Wam na wyjątkowej sesji ślubnej, w której to Wy
    będziecie jak gwiazdy na dużym ekranie? Jeśli chcecie postawić na gościa, który robi to z sercem
    i pasją to nie czekajcie. Chętnie wymaluję Wam światłem te niezapomniane chwile!`,
    src: '/static/sesja-slubna.webp',
    linkUrl: '/o-mnie',
    position: 'left',
    bg: '/static/pattern.webp',
  },
];
export default function Home() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <HeroSections />
      <AboutSection
        name={about[0].name}
        lead={about[0].lead}
        src={about[0].src}
        linkUrl={about[0].linkUrl}
        bg={about[0].bg}
      />
      <AboutSection
        name={OfferSection2[0].name}
        lead={OfferSection2[0].lead}
        src={OfferSection2[0].src}
        linkUrl={OfferSection2[0].linkUrl}
        position={OfferSection2[0].position}
        bg={OfferSection2[0].bg}
      />
      <OfferSection />
      <CtaSection />
    </Layout>
  );
}
