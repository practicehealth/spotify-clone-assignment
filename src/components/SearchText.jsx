import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const SearchText = () => {
    const [searchText, setSearchText] = useState("")
    const [focus,setFocus] = useState(true)
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setSearchText(e.target.value)
        navigate(`/search/${e.target.value}`)
    }

  return (
    <form onSubmit={e=>e.preventDefault()} className={`bg-[#242424] rounded-full py-3 px-4 flex gap-2 items-center text-lg w-full lg:w-80 ${focus && "border-2 border-white"}`}>
        <FiSearch/>
      <input
        placeholder="What do you want to listen to?"
        type="text"
        className="bg-transparent w-full text-white outline-none placeholder:text-[#626262] text-sm"
        value={searchText}
        onChange={handleChange}
        autoFocus
        onBlur={e=>setFocus(false)}
        onFocus={e=>setFocus(true)}
      />
    </form>
  );
};

export default SearchText;
