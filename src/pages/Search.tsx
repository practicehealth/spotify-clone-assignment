import categories from "../data/categories";
import Title from "../components/Title";
import Category from "../components/CategoryItem";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Search() {
  return (
    <>
      <div className=" z-10 relative flex w-screen bg-black h-fit sm:min-h-screen text-white">
        <Sidebar />
        <div className=" flex flex-col w-full bg-slate-500 bg-opacity-30">
          <Navbar flag={true} />
          <section className="   ">
            <Title title="Browse all" />
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 py-2 md:py-1 md:grid-cols-4 lg:grid-cols-5 gap-4 px-5 cursor-pointer  ">
              {categories.slice(0, 15).map((category, index) => (
                <Category key={index} category={category} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Search;
