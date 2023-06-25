import React, { useEffect, useState } from 'react';
import { BsArrowUpCircle, BsFillArrowUpSquareFill } from 'react-icons/bs'
import s from './ScrollToTop.module.scss'

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${s.container} ${isVisible ? s.visible : ''}`}
      onClick={scrollToTop}
    >
      <BsArrowUpCircle className={s.icon}/>
      {/*Наверх*/}
    </div>
  );
};