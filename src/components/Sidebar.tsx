import { Link, useLocation } from "react-router-dom"
import SpotifyLogo from "../assets/SpotifyLogo"

function Sidebar() {
const {pathname} = useLocation()
  return (
    <div className="sidebar w-full relative overflow-hidden py-8 px-2 bg-[#121212]">
        <div className="px-6">
                <SpotifyLogo />
                <ul className={` mt-3 flex flex-col gap-2 text-sm font-medium text-left`}>
                    <Link to={'/'}>
                      <li className="h-10 flex gap-5 items-center text-base font-semibold cursor-pointer"> 
                        <svg className={pathname === '/' ? 'fill-white' : 'fill-none'} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.5 0.515022C11.0439 0.251717 10.5266 0.113098 10 0.113098C9.47339 0.113098 8.95606 0.251717 8.5 0.515022L1 4.84502C0.695969 5.02055 0.443498 5.27302 0.267962 5.57705C0.0924258 5.88108 8.91844e-06 6.22596 0 6.57702V20C0 20.2652 0.105357 20.5196 0.292893 20.7071C0.48043 20.8947 0.734784 21 1 21H7C7.26522 21 7.51957 20.8947 7.70711 20.7071C7.89464 20.5196 8 20.2652 8 20V14H12V20C12 20.2652 12.1054 20.5196 12.2929 20.7071C12.4804 20.8947 12.7348 21 13 21H19C19.2652 21 19.5196 20.8947 19.7071 20.7071C19.8946 20.5196 20 20.2652 20 20V6.57702C20 6.22596 19.9076 5.88108 19.732 5.57705C19.5565 5.27302 19.304 5.02055 19 4.84502L11.5 0.515022Z" stroke="#a7a7a7" strokeWidth={1}/>
                        </svg>
                        <h4 className={`${pathname === '/' ? 'text-white' : 'text-[#a7a7a7]' } `}>Home</h4>
                      </li>
                    </Link>
                    <Link to={'/search'}>
                        <li className="h-10 flex gap-5 items-center text-base font-semibold cursor-pointer"> 
                        <svg className={pathname === '/' ? 'fill-none' : 'fill-white'} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.533 0.278931C4.35215 0.278931 0.125977 4.41887 0.125977 9.5579C0.125977 14.697 4.35215 18.8369 9.533 18.8369C11.767 18.8369 13.8235 18.0671 15.4402 16.7794L19.7929 21.132C20.1834 21.5226 20.8166 21.5226 21.2071 21.132C21.5976 20.7415 21.5976 20.1083 21.2071 19.7178L16.8634 15.3741C18.1616 13.7849 18.94 11.7634 18.94 9.5579C18.94 4.41887 14.7138 0.278931 9.533 0.278931ZM2.12598 9.5579C2.12598 5.55226 5.42768 2.27893 9.533 2.27893C13.6383 2.27893 16.94 5.55226 16.94 9.5579C16.94 13.5636 13.6383 16.8369 9.533 16.8369C5.42768 16.8369 2.12598 13.5636 2.12598 9.5579Z" stroke="#a7a7a7"/>
                            </svg>
                         <h4 className={`${pathname === '/' ? 'text-[#a7a7a7]' : 'text-[#fff]' } `}>Search</h4>
                        </li>
                    </Link>
                    <li className="mt-5 h-10 flex justify-between items-center text-base font-semibold cursor-pointer text-[#a7a7a7]"> 
                        <span className="flex gap-4">
                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.25 0.567013L13.4997 0.134493L13.25 0.567016L19.25 4.03101C19.326 4.0749 19.3891 4.13801 19.433 4.21402C19.4769 4.29003 19.5 4.37625 19.5 4.464V19C19.5 19.1326 19.4473 19.2598 19.3536 19.3536C19.2598 19.4473 19.1326 19.5 19 19.5H13C12.8674 19.5 12.7402 19.4473 12.6464 19.3536C12.5527 19.2598 12.5 19.1326 12.5 19V1.00001C12.5 0.912246 12.5231 0.826026 12.567 0.750017C12.6109 0.674009 12.674 0.610892 12.75 0.56701C12.826 0.523127 12.9122 0.500025 13 0.500026C13.0878 0.500026 13.174 0.523129 13.25 0.567013ZM1 19.5C0.867391 19.5 0.740214 19.4473 0.646447 19.3536C0.552679 19.2598 0.5 19.1326 0.5 19V1C0.5 0.867392 0.552678 0.740215 0.646447 0.646447C0.740215 0.552678 0.867392 0.5 1 0.5C1.13261 0.5 1.25979 0.552678 1.35355 0.646447C1.44732 0.740215 1.5 0.867392 1.5 1V19C1.5 19.1326 1.44732 19.2598 1.35355 19.3536C1.25979 19.4473 1.13261 19.5 1 19.5ZM6.64645 0.646447C6.74021 0.552678 6.86739 0.5 7 0.5C7.13261 0.5 7.25979 0.552678 7.35355 0.646447C7.44732 0.740215 7.5 0.867392 7.5 1V19C7.5 19.1326 7.44732 19.2598 7.35355 19.3536C7.25979 19.4473 7.13261 19.5 7 19.5C6.86739 19.5 6.74021 19.4473 6.64645 19.3536C6.55268 19.2598 6.5 19.1326 6.5 19V1C6.5 0.867392 6.55268 0.740215 6.64645 0.646447Z" fill="#a7a7a7" stroke="#a7a7a7"/>
                        </svg>
                       Your Library
                        </span>
                       <svg className=" mr-4" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.59033 0.96167V12.2117M12.2153 6.58667H0.965332" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </li>
                </ul>
        </div>
                <div className=" relative z-10 mb-[-16px] w-full h-5  bg-gradient-to-b from-black to-transparent"></div>
                <div className=" mt-2  h-[35vh] w-full overflow-y-scroll overflow-x-hidden p-2" style={{position: 'relative'}}>
                    <div className="w-full bg-gray p-5 rounded-md">
                        <h4 className=" text-[1rem] font-bold mb-3">Create your first playlist</h4>
                        <p className="text-[0.875rem] font-normal">its easy, we'll help you</p>
                        <button className="bg-white text-black text-[0.875rem] pt-2 flex items-center justify-center h-[2rem] px-3 rounded-3xl mt-5">
                            Create playlist
                        </button>
                    </div>
                    <div className="mt-5 w-full bg-gray p-5 rounded-md">
                        <h4 className=" text-[1rem] font-bold mb-3">Let's find some podcasts to follow</h4>
                        <p className="text-[0.875rem] font-normal">We'll keep you updated on new episodes</p>
                        <button className="bg-white text-black text-[0.875rem] pt-2 flex items-center justify-center h-[2rem] px-3 rounded-3xl mt-5">
                           Browse podcasts
                        </button>
                    </div>
                </div>
                <div>
                    <ul className=" flex flex-wrap gap-5 px-6 mt-7">
                        <li className=" text-[0.7rem] w-max font-[100]" >Legal</li>
                        <li className=" text-[0.7rem] w-max font-[100]" >Privacy Center</li>
                        <li className=" text-[0.7rem] w-max font-[100]" >Privacy Policy</li>
                        <li className=" text-[0.7rem] w-max font-[100]" >Cookies</li>
                        <li className=" text-[0.7rem] w-max font-[100]" >About Adds</li>
                        <li className=" text-[0.7rem] w-max font-[100]" >Accessibilty</li>
                        <li className=" text-[0.7rem] w-max font-[100]" >Cookies</li>
                    </ul>
                    <button className="bg-black border-zinc-300 border ml-6 gap-2 text-white text-[0.875rem] pt-2 flex items-center justify-center px-3 rounded-3xl mt-5">
                        <svg className="mb-2" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.68799 0.965454C4.20088 0.965454 0.562988 4.60334 0.562988 9.09045C0.562988 13.5776 4.20088 17.2155 8.68799 17.2155C13.1751 17.2155 16.813 13.5776 16.813 9.09045C16.813 4.60334 13.1751 0.965454 8.68799 0.965454Z" stroke="white" stroke-miterlimit="10"/>
                            <path d="M8.68804 0.965454C6.41968 0.965454 4.28687 4.60334 4.28687 9.09045C4.28687 13.5776 6.41968 17.2155 8.68804 17.2155C10.9564 17.2155 13.0892 13.5776 13.0892 9.09045C13.0892 4.60334 10.9564 0.965454 8.68804 0.965454Z" stroke="white" stroke-miterlimit="10"/>
                            <path d="M3.27124 3.67371C4.76499 4.73425 6.64546 5.36667 8.68804 5.36667C10.7306 5.36667 12.6111 4.73425 14.1048 3.67371M14.1048 14.5073C12.6111 13.4468 10.7306 12.8143 8.68804 12.8143C6.64546 12.8143 4.76499 13.4468 3.27124 14.5073" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.68799 0.965454V17.2155M16.813 9.09045H0.562988" stroke="white" stroke-miterlimit="10"/>
                        </svg>
                        English
                    </button>
                </div>
                <div className=" z-10 flex justify-between items-center fixed bottom-0 w-[98%] mx-auto bg-gradient-to-r from-[#ae2997] to-blue-500 p-3">
                    <div>
                        <h5>Preview Spotify</h5>
                        <p className="text-[0.875rem] font-normal">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
                    </div>
                    <button className="bg-white text-black text-[0.875rem] pt-2 flex items-center justify-center h-[2rem] px-3 rounded-3xl">
                          Sign up free
                    </button>
                </div>
    </div>
  )
}

export default Sidebar