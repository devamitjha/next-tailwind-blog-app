"use client";
import React from 'react';
import Link from 'next/link';
import TitleDecoration from '../TitleDecoration';
import Image from 'next/image';
import Cat from "@/assets/images/cat-small.jpg";

const Footer = () => {
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
        }
      ];
  return (
    <div className="full-width footer-container">
      <div className="max-w-[1280px] w-[90%] mx-auto relative z-0">
        <div className="section-footer">
          <div className="item section-newsletter">
            <div className="mb-10">
              <TitleDecoration title="DA" size="big"/>
            </div>
            <div className="item-content">
              <p>A super modern theme following the latest trends with premium Membership and fully compatible with Ghost.</p>
              <p>Check more themes like this on <Link href="/"><strong>da.com</strong></Link></p>
            </div>
            <div className="footer-input">
              <form>
                <div className="form-group">
                  <input type="email" name="email" className="inputbox large" required="" placeholder="Enter your email address" />
                  <div className="btn filled submit">
                      Get Started
                  </div>
                </div>
              </form>
            </div>
            <div className="item-content">
              <p>Don't miss out and sign up to <strong>our newsletter!</strong></p>
            </div>
          </div>
          <div className="item quick-links">
            <div className="mb-10">
              <TitleDecoration title="Quick Links" size="big"/>
            </div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Author</Link></li>
              <li><Link href="/">Contact</Link></li>
              <li><Link href="/">Search</Link></li>
            </ul>
          </div>
          <div className="item latest-article">
            <div className="mb-10">
              <TitleDecoration title="Latest Articles" size="big"/>
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
        </div>
        <div className="copyright">
          <p>Theme by<span className="dot"></span><strong>DA</strong></p>
        </div>
      </div>
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  )
}

export default Footer
