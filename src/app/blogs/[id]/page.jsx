import { connectToDb } from '@/lib/db';
import { Post } from '@/lib/models';
import React from 'react'
import DOMPurify from "isomorphic-dompurify";

const BlogPost = async ({params}) => {
   const {id} = params;
    
   await connectToDb()
   const post = await Post.findById(id).populate({
    path : 'author',
    select : 'username'
   }); // this contains the post information
   
   if(!post) {
        return (
            <h1>No such blog exists</h1>
        )
   }

   //post contains, post.title , post.desc, post.images array and a createdAt date
   //post.user object has username property
   

  return (
   <section className='flex flex-col items-center justify-center'>
    <p>This page needs to be updated</p>
    <div className='w-[90%] bg-gray-900 p-8 rounded-lg'>
      
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{__html : DOMPurify.sanitize(post.desc)}} />
    </div>
   </section>
  )
}

export default BlogPost