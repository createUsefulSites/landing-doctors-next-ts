'use client';
import Image from 'next/image';
import './style.css';
import { useEffect, useRef } from 'react';

type propsType = {
  image: string;
  percent: string;
  diagnose: string;
  researchInfo: string;
};

export default function PopUpCard({
  image,
  percent,
  diagnose,
  researchInfo,
}: propsType): JSX.Element {
  const ref = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    ref.current!.innerHTML = diagnose;
  }, []);

  return (
    <div className='card-wrapper'>
      <Image src={image} alt={image} />
      <div className='card-percent'>{percent}</div>
      <div className='card-diagnose' ref={ref}></div>
      <div className='card-researchInfo'>{researchInfo}</div>
    </div>
  );
}
