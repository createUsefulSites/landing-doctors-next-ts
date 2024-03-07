'use client';
import Image from 'next/image';
import './MainPage.css';
import humanInCirle from './../public/graphics/person_circled.svg';
import arrowInCirle from './../public/graphics/arrow_circled.svg';
import greenHand from './../public/graphics/green_hand.svg';
import blueHand from './../public/graphics/blue_hand.svg';
import imageBlue from './../public/graphics/blue_line.svg';
import inhaler1 from './../public/graphics/inhaler1.svg';
import inhaler2 from './../public/graphics/inhaler2.svg';
import inhaler3 from './../public/graphics/inhaler3.svg';
import unionArrow from './../public/graphics/union_arrow.svg';
import DiagramPopUp from './components/DiagramPopUp/DiagramPopUp';
import { useState } from 'react';

type PopUpProps = {
  text: Array<string>;
  imageInfo: 'diagram' | 'aliveStatistics';
};

export default function Main() {
  const [activePopUpNumber, setActivePopUpNumber] = useState<null | 'diagram' | 'aliveStatistics'>(
    null,
  );
  const arrInfoPopUp: Array<PopUpProps> = [
    {
      text: [
        'В десятилетнем исследовании <b>«Генетическая эпидемиология ХОБЛ» (COPDGene)</b> среди пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено <b>преобладание женщин (66%)</b>, а в возрасте 60-64 лет количество женщин и мужчин.',
        'Такое эпидемиологическое распределение заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути курящих женщин имеют более <b>высокий процент площади стенок</b>, но меньшую площадь просвета, внутренний диаметр и толщину дыхательных путей по сравнению с курящими мужчинами.',
      ],
      imageInfo: 'diagram',
    },
    {
      text: [
        '<b>Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно среднетяжелое или тяжелое обострение случится в течение 3 лет у 77% пациентов<sup>1</sup>.</b>',
        'В течение 5 лет после первого тяжёлого обострения в живых остаются только 40% пациентов.<sup>2</sup> Прогноз после обострений ХОБЛ схож с таковым при сердечной недостаточности, инфаркте миокарда и некоторых злокачественных опухолях.',
      ],
      imageInfo: 'aliveStatistics',
    },
  ];

  return (
    <>
      {activePopUpNumber === 'diagram' ? (
        <DiagramPopUp setActivePopUpNumber={setActivePopUpNumber} {...arrInfoPopUp[0]} />
      ) : activePopUpNumber === 'aliveStatistics' ? (
        <DiagramPopUp setActivePopUpNumber={setActivePopUpNumber} {...arrInfoPopUp[1]} />
      ) : null}
      <div className='main-wrapper'>
        <Image src={imageBlue} alt='Нажать' className='blue-line' />
        <div className='section-wrapper'>
          <h1 className='header-info'>ХОБЛ: мифы и реальность</h1>
          <section className='header-articles-wrapper'>
            <article className='header-article' onClick={() => setActivePopUpNumber('diagram')}>
              <Image width={50} src={blueHand} alt='Нажать' className='hand-click' />
              <Image width={80} src={humanInCirle} alt='Мужчина' className='header-article-image' />
              <div className='header-article__main-text'>
                ХОБЛ болеют <b>преимущественно мужчины?</b>
              </div>
              <div className='header-article__info'>
                В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ» (COPDGene) среди
                пациентов с ХОБЛ, диагностированной до 55 лет, было выявлено преобладание...
              </div>
            </article>

            <article
              className='header-article'
              onClick={() => setActivePopUpNumber('aliveStatistics')}
            >
              <Image width={50} src={greenHand} alt='Нажать' className='hand-click' />
              <Image width={80} src={arrowInCirle} alt='Мужчина' className='header-article-image' />
              <div className='header-article__main-text'>
                <b>Опасно</b> не наличие заболевания, а обострения?
              </div>
              <div className='header-article__info'>
                Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум одно
                среднетяжелое или тяжелое обострение случится в течение...
              </div>
            </article>
          </section>
        </div>
      </div>

      <div className='main-wrapper'>
        <Image src={imageBlue} alt='Нажать' className='blue-line' />
        <div className='section-wrapper'>
          <h1 className='header-info'>Терапия ХОБЛ: что в фокусе?</h1>
          <div className='bottom-articles-wrapper'>
            <h2 className='bottom-header'>
              Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
            </h2>
            <div className='bottom-section__wrapper'>
              <div className='bottom-section__header'>
                Приоритетные направления фармакотерапевтической стратегии при ХОБЛ<sup>1</sup>:
              </div>
              <section className='bottom-articles__wrapper'>
                <article className='bottom-article'>
                  <Image width={178} height={145} src={inhaler1} alt='Ингалятор' />

                  <h3 className='bottom-article__header'>
                    Ингаляционный <b>антихолинергик</b>
                  </h3>
                  <p className='bottom-article__info'>
                    Ингибирует бронхоконстрикторные эффекты ацетилхолина, вступая с ним в
                    конкурентный антагонизм за взаимодействие с эффекторными мускариновыми
                    рецепторами, дополняет и потенцирует эффект β2-агонистов<sup>1</sup>
                  </p>
                </article>
                <article className='bottom-article'>
                  <Image width={178} height={145} src={inhaler2} alt='Ингалятор' />

                  <h3 className='bottom-article__header'>
                    Ингаляционный <b>β2-агонист</b>
                  </h3>
                  <p className='bottom-article__info'>
                    Вызывает бронходилатацию посредством релаксации гладкомышечных клеток бронхов
                    независимо от характера констриктивных стимулов, т. е. выступают в качестве
                    функциональных антагонистов бронхоконстрикции
                  </p>
                  <Image src={unionArrow} alt='Объединение' className='union_arrow-left' />
                  <Image src={unionArrow} alt='Объединение' className='union_arrow-right' />
                </article>
                <article className='bottom-article'>
                  <Image width={178} height={145} src={inhaler3} alt='Ингалятор' />

                  <h3 className='bottom-article__header'>
                    Ингаляционный <b>глюкокортикостероид</b> (ИГКС)
                  </h3>
                  <p className='bottom-article__info'>
                    Снижает частоту обострений, особенно в сочетании с ДДБА, подавляют хроническое
                    воспаление при астме и снижают гиперреактивность дыхательных путей
                  </p>
                </article>
              </section>
              <article className='bottom-advice__wrapper'>
                <div className='bottom-advice__card'>
                  <p>
                    Пациентам с ХОБЛ рекомендуется комбинирование бронходилататоров с разными
                    механизмами действия;
                  </p>
                  <p>
                    Назначение 2-х бронходилататоров из группы длительнодействующих β2-агонистов
                    (ДДБА) и длительнодействующих антихолинергиков (ДДАХ), действие которых
                    дополняет и усиливает друг друга<sup>1</sup>.
                  </p>
                </div>
                <div className='bottom-advice__card'>
                  <p>
                    Пациентам с ХОБЛ и частыми обострениями (≥2 среднетяжелых обострений в течение 1
                    года/1 тяжелое обострение, потребовавшее госпитализации) рекомендуется
                    назначение ИГКС в дополнение к ДДБА;
                  </p>
                  <p>
                    Последние исследования показали, что амбулаторное применение ИГКС/ДДБА у
                    пациентов с ХОБЛ снижает госпитальную летальность по сравнению с пациентами,
                    принимавшими только ДДБА (8,1% vs 13,2%)<sup>1</sup>.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
