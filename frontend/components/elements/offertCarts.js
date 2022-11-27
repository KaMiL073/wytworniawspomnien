import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function OffertCarts({ offerts }) {
  const items = offerts.map(({
    name, lead, src, url,
  }) => (
    <div key={name}>
      <Link href={url}>
        <a href={url}>
          <div className="my-4 md:my-0">
            
            <div className="w-full h-96 relative">
              <Image
                src={src}
                alt="Picture of the author"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="px-16">
              <h3>{name}</h3>
              <p>{lead}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
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
