export default function getPricing(slug) {
  // sesja-rodzinna, sesja-ciazowa, sesja-narzeczenska
  const pricing = [
    {
      label: 'Mini',
      price: 500,
      content: `
              <ul>
                  <li><strong>Zdjęcia</strong> <br/> 20</li>
                  <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
                  <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
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
                  <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
                  <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
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
          <li><strong>Dodatkowe zdjęcie</strong> <br/> 30 zł </li>
          <li><strong>Odbitki</strong> <br/> 15x23 <br/> Jedwabny papier</li>
          <li><strong>Dodatki</strong> <br/> 
            Teczka na odbitki, <br/> 
            <strong>Personalizowany album 20x20, 10 rozkładówek</strong>
          </li>
      </ul>
              `,
    },
  ];
  // reportaz-z-chrztu-swietego
  const pricing2 = [
    {
      label: 'Standard',
      price: 700,
      content: `
            <ul>
                <li><strong>Zawiera</strong> <br/>
                  ● Ceremonia z chrztu świętego <br/>
                  ● Mini sesja rodzinna pod kościołem
                </li>
                <li><strong>Zdjęcia</strong> <br/>
                  30 
                </li>
                <li><strong>Dodatkowe zdjęcie</strong> <br/>
                  30 zł
                </li>
                <li><strong>Odbitki</strong> <br/>
                  15x23 <br/> 
                  Jedwabny papier 
                </li>
                <li><strong>Dodatki</strong> <br/> 
                  Teczka na odbitki 
                </li>         
            </ul>
            `,
    },
    {
      label: 'Premium',
      price: 1200,
      content: `
        <ul>
            <li><strong>Zawiera</strong><br/>
              ● <strong>Przygotowania do chrztu</strong><br/>
              ● Ceremonia z chrztu świętego<br/>
              ● Mini sesja rodzinna pod kościołem<br/>
              ● <strong>Uroczystość</strong>
            </li>
            <li><strong>Zdjęcia</strong> <br/> 
              <strong>50</strong>
            </li>
            <li><strong>Dodatkowe zdjęcie</strong> <br/>
              30 zł
            </li>
            <li><strong>Odbitki</strong> <br/> 
              15x23 <br/> 
              Jedwabny papier
            </li>
            <li><strong>Dodatki</strong> <br/>
              Teczka na odbitki <br/>
              <strong>Personalizowany album 20x20, 10 rozkładówek</strong>
            </li>         
        </ul>
            `,
    },
  ];
  // reportaz-slubny
  const pricing3 = [
    {
      label: 'Standard',
      price: 3000,
      content: `
              <ul>
                  <li><strong>Zawiera</strong> <br/> 
                    ● Przygotowania ślubne <br/>
                    ● Ceremonia ślubna <br/>
                    ● Przyjęcie weselne <br/>
                    ● Mini sesja w dniu ślubu w okolicy sali weselnej
                  </li>
                  <li><strong>Zdjęcia</strong> <br/> 400 </li>
                  <li><strong>Odbitki</strong> <br/>
                    50 szt. - 15x23 <br/> 
                    Jedwabny papier </li>
                  <li><strong>Dodatki</strong> <br/> Pendrive z pudełkiem na odbitki </li>         
              </ul>
              `,
    },
    {
      label: 'Premium',
      price: 4000,
      content: `
            <ul>
              <li><strong>Zawiera</strong> <br/> 
                ● Przygotowania ślubne <br/> 
                ● Ceremonia ślubna <br/> 
                ● Przyjęcie weselne <br/> 
                ● Mini sesja w dniu ślubu w okolicy sali weselnej <br/> 
                ● <strong>Pełna sesja ślubna w odrębnym dniu</strong>
              </li>
              <li><strong>Zdjęcia</strong> <br/> 
                <strong>500</strong> 
              </li>
              <li><strong>Odbitki</strong> <br/> 
                <strong>100 szt. - 15x23 <br/> 
                Jedwabny papier </strong>
              </li>
              <li><strong>Dodatki</strong> <br/> 
                Pendrive z pudełkiem na odbitki
                <strong>Personalizowany album 20x20, 20 rozkładówek</strong>
              </li>         
            </ul>
              `,
    },
  ];
  // sesja-slubna
  const pricing5 = [
    {
      label: 'Standard',
      price: 700,
      content: `
              <ul>
                  <li><strong>Zdjęcia</strong> <br/> 30 </li>
                  <li><strong>Dodatkowe zdjęcie</strong><br/>
                    30 zł
                  </li>
                  <li><strong>Odbitki</strong> <br/>
                    15x23 <br/> 
                    Jedwabny papier </li>
                  <li><strong>Dodatki</strong> <br/> 
                    Teczka na odbitki 
                  </li>         
              </ul>
              `,
    },
    {
      label: 'Premium',
      price: 1200,
      content: `
      <ul>
        <li><strong>Zdjęcia</strong> <br/> 
          <strong>50</strong> 
        </li>
        <li><strong>Dodatkowe zdjęcie</strong><br/>
          30 zł
        </li>
        <li><strong>Odbitki</strong> <br/>
          15x23 <br/> 
          Jedwabny papier </li>
        <li><strong>Dodatki</strong> <br/> 
          Teczka na odbitki <br/> 
          <strong>Personalizowany album 20x20, 10 rozkładówek</strong>
        </li>         
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
      pricing: pricing5,
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
      pricing: pricing,
    },

  };

  return content[slug];
}
