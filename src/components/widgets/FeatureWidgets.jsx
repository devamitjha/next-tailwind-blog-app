"use client";
import React from 'react'
import TitleDecoration from '../TitleDecoration';
import Image from 'next/image';
import userAvatar from "@/assets/images/avatar-2.jpg";
import Cat from "@/assets/images/cat-small.jpg";
import Link from 'next/link';

const FeatureWidgets = () => {
  const blogs = [
      {
          id: 1,
          image:Cat,
          title: "Modern and colorful style of caricatures created by AI",
          author: "Author Name",
          date: "October 21, 2023",
          desc: "AI-powered tools and algorithms have redefined caricature creation in novel ways.",
          readTime: "2 min read",
      },
      {
          id: 2,
         image:Cat,
          title: "Exploring creativity with generative AI artwork",
          author: "Author Name",
          date: "November 5, 2023",
          desc: "Generative AI opens endless creative possibilities for designers and illustrators.",
          readTime: "3 min read",
      },
      {
          id: 3,
         image:Cat,
          title: "The future of digital caricatures in the AI era",
          author: "Author Name",
          date: "December 10, 2023",
          desc: "AI-driven caricature generation is changing how artists approach digital portraits.",
          readTime: "4 min read",
      },
      {
          id: 4,
          image:Cat,
          title: "Stylized illustrations powered by deep learning",
          author: "Author Name",
          date: "January 2, 2024",
          desc: "Deep learning models now assist artists in creating unique visual expressions.",
          readTime: "2 min read",
      },
    ];
  return (
    <div className="widget bg-[var(--boxes-background-color)] border-1 border-[var(--boxes-border-color)] rounded-2xl px-10 py-8">
        <div className="mb-6">
          <TitleDecoration title="Most Viewed" size="small"/>
        </div>        
        <div className="meta flex flex-col gap-6">            
            {blogs.map((item) => (
              <div key={item.id} className="flex justify-between gap-4 items-center">
                <Link href="/" className="flex justify-center items-center w-25 h-25 shadow-md rounded-2xl transition-transform duration-300 ease-in-out hover:-translate-y-2 overflow-hidden">
                  <Image src={item.image} alt={item.title} width="100" height="100" className="w-full h-full object-cover"/>
                </Link>
                <div className="flex flex-1 flex-col gap-2">
                  <h4 className="text-[14px] font-bold line-clamp-3"><Link href="/" className="hover">{item.title}</Link></h4>
                  <time className="time text-[14px] text-black"><span className="dot"></span>By<span className="text-[var(--primary-theme-color)] ms-1">Adriana Martins</span></time>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureWidgets