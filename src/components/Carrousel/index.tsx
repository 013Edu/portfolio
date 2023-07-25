"use client"
import { useState, useRef, useLayoutEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useGesture } from 'react-use-gesture';

import ItemSkill from '../ItemSkill';

interface CarouselProps {
  items: any;
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useLayoutEffect(() => {
    if (itemRef.current) {
      setCarouselWidth(itemRef.current.offsetWidth);
    }
  }, []);

  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useGesture(
    {
      onDrag: ({ down, movement: [mx] }) => {
        if (down) {
          set({ x: mx });
        }
      },
      onDragEnd: ({ movement: [mx] }) => {
        if (mx > carouselWidth / 2) {
          handlePrev();
        } else if (mx < -carouselWidth / 2) {
          handleNext();
        }
        set({ x: 0 });
      },
    },
    {
      drag: {
        axis: 'x',
        bounds: { left: -carouselWidth, right: 0 },
      },
    }
  );

  return (
    <div className="relative">
      <div className=" max-w-5xl ml-96 overflow-hidden max-[1480px]:ml-48 max-[1270px]:ml-64 max-[1270px]:max-w-2xl max-[1212px]:ml-48 max-[960px]:ml-20 max-[927px]:ml-30 max-[82px]:ml-32 min-[751px]:mr-48 min-[772px]:mr-48 max-[600px]:max-[590px]:ml-0 max-[375px]:m-0">
        <animated.div
          {...bind()}
          ref={itemRef}
          className="flex max-[590px]:flex-wrap max-[590px]:bg-white max-[590px]: max-[375px]:flex-wrap max-[375px]:bg-white max-[375px]:pt-6 max-[495px]:justify-center"
          style={{
            transform: x.interpolate((val) => `translate3d(${val}px, 0, 0)`),
            userSelect: 'none',
          }}
        >
          {items.map((item: any, index: any) => (
            <div
              key={index}
              className={`flex-shrink-0 max-[375px]:mb-10 w-1/${items.length} ${index === currentIndex ? '' : ''}`}
              style={{ cursor: 'grab' }}
            >
              <ItemSkill image={item.image} text={item.text} />
            </div>
          ))}
        </animated.div>
      </div>
    </div>
  );
};

export default Carousel;
