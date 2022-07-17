import Layout from '../components/layouts/layout';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

export default function Home() {
  return (
    <Layout title={TITLE} description={DESCRIPTION} useRecaptcha>
      <h1>home</h1>
    </Layout>
  );
}
