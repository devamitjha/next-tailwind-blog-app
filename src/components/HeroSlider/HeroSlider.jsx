"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Phone from "@/assets/images/phone.jpg";
import Avatar from "@/assets/images/avatar-2.jpg";
import Ball from "@/assets/images/ball.jpg";
import Book from "@/assets/images/book.jpg";

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null); 

  const settings = {
    dots: true,
    fade: true,
    arrow:false,
    autoplay:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    },
  };

  const articles = [
    {
      img: Phone,
      title: "Some sports that will be affected by big-data advances",
      content: "The world of sports is not immune to the rapid advancements in technology",
      author: "Adriana Martins",
      date: "October 21, 2023",
    },
    {
      img: Ball,
      title: "How technology is shaping the future of education",
      content: "New advancements are making education accessible to more people globally.",
      author: "Adriana Martins",
      date: "October 22, 2023",
    },
    {
      img: Book,
      title: "AI's impact on the healthcare industry",
      content: "AI is revolutionizing how we approach diagnostics and treatments.",
      author: "Adriana Martins",
      date: "October 23, 2023",
    },
  ];

  const handleHover = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="section-homepage w-full my-15">
      <div className="max-w-[1280px] w-[90%] mx-auto">        
        <div className="section-slider heroSlider flex w-full justify-between items-center font-be-vietnam-pro">
          <div className="section-slider-image w-[60%]">
            <Slider {...settings} ref={sliderRef}>
              {articles.map((article, index) => (
                <div className="item-image w-full h-full flex justify-center items-center overflow-hidden rounded-2xl" key={index}>
                  <Image src={article.img} alt={`Slide ${index + 1}`} width="730" height="460" className="w-full h-full object-cover"/>
                </div>
              ))}
            </Slider>
          </div>
          <div className="section-slider-content">
            {articles.map((article, index) => (
              <article
                key={index}
                className={`item ${activeSlide === index ? "active" : ""}`}
                onMouseEnter={() => handleHover(index)} // Trigger hover effect
              >
                <span className="count">{index + 1}</span>
                <h2><Link href="/" className="hover">{article.title}</Link></h2>
                <div className="article-content">
                  <p>{article.content}</p>
                  <div className="meta">
                    <Link href="/" className="author-bio">
                      <span className="img">
                        <Image src={Avatar} alt="Author" />
                      </span>
                      <span className="author-name">
                        By <span>{article.author}</span>
                      </span>
                    </Link>
                    <time className="time">
                      <span className="dot"></span>
                      {article.date}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlider