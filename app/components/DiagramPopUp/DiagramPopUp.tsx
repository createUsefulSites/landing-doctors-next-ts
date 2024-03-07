'use client';
import './style.css';
import diagram from './../../../public/graphics/diagram.svg';
import heart from './../../../public/graphics/heart.svg';
import human from './../../../public/graphics/human.svg';
import bladder from './../../../public/graphics/bladder.svg';
import Image from 'next/image';
import PopUpCard from '../PopUpCard/PopUpCard';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

type propsType = {
  text: Array<string>;
  imageInfo: 'diagram' | 'aliveStatistics';
  setActivePopUpNumber: Dispatch<SetStateAction<'diagram' | 'aliveStatistics' | null>>;
};

type propsForPopUp = {
  image: string;
  percent: string;
  diagnose: string;
  researchInfo: string;
};

export default function DiagramPopUp({
  text,
  imageInfo,
  setActivePopUpNumber,
}: propsType): JSX.Element {
  const popUpRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    Array.from(document.getElementsByClassName('popup-text')!).forEach((element, index) => {
      element.innerHTML = text[index];
    });
    document.querySelector('.background-popup')!.addEventListener('click', closePopUp);
    setTimeout(() => popUpRef.current && (popUpRef.current.style.opacity = '1'), 0);
  }, []);

  function closePopUp(): void {
    document.body.style.overflow = 'auto';
    popUpRef.current!.style.opacity = '0';
    document.querySelector('.background-popup')!.removeEventListener('click', closePopUp);
    setTimeout(() => {
      setActivePopUpNumber(null);
      popUpRef.current!.style.display = 'none';
    }, 210);
  }

  const arrInfo: Array<propsForPopUp> = [
    {
      image: heart,
      percent: '45,5%',
      diagnose: 'пациентов с <b>сердечной недостаточностью</b><sup>1</sup>',
      researchInfo: 'Популяционное когортное исследование (N=385)',
    },
    {
      image: human,
      percent: '55,3%',
      diagnose: 'пациентов с <b>инфарктом миокарда</b><sup>1</sup>',
      researchInfo: 'Апостериорный анализ когортного исследования (N=2887)',
    },
    {
      image: bladder,
      percent: '50,5%',
      diagnose: 'пациентов с <b>раком мочевого пузыря</b>',
      researchInfo: 'Исследование Национальной статистической службы (N=42642)',
    },
  ];

  return (
    <div ref={popUpRef} className='popup-wrapper'>
      <div className='popup__text-wrapper'>
        {text.map((_, index) => {
          return <div className='popup-text' key={index}></div>;
        })}
      </div>
      <div className='popup__bottom-wrapper'>
        {imageInfo === 'diagram' ? (
          <Image src={diagram} alt='Диаграмма' />
        ) : (
          <>
            <div className='popup__bottom__header'>Пятилетняя выживаемость пациентов</div>
            <div className='popup__bottom__cards'>
              {arrInfo.map((item) => {
                return <PopUpCard key={item.diagnose} {...item} />;
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
