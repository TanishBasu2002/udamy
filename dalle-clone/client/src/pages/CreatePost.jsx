import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {preview} from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField,Loader } from '../components';
const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name : '',
    prompt: '',
    photo: '',
  })
  const [generatingImg, setgeneratingImg] = useState(false);
  const [loading, setloading] = useState(false);
  const handleSubmit = (e) => {};
  const handleChange = (e) => setForm({ ...form, [e.target.name]:e.target.value});  
  const handelSupriseMe =()=>{const randomPromt = getRandomPrompt(form.prompt);setForm({...form,prompt:randomPromt})};
  const generatingImage = () => {};
  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>Create a collection of photos & Share Them</p>
    </div>
    <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}><div className='flex flex-col gap-5'>
      <FormField
        LableName ="Your Name"
        type = "text"
        name = "Name"
        placeholder = "Your Name"
        value = {form.name}
        handleChange={handleChange}
      />
      <FormField
        LableName ="promt"
        type = "text"
        name = "promt"
        placeholder = "3D render of a cute tropical fish in an aquarium on a dark blue background, digital art"
        value = {form.prompt}
        handleChange={handleChange}
        isSupriseMe
        handelSupriseMe={handelSupriseMe}
      />
    </div>

    <br />

    <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center'>
    {form.photo?(
      <img src={form.photo} alt={form.prompt} className='w-full h-full object-contain' />
    ):(
      <img src={preview} alt='preview' className='w-9/12 h-9/12 object-contain opacity-40' />
    )

    }
    {generatingImg && (
      <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
      <Loader/>
      </div>
    )

    }

    </div>
    <div className='mt-5 flex gap-5'>
      <button type='button' onClick={generatingImage} className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center' >{generatingImg?'Generating...':'Generate'}</button>
    </div>
    <div className='mt-10'>
      <p className='mt-2 text-[#666e75] text-[14px]'>Once Generated You Can Share It With The Comunity</p>
      <button type='submit' className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>{loading?'sharing...':'Share with the comunity'}</button>
    </div>
    </form>
    </section>
  )
}

export default CreatePost
