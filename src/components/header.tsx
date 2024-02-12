import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header(props:string) {
    const {setSearchValue, searchValue} = props;
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();
    const navigateHome  = () => {
        // 👇️ navigate to home screen
        navigate('/');
      };
      const navigateSearch  = () => {
        // 👇️ navigate to search screen
        navigate('/search');
      };

        // Perform search logic here with the searchValue
    return (
        <header className="w-full h-[64px] rounded-t bg-[#111111] flex justify-between items-center sticky z-50 top-0 p-4">
            <ul className="flex items-center justify-center gap-2">
                <li className="bg-[#090909] rounded-full w-8 h-8 flex items-center justify-center">
                    <SlArrowLeft className="w-4 h-4 text-[#a4a4a4] cursor-pointer" onClick={navigateHome}/>
                </li>
                <li className="bg-[#090909] rounded-full w-8 h-8 flex items-center justify-center">
                    <SlArrowRight className="w-4 h-4 text-[#a4a4a4] cursor-pointer" onClick={navigateSearch}/>
                </li>
                {
                    pathname === "/search" && <div className="relative w-80 rounded-3xl ">
                        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="bg-[#1e1e1e] rounded-3xl block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 focus:ring-white focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to listen to?" required />
                    </div>
                }

            </ul>





            <ul className="flex items-center justify-center gap-4">
                <li className="text-[#a4a4a4] cursor-pointer">Sign up</li>
                <div className="flex items-center justify-center w-20 py-2 bg-white cursor-pointer rounded-2xl">
                    <li className="font-semibold text-black">Log in</li>
                </div>
            </ul>


        </header>
    )
}