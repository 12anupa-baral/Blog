import React, { useState } from 'react'
import Nav from '../components/Nav'

const CreateBlog = () => {
    const [data ,setData]=useState({
        title:"",
        subtitle:"",
        description:"",
        image:""
    }
       
    )

    const handleChange =(e)=>{
        // const value =e.target.value
       
        const [name ,value]  ="e.target"
        setData({
            ...data,
            [name]:value
        })
    

    }

    const createBlog=(e)=>{
        e.preventdefault();
console.log(submit)
    }


    console.log(data)
  return (
    <div>
        <Nav/>
        <form onSubmit={createBlog} >
        <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
  <div class="mt-10 text-center font-bold">Contact Us</div>
  <div class="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
  <div class="p-8">
    <div class="flex gap-4">
      <input type="Name" name="title" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Title*" onChange={handleChange} />
      <input type="email" name="subtitle" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Subtitle *"  onChange={handleChange} />
    </div>
    <input type="file" name="image" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="file*"  onChange={handleChange} />
    <div class="">
      <textarea name="textarea" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300 "  onChange={handleChange}>Description</textarea>
    </div>
    <div class="text-center">
      <button  type="submit" class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create Blog</button>
    </div>
  </div>
</div>
</form>

    </div>
  )
}

export default CreateBlog