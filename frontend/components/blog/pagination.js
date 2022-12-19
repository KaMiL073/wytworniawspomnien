import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Pagination({ pagesNumber, urlBase, activePage }) {
  const pages = Array.from(Array(pagesNumber));
  const items = pages.map((_, i) => (parseInt(activePage, 10) === i + 1
    ? (
      <span className="border-2 border-black p-2 mr-2">{i + 1}</span>
    ) : (
      <Link href={`${urlBase}?strona=${i + 1}`}>
        <a href={`${urlBase}?strona=${i + 1}`}>
          <span className="text-black p-2 mr-2">
            {i + 1}
          </span>
        </a>
      </Link>
    )));

  return (<div className="mx-auto">{items}</div>);
}

Pagination.propTypes = {
  pagesNumber: PropTypes.number.isRequired,
  urlBase: PropTypes.string.isRequired,
  activePage: PropTypes.number.isRequired,
};