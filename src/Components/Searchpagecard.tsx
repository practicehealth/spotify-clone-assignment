import React from 'react'
interface Searchdata{
    color:string;
    title:string;
    url:string;
}

const Searchpagecard:React.FC<Searchdata> = ({color,title,url}) => {
  return (
    <div className='w-[170px] h-[170px] z-1 rounded-md cursor-pointer m-2 relative overflow-hidden' style={{ backgroundColor: color }}>
    <h1 className='absolute top-0 left-0 right-0 text-center text-white'>{title}</h1>
    <img
        src={url}
        className='w-[100px] h-[100px] absolute bottom-[-5px] right-[-20px] transform rotate-[20deg]'
        alt={title}
    />
    
</div>
  
  )
}

export default Searchpagecard