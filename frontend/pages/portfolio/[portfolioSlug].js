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
  console.log(items);

    // const portfolioUrl = `${portfolio.slug}}`;
  
    // const metaDescription = (article.seo_description == null) ? DESCRIPTION : article.seo_description;
    // const imageSocialMedia = (article.image_social_media == null)
    //   ? null : process.env.assetsPath + article.image_social_media;
  
    return (
      <Layout title={TITLE} description={DESCRIPTION}>
      <section className={styles.oferta}>

        <div className={styles.content}>
          <h1>{portfolio.name}</h1>
          <HeaderDecor />
          <p>
            Cieszę się niezmiernie, że trafiliście na moją stronę.
            Poniżej przedstawiam. Wam moje portfolio,
            które prezentuje efekty moich poszczególnych prac.
            Wierze, że po zapoznaniu się z nimi zdecydujecie się na współpracę ze mną.
          </p>
        </div>
      </section>
      <section className="grid md:grid-cols-4 gap-8 py-16 px-4 xl:px-0">
      aaa
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