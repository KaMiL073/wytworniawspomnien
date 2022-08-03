/* eslint-disable react/no-danger */
import styles from './styles/Pricing.module.scss';

export default function ChristeningPrice() {
  const elements = [
    {
      label: 'Standard',
      price: 600,
      content: `
          <ul>
              <li><strong>Zawiera</strong> <br/> Ceremonia, mini sesja rodzinna</li>
              <li><strong>Zdjęcia</strong> <br/> 25 </li>
              <li><strong>Odbitki</strong> <br/> 13x19 <br/> Jedwabny papier </li>
              <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
              <li><strong>Dodatki</strong> <br/> Teczka na odbitki </li>         
          </ul>
          `,
    },
    {
      label: 'Premium',
      price: 1200,
      content: `
        <ul>
          <li><strong>Zawiera</strong> <br/> Przygotowania, ceremonia, mini sesja rodzinna, przyjęcie</li>
          <li><strong>Zdjęcia</strong> <br/> 50 </li>
          <li><strong>Odbitki</strong> <br/> 13x19 <br/> Jedwabny papier </li>
          <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
          <li><strong>Dodatki</strong> <br/> Teczka na odbitki, Personalizowany album 20x20, 10 rozkładówek  </li>         
        </ul>
          `,
    },
  ].map((element) => (
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
      {elements}
    </>
  );
}
