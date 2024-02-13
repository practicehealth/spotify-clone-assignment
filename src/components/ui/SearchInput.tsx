"use client";

import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { BiSearch } from "react-icons/bi";
import { urls } from "../../constants/url";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);
  const navigate = useNavigate();
  useEffect(() => {
    if (!debouncedValue) {
      navigate(urls.search);
      return;
    }
    const url = `${urls.search}/${debouncedValue}`;
    navigate(url);
  }, [navigate, debouncedValue]);

  return (
    <div className="flex items-center border-2 border-transparent rounded-full bg-secondary hover:border-white">
      <div className="pl-4">
        <BiSearch className="w-5 h-5 text-secondary" />
      </div>
      <input
        autoFocus
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="What do you want to listen to?"
        className="py-2 pl-2 pr-4 text-white rounded-full bg-secondary focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
