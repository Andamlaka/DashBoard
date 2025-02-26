import React from 'react';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
   <header className='flex justify-between items-center  p-4'>
    <div className='flex items-center gap-2'>
   <Image
   src='/logo.jpg'
   alt='Logo'
   width={34.54}
   height={38.7}
   />
   <h1  className='font-bold font-Manrope text-[25px] text-[#11142D] '>Yariga</h1>
    </div>
    <div className='flex items-center 
    w-[405px] h-[38px] gap-2 bg-[#F4F4F4] rounded-[10px] px-1 '>
     <div className='flex items-center gap-2 w-full'>
  <CiSearch />
  <input
    type='text'
    placeholder='Search property, customers etc'
    className='bg-[#F4F4F4] p-2 h-6  w-full'
  />
</div>

     
       
{/* searchbar */}
    </div>
<div>
    {/* notfication and profile */}
</div>
   </header>
  )
}

export default Header