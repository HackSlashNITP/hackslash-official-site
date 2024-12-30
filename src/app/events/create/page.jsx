'use client'
import React, { useContext, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading editor...</p>
})
import 'react-quill/dist/quill.snow.css';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { createEvent } from '@/lib/actions';
import { redirect, useRouter } from 'next/navigation';
import { UserContext } from '@/lib/userContext';

const CreateEvent = () => {
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);
  const [date, setDate] = useState(null);
  const [location,setLocation] = useState('');
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const {user} = useContext(UserContext);

  useEffect(() => {
    if(user == undefined) {
      return;
    }
    if(!user) {
      router.push('/login');
    }else {
      setLoading(false)
    }
  },[user])
  
  if(loading) {
    return (
      <div>Loading...</div>
    )
  }

  const removeImg = (index) => {
    try {
      setImages((prev) => {
        return prev.filter((img, ind) => ind != index);

      })
    } catch (error) {
      console.log(error);

    }
  }

  const handleClick = async () => {
    try {
      if(!value || !title || !(images.length > 0) || !date) {
        return alert('Please add all fields');
      }

      const data = await createEvent(title,value, images, date,location, link);
      if(data?.success) {
       return  router.push(data?.url);
      }
      alert(data.error);

    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <section className='flex flex-col items-center text-white'>
      <h1 className='font-bold text-3xl'>Create an Event</h1>
      <div className='flex-col lg:flex-row flex gap-4 w-full p-4'>
        <div className='flex-[3] flex flex-col gap-4'>
          <input type="text" name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Enter a title for the event' className='bg-gray-900 p-2 rounded-md'/>
          <input type="text" name='location' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location of event' className='bg-gray-900 p-2 rounded-md'/>
          <input type="text" name='link' value={link} onChange={(e) => setLink(e.target.value)} placeholder='Registration link(if any)' className='bg-gray-900 p-2 rounded-md'/>
          <input type="date" style={{color : 'black', background : 'white'}} name="date" className='w-fit bg-black text-white bg-gray-900 p-2 rounded-md' onChange={(e) => setDate(e.target.value)
          }/>
          <ReactQuill className='h-[450px]' theme="snow" value={value} onChange={setValue} />
        </div>

        <div className='flex-[1] flex flex-col items-center gap-8'>
          <h1 className='text-xl font-semibold'>Media</h1>
          <p className='text-gray-500'>*The first image will be used as thumbnail</p>

          <CldUploadWidget uploadPreset="hackslash" onSuccess={(result, { widget }) => {
            // console.log(result);
            setImages((prev) => [...prev, result?.info?.secure_url]);
          }} >
            {({ open }) => {
              return (
                <button className='bg-blue-500 p-2 rounded-md text-white' onClick={() => open()}>
                  Upload Images
                </button>
              );
            }}
          </CldUploadWidget>

          <div className='flex flex-wrap gap-2 justify-between p-2 w-full'>
            {
              images.length > 0 && (
                images.map((img, index) => (
                  <div key={index} className='h-[100px] w-[150px] relative rounded-md bg-gray-400 my-2'>
                    <Image src={img} fill alt='img' className='object-cover rounded-md relative ' />
                    <div className='absolute top-1 cursor-pointer right-1 hover:scale-125 duration-500 transition-all text-white font-extrabold ' onClick={() => removeImg(index)}>X</div>
                  </div>
                ))
              )
            }
          </div>

            <button className='bg-green-500 text-white p-2 rounded-md' onClick={handleClick}>Create Event</button>

        </div>
      </div>
    </section>
  )
}

export default CreateEvent;