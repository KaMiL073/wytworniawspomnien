import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';
import HeaderDecor from '../../components/elements/headerDecor';
import getPortfolioBySlugs from '../../lib/models/portfolio';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

export default function Portfolio({ portfolio }) {
  console.log(portfolio);
  
  const images = portfolio.gallery;
  
  const items = images.map((image) => (
    <div>
        <div className="w-full h-64 md:h-56 relative">
          <Image
            src={`${process.env.assetsPath + image.directus_files_id}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
    </div>
  ));
    return (
      <Layout title={TITLE} description={DESCRIPTION}>
      <section className={styles.oferta}>

        <div className={styles.content}>
          <h1>{portfolio.name}</h1>
          <HeaderDecor />
          <div dangerouslySetInnerHTML={{ __html: portfolio.description }} />
        </div>
      </section>
      <section className="grid md:grid-cols-4 gap-8 py-16 px-4 xl:px-0">
       {items}

      </section>
    </Layout>

    );
  }
  
  export async function getStaticPaths() {
    const portfolios = await getPortfolioBySlugs();
    const paths = portfolios.map((portfolio) => ({
      params: {
        portfolioSlug: portfolio.slug,
      },
    }));
  
    return {
      paths,
      fallback: 'blocking',
    };
  }

  export async function getStaticProps({ params: { portfolioSlug } }) {
    const portfolios = await getPortfolioBySlugs();
    const requestedPortfolio = portfolios.find((portfolio) => portfolio.slug === portfolioSlug);
  
    if (!requestedPortfolio) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        portfolio: requestedPortfolio,
      },
      revalidate: 60,
    };
  }