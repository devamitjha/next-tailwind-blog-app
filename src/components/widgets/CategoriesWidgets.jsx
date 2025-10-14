import React, { useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryImage from "@/assets/images/book.jpg";
import TitleDecoration from '../TitleDecoration';
import { MoveLeft, MoveRight } from 'lucide-react';

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CategoriesWidgets = () => {
  const sliderRef = useRef(null);

  const next = () => sliderRef.current.slickNext();
  const previous = () => sliderRef.current.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="widget bg-[var(--boxes-background-color)] border border-[var(--boxes-border-color)] rounded-2xl px-10 py-8">
      <div className="mb-6">
        <TitleDecoration title="Categories" size="small" />
      </div>
      <div className="slider-small relative">
        <Slider ref={sliderRef} {...settings}>
          {[1, 2].map((item) => (
            <div key={item} className="categories-details">
              <div className="cat-image rounded-2xl overflow-hidden">
                <Image src={CategoryImage} alt="category" />
              </div>
              <div className="mt-4">
                <h2>Technology</h2>
                <div className="count flex items-center gap-2">
                  <span>1</span>
                  <div className="dot w-1 h-1 rounded-full bg-gray-500"></div>
                  <span>Article</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="absolute right-0 bottom-0 flex justify-between items-center gap-2">
          <div
            className="btn filled w-10 h-10 !p-0 cursor-pointer flex justify-center items-center !rounded-full text-white"
            onClick={previous}
          >
            <MoveLeft size={16} color="#fff" />
          </div>
          <div
            className="btn filled w-10 h-10 !p-0 cursor-pointer flex justify-center items-center !rounded-full text-white"
            onClick={next}
          >
            <MoveRight size={16} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesWidgets;
