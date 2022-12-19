import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
// import EventIcon from '@mui/icons-material/Event';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import useSWR from 'swr';
import styles from '../../styles/Post.module.scss';

import { getBlogArticles } from '../../lib/api/frontApi';

export default function Articles({ page = 0 }) {
  const dayMonthHourFormat = Intl.DateTimeFormat('pl', {
    year: 'numeric', day: 'numeric', month: 'numeric',
  });

  const { data } = useSWR(['/api/news', page], getBlogArticles);

  const items = data?.map((article) => (
    <div className="flex-col text-sm sm:px-2 hover:cursor-pointer">
      <div className={`w-full relative ${styles.image}`}>
        <Image
          src={`${process.env.assetsPath + article.image}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h6 className="font-bold text-lg py-4 text-black">{article.title}</h6>
      <p className="py-1">
        {dayMonthHourFormat.format(new Date(article.date_created))}
      </p>
      <p>
        {article.tags.join(', ')}
      </p>
      <p className="my-2">
        {article.lead?.replace(/<[^>]*>?/gm, '').replace("&oacute;", 'ó').slice(0, 150)}
        ...
      </p>
      <div className="flex justify-end">
        <Link href={`/blog/${article.slug}`} key={article.id}>
          <a className={styles.btn} href={`/blog/${article.slug}`}>Czytaj więcje</a>
        </Link> 
      </div>
    </div>
  ));

  return (<>{items}</>);
}

Articles.propTypes = {
  page: PropTypes.number.isRequired,
};