import PropTypes from 'prop-types';

import Head from 'next/head';
import Header from '../navigation/header';
// import Footer from '../navigation/footer';

export default function Layout({
  children, title, description, keywords, ogImage,
}) {
  const layout = (
    <>
      <Head>
        <title>
          {title}
        </title>
        <meta
          name="description"
          content={description}
        />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content={`https://dks.pl${asPath.split('?')[0]}`} /> */}
        <meta property="og:image" content={ogImage == null ? 'static/img-global-social-media-DKS.jpg' : ogImage} />
      </Head>
      <Header />
      <div className="container mx-auto">
        <div className="flex items-center flex-col">
          {children}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );

  return layout;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  ogImage: PropTypes.string,
};

Layout.defaultProps = {
  title: false,
  description: false,
  keywords: [],
  ogImage: false,
};
