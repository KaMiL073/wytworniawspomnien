/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import styles from './styles/Pricing.module.scss';

export default function Pricing({ elements }) {
  const items = elements.map((element) => (
    <div className={`h-[66rem] mx-8 ${styles.item}`}>
      <div className={styles.header}>
        <h5 className={styles.label}>{element.label}</h5>
        <div className={styles.price}>
          <span className="text-tiny italic font-normal text-base">Cena</span>
          <br />
          <span className="text-7xl">{element.price}</span>
          <span className="text-tiny italic">zł</span>
        </div>
      </div>
      <div className={styles.body}>
        <div className="m-6" dangerouslySetInnerHTML={{ __html: element.content }} />
      </div>
    </div>
  ));

  return (
    <>
      {items}
    </>
  );
}

Pricing.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.string,
  })).isRequired,
};
