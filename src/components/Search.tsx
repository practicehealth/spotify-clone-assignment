import MainFooter from './MainFooter'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom'
import CategoryCards from './CategoryCards'
import { FaSearch } from "react-icons/fa";
import { categoriesData } from '../dataList'

type Props = {}

const Search = (props: Props) => {
    const navigate = useNavigate();

    const goForward = () => {
        navigate(1);
    };

    const goBack = () => {
        navigate(-1);
    };






    return (
        <div className='flex w-full bg-white font-light h-full flex-col rounded-md justify-start overflow-hidden box-border'>
            <div className="flex justify-between sticky top-0 z-10 px-8 py-4 flex-none bg-bgheader ">
                <div className='flex items-center gap-2'>
                    <button className="flex rounded-full bg-primary w-10 h-10 items-center justify-center" onClick={goBack}><FaAngleLeft className='text-secondary size-6' /></button>
                    <button className="flex rounded-full bg-primary w-10 h-10 items-center justify-center" onClick={goForward}><FaAngleRight className="text-secondary size-6" /></button>
                    <div className="flex items-center rounded-full bg-serchGray px-4 py-2 hover:border border-transparent transition duration-300 focus-within:border-white">
                        <FaSearch className="text-gray-600" />
                        <input
                            type="text"
                            placeholder="What you want to listen to?"
                            className="ml-2 bg-transparent outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className='flex items-center justify-between gap-8'>
                    <button className='text-secondary flex font-bold hover:scale-105 hover:font-bold'>Sign up</button>
                    <button className="text-lg font-semibold bg-white rounded-full py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold">
                        Log in
                    </button>
                </div>
            </div>
            <div className=" flex flex-col overflow-y-auto flex-1 bg-primary py-8 px-6">
                <h2 className="text-2xl font-semibold mb-4 text-secondary">Browse All</h2>
                <div className="flex flex-wrap gap-4 mb-10">
                    {categoriesData.map((category, index) => (
                        <CategoryCards category={category} key={index} />
                    ))}
                </div>
                <MainFooter />
            </div>
        </div>
    )
}

export default Search