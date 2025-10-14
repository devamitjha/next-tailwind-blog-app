import React from 'react'
import TitleDecoration from '../TitleDecoration'
import Link from 'next/link';
import userAvatar from "@/assets/images/avatar-2.jpg";
import Image from 'next/image';

const AboutWidgets = () => {
  return (
    <div className="widget bg-[var(--boxes-background-color)] border-1 border-[var(--boxes-border-color)] rounded-2xl px-10 py-8">
        <div className="mb-6">
          <TitleDecoration title="About Me" size="small"/>
        </div>
        <div className="meta flex gap-4 items-center mb-5">   
          <Link href="/" className="flex justify-start items-center gap-2">
            <div className="bio w-18 h-18 shadow-lg rounded-full overflow-hidden">
                <Image src={userAvatar} alt="user" width="72" height="72" className="w-full h-full object-cover"/>
            </div>
          </Link>   
          <div className="author-name">
              <h4 className="text-base font-bold"><Link href="/" className="hover">Adriana Martins</Link></h4>
              <span className="text-sm text-gray-600">India</span>
          </div>
        </div>
        <p className="text-base text-[var(--black)] leading-relaxed">Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
        
    </div>
  )
}

export default AboutWidgets