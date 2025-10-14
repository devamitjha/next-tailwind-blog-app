import React from 'react'
import TitleDecoration from '../TitleDecoration'
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaYoutube} from "react-icons/fa";


const SocialWidgets = () => {
  return (
    <div className="widget bg-[var(--boxes-background-color)] border-1 border-[var(--boxes-border-color)] rounded-2xl px-10 py-8">
        <div className="mb-6">
          <TitleDecoration title="Social Profiles" size="small"/>
        </div>        
        <div className="meta flex justify-between items-center gap-4">            
            <Link href="/"  className="border border-[var(--boxes-border-color)] rounded-2xl w-1/3 flex justify-center items-center h-20 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <FaFacebookF size={20} color="#1877f2"/>
            </Link>
             <Link href="/"  className="border border-[var(--boxes-border-color)] rounded-2xl w-1/3 flex justify-center items-center h-20 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <FaInstagram size={20} color="#E4405F"/>
            </Link>
             <Link href="/"  className="border border-[var(--boxes-border-color)] rounded-2xl w-1/3 flex justify-center items-center h-20 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
              <FaYoutube size={20} color="#FF0000"/>
            </Link>
        </div>
    </div>
  )
}

export default SocialWidgets