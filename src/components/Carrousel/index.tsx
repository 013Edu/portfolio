"use client"
import { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useGesture } from 'react-use-gesture';

import ItemSkill from '../ItemSkill';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const itemRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
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

  const carouselStyle = {
    transform: x.interpolate((val) => `translate3d(${val}px, 0, 0)`),
    userSelect: 'none',
  };

  return (
    <div className="relative">
      <div className=" max-w-5xl ml-96 overflow-hidden max-[1480px]:ml-48 max-[1270px]:ml-36 max-[1270px]:max-w-2xl max-[600px]:max-w-sm max-[375px]:m-0 ">
        <animated.div
          {...bind()}
          ref={itemRef}
          className="flex max-[375px]:flex-wrap"
          style={carouselStyle}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 max-[375px]:mb-10 w-1/${items.length} ${index === currentIndex ? '' : ''
                }`}
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
