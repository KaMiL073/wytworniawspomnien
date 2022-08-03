/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';

import styles from './styles/Pricing.module.scss';

export default function Pricing() {
  const elements = [
    {
      label: 'Mini',
      price: 450,
      content: `
          <ul>
              <li><strong>Zdjęcia</strong> <br/> 15</li>
              <li><strong>Odbitki</strong> <br/> 13x19 <br/> jedwabny paier</li>
              <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
              <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
          </ul>
          `,
    },
    {
      label: 'Standard',
      price: 600,
      content: `
          <ul>
              <li><strong>Zdjęcia</strong> <br/> 25</li>
              <li><strong>Odbitki</strong> <br/> 13x19 <br/> jedwabny paier</li>
              <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
              <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
          </ul>
          `,
    },
    {
      label: 'Premium',
      price: 1100,
      content: `
      <ul>
      <li><strong>Zdjęcia</strong> <br/> 40</li>
      <li><strong>Odbitki</strong> <br/> 13x19 <br/> jedwabny paier</li>
      <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
      <li><strong>Dodatki</strong> <br/> Teczka na odbitki, presoanlizowany album 20x20, 10 rozkładówek</li>
  </ul>
          `,
    },
  ].map((element) => (
    <div className={styles.item}>

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
      {elements}
    </>
  );
}

Pricing.propTypes = {
  oferts: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.number,
    content: PropTypes.string,
  }).isRequired,
};
