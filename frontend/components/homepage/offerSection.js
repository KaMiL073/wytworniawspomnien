import HeaderDecor from '../elements/headerDecor';
import OffertCarts from '../elements/offertCarts';

import styles from './styles/offerSection.module.scss';

const offerts = [
  {
    name: 'Sesja rodzinna',
    lead: `Niezapomniane chwile z rodziną uchwycone w malowniczym plenerze. 
               Piękna pamiątka pełna naturalności i autentycznych emocji.`,
    src: '/static/sesja-rodzinna.webp',
    url: '/oferta/sesja-rodzinna',
  },
  {
    name: 'Sesja ciążowa',
    lead: `Tak wyjątkowy moment w życiu zasługuje na piękne uwiecznienie. 
               Sesja ciążowa w plenerze pełna czułych kadrów 
               do których zawsze będziecie mogli powrócić.`,
    src: '/static/sesja-ciazowa.webp',
    url: '/oferta/sesja-ciazowa',
  },
  {
    name: ' Sesja narzeczeńska',
    lead: `Piękne ujęcia pełne uczuć we dwoje pośród natury. 
               Sesja w której liczycie się tylko Wy i to, co do siebie czujecie.`,
    src: '/static/sesja-narzeczenska.webp',
    url: '/oferta/sesja-narzeczenska',
  },
  {
    name: 'Chrzciny',
    lead: `Sakrament chrztu świętego to wyjątkowa okazja warta uwiecznienia. 
               Reportaż z chrztu to piękna pamiątka do której z pewnością nieraz powrócicie.`,
    src: '/static/chrzciny.webp',
    url: '/oferta/chrzciny',
  },
];
export default function offerSection() {
  return (
    <section className={styles.offerSection}>
      <div className={`items-center ${styles.content}`}>
        <h2>Oferta</h2>
        <HeaderDecor />

        <OffertCarts offerts={offerts} />

      </div>
    </section>
  );
}
