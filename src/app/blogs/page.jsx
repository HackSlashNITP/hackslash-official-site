import { connectToDb } from '@/lib/db'
import { Post } from '@/lib/models'
import Link from 'next/link';
import React from 'react'

const Blogs = async () => {

  await connectToDb();
  const blogs = await Post.find().populate({
    path: 'author',
    select: 'username'
  })
  // console.log(blogs);


  return (
    <section className='flex flex-col items-center noScrollbar' style={{background : 'url("/blogs-bg.jpg")', backgroundPosition : 'center', backgroundSize: 'cover', backgroundAttachment : 'fixed'}}>
      <div className='flex flex-col items-center gap-4 w-full'>
        <h1 className='text-4xl font-bold m-4'>Blogs</h1>
        <div className='flex flex-wrap w-full px-8 gap-8 justify-between'>

          {
            blogs.length > 0 && (
              blogs.map((blog) => (
                <Link href={'/blogs/' + blog._id} key={blog._id} style={{background : `url(${blog.images[0] || 'https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'})` , backgroundPosition : 'center', backgroundSize: 'cover'}} className='relative bg-center h-[300px] w-full md:w-[45%] lg:w-[30%] rounded-md flex justify-center items-center cursor-pointer transition-all duration-200 group border border-gray-500'>
                  <div className="absolute inset-0 bg-black opacity-40 rounded-md transition-all duration-200 group-hover:opacity-70"></div>

                  <div className="relative z-10 p-4 flex flex-col items-center gap-2 transition-all duration-200 group-hover:scale-110">
                    <h1 className="text-white font-semibold text-2xl">{blog.title}</h1>
                    <h2 className="text-white">{blog.author.username}</h2>
                    <span className='text-gray-500 text-sm'>{new Date(blog.createdAt).toDateString()}</span>
                  </div>
                </Link>
              ))
            )
          }







        </div>
      </div>


    </section>
  )
}

export default Blogs