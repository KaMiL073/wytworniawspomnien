import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import HeaderDecor from '../elements/headerDecor';
import DecorRight from '../elements/decorRight';

import styles from './styles/aboutSection.module.scss';

export default function aboutSection({
  name, lead, src, linkUrl, position, bg,
}) {
  const stylePattern = {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'repeat',
  };
  
  const pattern = (bg === undefined) ? null : stylePattern;
  
  let Decor;
  if (pattern) {

  } else {
    Decor = <DecorRight />;
  }
  
  return (
    <section className={`${styles.aboutSection}`} style={pattern}>
      {Decor}
      <div className={`flex sm:flex-col md:flex-col lg:px-4 ${(position === 'left') ? 'lg:flex-row-reverse' : 'lg:flex-row'} ${styles.content}`}>
        <div className={`flex relative w-full h-60 ${styles.imageOfert}`}>
          <Image
            src={src}
            alt="Picture of the author"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="lg:w-6/12 xl:w-3/12 mt-16 md:mt-0">
          <h2>{name}</h2>
          <HeaderDecor />
          <p>{lead}</p>
          <Link href={linkUrl}>
            <a className={styles.btn} href={linkUrl}>Więcej</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

aboutSection.propTypes = {
  name: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};
