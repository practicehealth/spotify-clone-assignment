// if it does not work correctly then implement the enter functionality... it is currently not working as intended...

import { BiSearch } from "react-icons/bi";
import { urls } from "../../constants/url";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const SearchInput = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchValue, setSearchValue] = useState("")
  const handelSearch = (value: string) => {
    const url = `${urls.search}/${value}`;
    setSearchValue(value);
    navigate(url);
  };
  
  return (
    <div className="flex items-center transition-all duration-150 border-2 border-transparent rounded-full bg-secondary hover:border-white">
      <div className="pl-4">
        <BiSearch className="w-5 h-5 text-secondary" />
      </div>
      <input
        autoFocus
        onChange={(e) => {
          handelSearch(e.target.value)
        }}
        value={searchValue || params.id || ""}
        type="text"
        placeholder="What do you want to listen to?"
        className="py-2 pl-2 pr-4 text-white rounded-full bg-secondary focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
