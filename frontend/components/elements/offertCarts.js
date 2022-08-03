import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function OffertCarts({ offerts }) {
  const items = offerts.map(({ name, lead, src }) => (
    <Link href="/">
      <a href="/">
        <div className="my-4 md:my-0">
          <Image
            src={src}
            alt="Picture of the author"
            width={653}
            height={368}
          />
          <div className="px-16">
            <h3>{name}</h3>
            <p>{lead}</p>
          </div>
        </div>
      </a>
    </Link>
  ));

  return (
    <div className="grid md:grid-cols-2 gap-2">
      {items}
    </div>
  );
}

OffertCarts.propTypes = {
  offerts: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    name: PropTypes.string,
    lead: PropTypes.string,
  })).isRequired,
};
