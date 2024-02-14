import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import CategoryItem from "../components/CategoryItem";
import categories from "../data/categories";
import { useDispatch } from "react-redux";
import { actions } from "../store/sideBarSlice";

const SearchPage = () => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex w-full font-light h-full flex-col rounded-md justify-start overflow-hidden box-border z-10 ">
      <div className="flex justify-between sticky top-0 z-10 px-1 py-4 sm:px-4 flex-none bg-bgheader ">
        <div className="flex items-center gap-2">
          <button
            className="flex rounded-full bg-primary w-10 h-10 items-center justify-center sm:hidden"
            onClick={() => dispatch(actions.toggleSideBar())}
          >
            <RxHamburgerMenu className="text-secondary size-8" />
          </button>
          <button className="hidden rounded-full bg-primary w-10 h-10 items-center justify-center sm:flex">
            <FaAngleLeft className="text-secondary size-6" />
          </button>
          <button className="hidden rounded-full bg-primary w-10 h-10 items-center justify-center sm:flex">
            <FaAngleRight className="text-secondary size-6" />
          </button>
          <form
            onSubmit={() => navigate(`/searchResults?query=${query}`)}
            className="flex items-center rounded-full bg-serchGray px-6 py-2 hover:border border-transparent transition duration-300 focus-within:border-white"
          >
            <FaSearch className="text-gray-600" />
            <input
              type="text"
              value={query}
              placeholder="What you want to listen to?"
              className="ml-2 bg-transparent outline-none focus:outline-none"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setQuery(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="hidden items-center justify-between gap-8 md:flex sm:flex">
          <button className="text-secondary flex font-bold hover:scale-105 hover:font-bold">
            Sign up
          </button>
          <button className="text-lg font-semibold bg-white text-black rounded-full py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold">
            Log in
          </button>
        </div>
      </div>
      <div className=" flex flex-col overflow-y-auto flex-1 bg-primary py-4 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-secondary">
          Browse All
        </h2>
        <div className="flex flex-wrap gap-6 mb-10">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
