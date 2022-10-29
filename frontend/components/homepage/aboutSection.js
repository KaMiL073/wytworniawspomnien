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

  return (
    <section className={`${styles.aboutSection}`} style={pattern}>
      <DecorRight />
      <div className={`flex ${(position === 'left') ? 'md:flex-row-reverse' : 'md:flex-row'} ${styles.content}`}>
        <div className="md:w-9/12">

          <Image
            src={src}
            alt="Picture of the author"
            width={875}
            height={628}
          />
        </div>
        <div className="md:w-3/12 mt-16 md:mt-0">
          <h2>{name}</h2>
          <HeaderDecor />
          <p>{lead}</p>
          <Link href={linkUrl}>
            <a className={styles.btn} href={linkUrl}>Więcje</a>
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
