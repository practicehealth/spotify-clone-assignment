import React from 'react'

const Card = ({title,image,description}) => {
  return (
    <div className='p-2 w-56 xs:w-52 md:w-48 lg:w-52 cursor-pointer bg-[#181818] space-y-2'>
        <div className='w-44 h-44 border-[1px] rounded-md mx-auto'>
            <img className='w-full h-full'/>
        </div>
      <h3 className='font-semibold px-2'>{title}</h3>
      <p className='px-2 text-[#a7a7a7]'>{description.slice(0,40)}{description.slice(41) && "..."}</p>
    </div>
  )
}

export default Card
