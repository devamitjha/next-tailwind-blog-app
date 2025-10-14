import React from 'react';
import Image from 'next/image';
import userAvatar from "@/assets/images/avatar-2.jpg";
import Cat from "@/assets/images/cat-small.jpg";
import Link from 'next/link';

const ListCard = () => {
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
    <div className="flex flex-col gap-15 w-full">
      {blogs.map((blog) => (
        <div key={blog.id} className="card flex justify-between items-center ">
            <Link href="/" className="card-image w-[40%] rounded-2xl shadow-xl overflow-hidden">
              <Image src={blog.image} alt={blog.title} width="307" height="307" priority className="w-full h-full object-cover"/>
            </Link>
            <div className="card-content w-[60%] py-5 ps-10 pe-5 flex flex-col">
                <h2 className="text-3xl line-clamp-2 font-bold leading-snug"><Link href="/" className="hover">{blog.title}</Link></h2>
                <div className="meta flex justify-start items-center gap-2 my-4">
                  <Link href="/" className="flex justify-start items-center gap-2">
                    <div className="bio w-10 h-10 shadow-lg rounded-full overflow-hidden">
                        <Image src={userAvatar} alt={blog.author} width="40" height="40" className="w-full h-full object-cover"/>
                    </div>
                    <span className="text-sm text-black">By <span className="text-[var(--primary-theme-color)]">{blog.author}</span></span>
                  </Link>
                  <time className="time text-sm text-[var(--text-color-light)]"><span className="dot"></span>{blog.date}</time>
                </div>
                <p className="text-base text-black line-clamp-2">{blog.desc}</p>
                <div className="flex justify-between gap-4 items-center mt-8">
                  <Link href="/" className="btn filled text-white">Read More</Link>
                  <div className="text-sm text-gray-500">{blog.readTime}</div>
                </div>
            </div>

        </div>
      ))}
    </div>
  )
}

export default ListCard