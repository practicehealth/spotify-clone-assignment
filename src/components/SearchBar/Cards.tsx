import React from 'react'
import science from '../../assets/science.jpeg';

const Cards = ({name, imageCard, cardColor}) => {

  return (
    <div className='w-full p-1 '>
      <div className='p-2 pl-3 h-auto  visible'>
        <div className='flex flex-col h-48 w-48 rounded-xl justify-between gap-y-3 pt-2 pl-4 overflow-hidden '
        style={{ backgroundColor: cardColor }}  >

            <h3 className=' font-semibold text-xl'>{name}</h3>

            <div className='flex pt-3 h-18 justify-end overflow-hidden'>
            <img className='h-24 w-24' 
                style=
                {
                    {right : 0, 
                    transform :'rotate(25deg) translate(18%, -2%'
                    }
                } src={imageCard} />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Cards