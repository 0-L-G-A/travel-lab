import { useState, useRef, useEffect, Children } from 'react';

import { addClassToChildrenById, generateNumberArray } from 'utils/helpers';

import { ICarousel } from './index.types';

import styles from './index.module.scss';

export default function Carousel({ children, className }: ICarousel) {
  const total = Children.count(children);
  const arrayOfIndexes = generateNumberArray(total);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    };

    const containerElement = containerRef.current;
    addClassToChildrenById('items-container', styles.carouselItem);

    if (containerElement) {
      containerElement.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`${styles.carousel} ${className}`} ref={containerRef}>
      <div
        id="items-container"
        className={styles.carouselItems}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children}
      </div>
      <div className={styles.carouselDots}>
        {arrayOfIndexes.map((_) => (
          <span
            key={_}
            className={`${styles.dot} ${styles[currentIndex === _ ? 'active' : 'inactive']}`}
            onClick={() => handleDotClick(_)}
          ></span>
        ))}
      </div>
    </div>
  );
}
