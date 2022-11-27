export default function getPricing(slug) {
  const pricing = [
    {
      label: 'Mini',
      price: 500,
      content: `
              <ul>
                  <li><strong>Zdjęcia</strong> <br/> 20</li>
                  <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
                  <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
                  <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
              </ul>
              `,
    },
    {
      label: 'Standard',
      price: 700,
      content: `
              <ul>
                  <li><strong>Zdjęcia</strong> <br/> 30</li>
                  <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
                  <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
                  <li><strong>Dodatki</strong> <br/> Teczka na odbitki</li>
              </ul>
              `,
    },
    {
      label: 'Premium',
      price: 1200,
      content: `
          <ul>
          <li><strong>Zdjęcia</strong> <br/> 50</li>
          <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
          <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
          <li><strong>Dodatki</strong> <br/> Teczka na odbitki, Personalizowany album 20x20, 10 rozkładówek</li>
      </ul>
              `,
    },
  ];

  const pricing2 = [
    {
      label: 'Standard',
      price: 700,
      content: `
            <ul>
                <li><strong>Zdjęcia</strong> <br/> 30 </li>
                <li><strong>Odbitki</strong> <br/>15x23 <br/> Jedwabny papier </li>
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
            <li><strong>Zdjęcia</strong> <br/> 50 </li>
            <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier </li>
            <li><strong>Dodatkowe zdjęcia</strong> <br/> 30 zł </li>
            <li><strong>Dodatki</strong> <br/> Teczka na odbitki, Personalizowany album 20x20, 10 rozkładówek</li>         
        </ul>
            `,
    },
  ];

  const pricing3 = [
    {
      label: 'Standard',
      price: 3000,
      content: `
              <ul>
                  <li><strong>Zawiera</strong> <br/> Przygotowania, ceremonia, wesele, mini sesja ślubna w dniu ślubu w okolicy Sali weselnej</li>
                  <li><strong>Zdjęcia</strong> <br/> 400 </li>
                  <li><strong>Odbitki</strong> <br/>50 szt - 15x23 <br/> Jedwabny papier </li>
                  <li><strong>Dodatki</strong> <br/> Pendrive z pudełkiem na odbitki </li>         
              </ul>
              `,
    },
    {
      label: 'Premium',
      price: 4000,
      content: `
            <ul>
              <li><strong>Zawiera</strong> <br/> Przygotowania, ceremonia, wesele, mini sesja w dniu ślubu w okolicy Sali weselnej, pełna sesja ślubna w odrębnym dniu</li>
              <li><strong>Zdjęcia</strong> <br/> 500 </li>
              <li><strong>Odbitki</strong> <br/> 100 szt - 15x23 <br/> Jedwabny papier </li>
              <li><strong>Dodatki</strong> <br/> Pendrive z pudełkiem na odbitki, Personalizowany album 20x20, 20 rozkładówek</li>         
            </ul>
              `,
    },
  ];

  const pricing5 = [
    {
      label: 'Mini',
      price: 450,
      content: `
              <ul>
                  <li><strong>Zdjęcia</strong> <br/> 15</li>
                  <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
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
                  <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
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
          <li><strong>Zdjęcia</strong> <br/> <strong>40</strong></li>
          <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
          <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
          <li><strong>Dodatki</strong> <br/> Teczka na odbitki,<strong> Personalizowany album 20x20, 10 rozkładówek</strong></li>
      </ul>
              `,
    },
  ];

  const content = {
    'sesja-rodzinna': {
      name: 'Cennik plenerowych sesji rodzinnych',
      text: `
                Cennik plenerowych sesji rodzinnych występuje w trzech wariantach. 
                Pakiety zostały podzielone w taki sposób, 
                aby każdy znalazł w nich taką ilość zdjęć i dodatków, jaka go interesuje. 
                Istnieje możliwość powiększenia pakietu w trakcie wykonywania usługi. 
                Decyzja należy do Was ;)`,
      img: '//static/sesja-rodzinna.webp',
      url: '/',
      pricing,
    },
    'sesja-ciazowa': {
      name: 'Cennik plenerowych sesji ciążowych',
      text: `
                Cennik plenerowych sesji ciążowych składa się z trzech wariantów. 
                Każdy z pakietów różni się od siebie zarówno ilością zdjęć jak 
                i dodatków. Zawsze istnieje możliwość zwiększenia pakietu 
                w trakcie wykonywania usługi. Wybór należy wyłącznie do Was :)`,
      url: '//static/sesja-ciazowa.webp',
      img: '//static/sesja-ciazowa.webp',
      pricing,
    },
    'reportaz-z-chrztu-swietego': {
      name: 'Cennik reportażu z chrztu świętego',
      text: `
                Cennik reportażu z chrztu świętego został podzielony na dwa pakiety. 
                Pierwszy pakiet skierowany jest dla tych, 
                którzy chcą uwiecznić tylko ceremonię oraz wykonać mini sesję rodzinną. 
                Drugi pakiet jest pełnym reportażem od przygotowań 
                do chrztu kończąc na zdjęciach z przyjęcia. 
                Zdecyduj który wariant jest dla Ciebie :)`,
      url: '//static/chrzciny.webp',
      img: '//static/chrzciny.webp',
      pricing: pricing2,
    },
    'reportaz-slubny': {
      name: 'Cennik reportażu ślubnego',
      text: `
                Cennik reportażu ślubnego został podzielony na dwa pakiety. 
                Pierwszy pakiet skierowany jest do tych, 
                którzy chcą uwiecznić cały dzień rozpoczynając od przygotowań, 
                kończąc na oczepinach. 
                Drugi pakiet rozszerza ofertę o większą ilość odbitek i zdjęć. 
                Dodatkowo pakiet zawiera odrębną plenerową sesję ślubną oraz piękny, 
                indywidualnie zaprojektowany 20 stronnicowy album. 
                Wybór należy oczywiście do Was :)`,
      url: '/',
      img: '//static/reportaż-slubny.webp',
      pricing: pricing3,
    },
    'sesja-slubna': {
      name: 'Cennik plenerowych sesji ślubnych',
      text: `
                Cennik plenerowych sesji ślubnych podzielony został na dwa warianty. 
                Dostosujcie odpowiedni pakiet do swoich potrzeb. 
                Jeśli chcecie, mniejszy pakiet możemy zamienić 
                w dowolnej chwili na większy. 
                Decyzję pozostawiam już Wam :)`,
      url: '/',
      img: '//static/sesja-slubna.webp',
      pricing: pricing2,
    },
    'sesja-narzeczenska': {
      name: 'Cennik plenerowych sesji narzeczeńskich',
      text: `
                Cennik plenerowych sesji narzeczeńskich podzielony został na trzy warianty. 
                Pakiety zostały utworzone w taki sposób, 
                aby każdy znalazł w nich taką ilość zdjęć i dodatków, 
                jaka go interesuje. Pamiętajcie, 
                że istnieje możliwość powiększenia pakietu w trakcie wykonywania usługi. 
                Decyzja należy wyłącznie do Was ;)

`,
      url: '/',
      img: '//static/sesja-narzeczenska.webp',
      pricing: pricing5,
    },

  };

  return content[slug];
}
