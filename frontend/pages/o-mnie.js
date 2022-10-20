import Image from 'next/image';
import Layout from '../components/layouts/layout';

import Decor from '../components/elements/decor';
import HeaderDecor from '../components/elements/headerDecor';
import styles from '../styles/About.module.scss';

const TITLE = 'O mnie - Wytwórnia Wspomnień';
const DESCRIPTION = 'Cześć, Tu Tomek! Fotograf z Trójmiasto, Gdańsk i okolice. Pasjonat reportaży ślubnych, plenerowych sesji ślubnych oraz rodzinnych. Zapraszam do współpracy!';

export default function Omnie() {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <section className={styles.aboutSection}>
        <Decor />
        <h1> Tu Tomek, Fotograf z Gdańska</h1>
        <HeaderDecor />
        <div className={`flex ${styles.content}`}>
          <div className="lg:w-2/4 xl:w-3/12 px-8 2xl:px-0">
            <h2>Kim jestem</h2>
            <p>
              Cześć, tu Tomek. Dwukrotny laureat nagrody złotego ojca
              (zdobyta w 2020 - syn i 2022 - córka).
              Miłośnik dobrej kawy, długich spacerów i klimatów dzikiego zachodu.
              Lubię patrzeć na życie nieszablonowo (bo inaczej było by zbyt nudne)
            </p>
            <h2>Dlaczego fotografia?</h2>
            <p>
              Zawsze miałem w sobie coś z artysty.
              Największą radość daje mi możliwość kreowania czegoś zniczego.
              Tylko ja i moje myśli z których wypływa wizja, którą można uwiecznić.
              Fotografia pozwala mi być jak malarz, tylko zamiast palety farb używam światła.
            </p>
          </div>
          {/* <div className="relative w-full h-96 lg:h-[45rem]"> */}
          <div className="flex relative">

            <Image
              src="/static/aboutSection.webp"
              alt="Picture of the author"
              width={875}
              height={628}
            />
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`flex ${styles.content}`}>
          <div>
            {/* <div className="flex relative h-full w-96 lg:h-[45rem]"> */}
            <Image
              src="/static/aparat.webp"
              alt="Picture of the author"
              width={676}
              height={658}
            />
          </div>
          <div className="md:w-2/4 px-8 2xl:px-0 z-10">
            <h2>A co maluję tym światłem?</h2>
            <p>
              Uwielbiam robić zdjęcia ludziom, uwielbiam gdy fotografie
              są pełne naturalności i emocji.
              To właśnie te dwa elementy powodują, że fotografia staje
              się czymś więcej niż kawałkiem obrazka.
            </p>
            <h2>Gdzie tworzę fotografie?</h2>
            <p>
              Sesje w plenerze są moim naturalnym środowiskiem.
              To właśnie pośród natury staram się uwiecznić
              w Was co najpiękniejsze. Zachodzące słońce?
              Pochmurny dzień? W obu przypadkach będzie działa się magia :)
              Jeśli wykonuje reportaż to oczywiście zmieniamy wystrój
              na piękny kościół oraz wspaniale
              udekorowaną salę.
              W takim świecie czuje się równie doskonale wykorzystując piękno danego
              otoczenia ;)
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`flex ${styles.content}`}>
          <div className="md:w-3/12 mt-16 md:mt-0">
            <h2>Jaki styl fotografii lubię najbardziej?</h2>
            <p>
              Reportaż w stylu ninja.
              Pracuje bezszelestnie, nie zakłócając wam tego wspaniałego dnia.
              Owocem tej pracy są piękne,
              naturalne fotografie które opisują cały przebieg reportażu.
              Jeśli chodzi o sesję to jestem otwarty na wasze wszelkie propozycję.
              Czuje się świetnie w lifestyle, ale nie przeszkadzają mi pozowane kadry.
              Możemy zrobić z tego wybuchową mieszankę pięknych ujęć. Pamiętajcie, jestem
              dla Was i to Wy musicie czuć się jak najlepiej.
            </p>
            <h2>Z kim najlepiej mi się współpracuje?</h2>
            <p>
              Uwielbiam współpracować z ludźmi otwartymi na różne ciekawe pomysły.
              Cenie sobie bezstresowe podejście przy współpracy,
              natychmiastowe przejście na ty oraz pozytywne nastawienie :) Dobra
              kooperacja jest bardzo istotna, dołożę wszelkich starań aby taka ona właśnie była.
            </p>
          </div>
          <div className={`flex ${styles.content}`}>
            <Image
              src="/static/O-mnie-3.webp"
              alt="Picture of the author"
              width={653}
              height={539}
            />
          </div>
        </div>
      </section>

    </Layout>
  );
}
