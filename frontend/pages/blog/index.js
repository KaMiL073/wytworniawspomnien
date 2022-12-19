/* eslint-disable camelcase, no-plusplus, no-await-in-loop */
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { SWRConfig, unstable_serialize } from 'swr';

import Layout from '../../components/layouts/layout';
import getQueryParams from '../../lib/helpers/queryStringHelper';
import Articles from '../../components/blog/articles';
import Pagination from '../../components/blog/pagination';

import getNews, { getNewsCount } from '../../lib/models/news';
import HeaderDecor from '../../components/elements/headerDecor';
import styles from '../../styles/Post.module.scss';

const TITLE = 'Blog';
const DESCRIPTION = '';

export default function Blog({ fallback, pagesNumber }) {
    const { asPath, pathname } = useRouter();
    const { strona } = getQueryParams(asPath);
    const page = strona;
    
    return (
      <Layout title={TITLE} description={DESCRIPTION}>
        <section className={styles.posts}>
          <div className={styles.content}>
            <h1>Blog</h1>
            <HeaderDecor />
          </div>
        </section>
        <div className="md:max-w-screen-xl">
          <div className="flex sm:flex-col py-8">
            <div className="grid md:grid-cols-2 gap-4 px-4 xl:px-0">
              <SWRConfig value={{ fallback }}>
                <Articles page={page} />
              </SWRConfig>
            </div>
          </div>
          <div className="my-3">
            <Pagination
              pagesNumber={pagesNumber}
              urlBase={pathname}
              activePage={page || 1}
            />
          </div>
        </div>
      </Layout>
    );
  }
  
  export async function getStaticProps() {
    const LIMIT = 9;
    const newsCount = await getNewsCount();
    const pagesNumber = Math.ceil(newsCount / 9);
  
    const propsObject = {
      props: {
        pagesNumber,
        fallback: {},
      },
      revalidate: 1, // 60,
    };
  
    const arrayOfPagesNumber = Array.from(Array(pagesNumber));
    for (let p = 0; p < arrayOfPagesNumber.length; p++) {
      const articles = await getNews({ limit: LIMIT, offset: p * LIMIT });
      propsObject.props.fallback[unstable_serialize(['/api/news', p])] = articles;
    }
  console.log(propsObject);
    return propsObject;
  }
  
  Blog.propTypes = {
    pagesNumber: PropTypes.number.isRequired,
    fallback: PropTypes.shape({}).isRequired,
  };