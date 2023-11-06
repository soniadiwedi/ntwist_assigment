import React from 'react'

const CardsInfo = ({title,desc,image,i}) => {
  return (
    <div className={` grid grid-cols-2 gap-10`}>
        <div className={`flex flex-col justify-center gap-4 ${i%2==0?"order-first":"order-last"} `}>
            <h1 className='text-3xl text-[#FF3A2D]'>{title}</h1>
            <p className='text-md text-gray-800  text-justify '>{desc}</p>
            <div className='mt-5'>
            <button className='bg-[#FF3A2D] text-white py-2 text-xs font-semibold px-5 rounded-sm'>Read More</button>
            </div>
        </div>
        <div className=''>
            <img className=' object-contain object-center' src={image} alt={title} />
        </div>
    </div>
  )
}

export default CardsInfo