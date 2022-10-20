import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Layout from '../../components/layouts/layout';
import HeaderDecor from '../../components/elements/headerDecor';
import Gallery from '../../components/elements/gallery';
import getPortfolio, { getPortfolioBySlugs } from '../../lib/models/portfolio';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

export default function Portfolio({ portfolio }) {
  const [activeImage, setActiveImage] = useState(null);
  const images = portfolio.gallery;
  const items = images.map((image) => (
    <div
      className="w-64 h-64 md:h-56 md:w-56 relative"
      key={`photo_${image.id}`}
      onClick={() => { setActiveImage(image.id); }}
      onKeyPress={() => { setActiveImage(image.id); }}
      role="button"
      tabIndex={0}
    >
      <Image
        src={`${process.env.assetsPath + image.directus_files_id}`}
        layout="fill"
        objectFit="contain"
      />
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
      { activeImage
        && (
        <Gallery
          activeImage={activeImage}
          images={images}
          onClose={() => setActiveImage(null)}
        />
        )}
    </Layout>

  );
}

export async function getStaticPaths() {
  const portfolios = await getPortfolio();
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
  const requestedPortfolio = await getPortfolioBySlugs({ portfolioSlug });
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

Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({
    gallery: PropTypes.arrayOf(PropTypes.shape({

    })),
  })),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
Portfolio.defaultProps = {
  portfolios: [],
};
