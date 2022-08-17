import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layouts/layout';
import HeaderDecor from '../../components/elements/headerDecor';
import getPortfolio from '../../lib/models/portfolio';

import styles from '../../styles/Oferta.module.scss';

const TITLE = 'Wytworniawspomnien';
const DESCRIPTION = 'Opis';

export default function Portfolio({ portfolios }) {
  console.log(portfolios);

  const items = portfolios.map((portfolio) => (
    <Link href={`/portfolio/${portfolio.slug}`}>
      <a className={styles.btn} href={`/portfolio/${portfolio.slug}`}>
        <div className="w-full h-64 md:h-56 relative">
          <Image
            src={`${process.env.assetsPath + portfolio.image}`}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h6 className="font-bold text-lg py-4 text-black">{portfolio.name}</h6>
      </a>
    </Link>
  ));

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <section className={styles.oferta}>

        <div className={styles.content}>
          <h1>Portfolio - Wybrane sesje zdjęciowe</h1>
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

        {items}

      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      portfolios: await getPortfolio(),
    },
    revalidate: 60, // 60,
  };
}
