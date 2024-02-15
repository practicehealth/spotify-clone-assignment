import React from 'react'

const Button = ({type,children,className=""}) => {
    let style;
    switch(type){
        case "primary":
            style=`bg-white text-black font-semibold rounded-full hover:bg-[#f6f6f6]`;
            break;
        case "secondary": 
            style=`border-2 border-[#727272] text-white rounded-full hover:border-white`;
            break;
        case "tertiary": 
            style=`text-[#a7a7a7] font-semibold hover:text-white`
            break;
    }
  return (
    <button className={`${style} ${className}`}>
      {children}
    </button>
  )
}

export default Button
