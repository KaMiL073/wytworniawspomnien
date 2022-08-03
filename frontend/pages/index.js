import Layout from '../components/layouts/layout';
import HeroSections from '../components/homepage/heroSections';
import AboutSection from '../components/homepage/aboutSection';
import OfferSection from '../components/homepage/offerSection';
import CtaSection from '../components/elements/ctaSection';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

const about = [
  {
    name: 'Tu Tomek, Fotograf z Gdańska',
    lead: `Zapraszam Cię na wspaniałą fotograficzną przygodę, 
           w której to ty będziesz jej częścią. 
           Zapraszam Cię zarówno na plenerową sesję rodzinną, 
           sesję ciążową jak i sesję narzeczeńską. 
           Wykonam dla Ciebie także reportaż z chrztu świętego.`,
    src: '/static/aboutSection.webp',
    linkUrl: '/',
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
      />
      <OfferSection />
      <CtaSection />
    </Layout>
  );
}
