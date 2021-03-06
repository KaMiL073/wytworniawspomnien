import Layout from '../components/layouts/layout';
import HeroSections from '../components/homepage/heroSections';
import AboutSection from '../components/homepage/aboutSection';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

export default function Home() {
  return (
    <Layout title={TITLE} description={DESCRIPTION} useRecaptcha>
      <HeroSections />
      <AboutSection />
    </Layout>
  );
}
