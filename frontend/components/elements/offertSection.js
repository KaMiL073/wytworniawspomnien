import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Oferta.module.scss';
import Pricing from './pricing';

export default function offertSection({
  name, text, img, url, pricing, bg,
}) {
  const stylePattern = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'repeat',
  };

  const pattern = (bg === undefined) ? null : stylePattern;

  return (
    <>
      <div className="py-5 my-5" style={pattern}>
        <div className={styles.container}>
          <div className="flex flex-col md:flex-row items-center justify-between mx-4 md:mx-0 my-16">
            <div className="md:w-9/12">
              <div className={`flex relative w-full h-60 ${styles.image}`}>
                <Image
                  src={`${img}`}
                  alt="Picture of the author"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="md:w-3/12 text-center">
              <h2>{name}</h2>
              <p>
                {text}
              </p>
              <Link href="/">
                <a className={styles.btn} href="/">Zobacz przykładową  sesje </a>
              </Link>
            </div>
          </div>
          <div className="flex sm:flex-col sm:space-y-4 mx-auto md:items-end justify-center max-w-screen-xl">
            <Pricing elements={pricing} />
          </div>
        </div>
      </div>
    </>
  );
}

offertSection.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  url: PropTypes.string,
  pricing: PropTypes.array,
  bg: PropTypes.string,
};
