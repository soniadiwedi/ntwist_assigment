import React, { useEffect, useState } from 'react'
import {BsCaretDownFill} from 'react-icons/bs'
const Navbar = () => {
    const [fixed,setFixed]= useState(false);
    const [hover,setHover]= useState(false);
    const [visit,setVisit]= useState(false);
    const handleHover=()=>{
        setHover(true);
    }
    const handleLeave=()=>{
        setTimeout(() => {
            if(hover&&!visit)
            setHover(false);
        }, 1500);
    }
    const handleVisit=()=>{
        setVisit(true);
        setHover(true);
    }
    const handleVisitOver=()=>{
        setTimeout(() => {
            if(visit&&hover){
                setVisit(false);
                setHover(false);
            }else{
                setVisit(true);
                setHover(true);
            }
        }, 1500);
    }

    useEffect(()=>{
        window.addEventListener('scroll',(e)=>{
            console.log(window.scrollY);
            if(window.scrollY>=100&&!fixed){
                setFixed(true);
            }
            if(window.scrollY<100){
                setFixed(false);
            }
        })
    },[])
  return (
    <div className=' bgurl transition-all duration-700'>
        <div className={`${fixed?"bg-white":"bg-transparent"} fixed top-0 w-[100%] flex py-1 items-center justify-between px-[3%]`}>
            <div>
                <img className='w-[10rem]' loading='lazy' src={!fixed?"https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png":"https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"} alt="" />
            </div>
            <div className={` font-semibold text-md flex items-center gap-8 ${fixed?"text-[#003358]":"text-white"} font-inter font-sans`}>
                <p className=' cursor-pointer border-b-[1px] transition-all duration-1000 border-gray-800'>Home</p>
                <p className='relative cursor-pointer ' onMouseLeave={handleLeave} onMouseEnter={handleHover} >
                    <span className='flex items-center gap-2'><span>Industries</span>  <BsCaretDownFill className='text-xs' /></span>
                        <div className={` ${hover?"opacity-1":"opacity-0"} transition-all duration-700`}>

                        {hover&& <div onMouseEnter={handleVisit} onMouseLeave={handleVisitOver} className={`bg-white   text-gray-600 w-[18rem] absolute my-4 p-4 rounded-lg`}>
                        <div className='flex flex-col gap-5'>
                        <p className='hover:text-black  transition-all duration-500 cursor-pointer'>Sustainability</p>
                        <p className='hover:text-black cursor-pointer '>Mineral Processing</p>
                        <p className='hover:text-black cursor-pointer '>Mine-To-Mill-To-Mine Optimization</p>
                        <p className='hover:text-black cursor-pointer '>Oil &Gas</p>
                    </div>
                    </div>}
                        </div>
                </p>
                <p className=' cursor-pointer hover:border-b-[1px] transition-all duration-1000 border-gray-800'>AI Software</p>
                <p className=' cursor-pointer hover:border-b-[1px] transition-all duration-1000 border-gray-800'>Blog</p>
                <p className=' cursor-pointer hover:border-b-[1px] transition-all duration-1000 border-gray-800'>Contact Us</p>
            </div>
        </div>
        <div className='w-[90%] m-auto h-full flex items-center justify-center'>
            <div className='flex items-center gap-12 '>
                <div className='w-[80%] flex flex-col gap-8'>
                    <h1 className='text-white font-bold text-5xl'>Data-powered solutions for Industrial Excellence</h1>
                <div>
                <a href="/" className=' bg-sky-600 font-semibold font-roboto text-white font-sans py-3 px-8 hover:bg-sky-500 transition-colors duration-150  text-xs rounded-sm' >Read More</a>
                </div>
                </div>
                <div>
                    <img className=' object-contain w-[90%]' src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar