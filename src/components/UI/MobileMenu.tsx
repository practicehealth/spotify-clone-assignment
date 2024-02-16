import { useState } from 'react';
import hamburgerIcon from '../../../public/ham.svg';
import cross from '../../../public/cross.svg';

function MobileMenu() {
    const [active, setActive] = useState(false);

    return (
        <nav className={`nav ${active ? 'active' : ''}`}>
            <div className="flex justify-center items-center relative w-6 h-6 cursor-pointer" onClick={() => setActive(prev => !prev)}>
                <img src={active ? cross : hamburgerIcon} alt="Menu" className="w-full h-auto z-50" />
            </div>
            {active && 
            <div className="menu bg-black fixed top-0 left-0 z-40 w-full h-full flex items-center px-10 py-14">
                <div className="nav_list mx-auto w-full h-full">
                    <ul className="list-none flex flex-col">
                        <li className='my-3'><a href="/products" className="text-white font-bold text-2xl cursor-pointer">Log in</a></li>
                        <li className='my-3'><a href="/products" className="text-white font-bold text-2xl cursor-pointer">Sign up</a></li>
                        
                        <div className="w-4 my-8 border border-white"></div>

                        <li  className='my-2'><a href="/account" className="text-white font-bold text-lg cursor-pointer">Premium</a></li>
                        <li className='my-2'><a href="/account" className="text-white font-bold text-lg cursor-pointer">Account</a></li>
                        <li  className='my-2'><a href="/account" className="text-white font-bold text-lg cursor-pointer">Settings</a></li>
                        <li  className='my-2'><a href="/account" className="text-white font-bold text-lg cursor-pointer">Log out</a></li>
                    </ul>
                </div>
            </div>}
        </nav>
    )
}

export default MobileMenu;


// import { useState } from 'react';
// import './MobileMenu.css'; // Import CSS directly

// // Import your hamburger and cross icons
// import hamburgerIcon from '../../../public/ham.svg';
// import search from '../../../public/search.svg';

// function MobileMenu() {
//     const [active, setActive] = useState(false);

//     return (
//         <nav className={`nav ${active ? 'active' : ''}`}>
//             <div className="nav_hamburger" onClick={() => setActive(prev => !prev)}>
//                 {/* Use conditional rendering to display appropriate icon */}
//                 <img src={active ? search : hamburgerIcon} alt="Menu" />
//             </div>
//             {active && 
//             <div className="menu">
//                 <div className="nav_list">
//                     <ul>
//                         <li><a href="/products">Log in</a></li>
//                         <li><a href="/account">Sign up</a></li>
//                         <div className='w-4 my-8 border border-white'>

//                         </div>
//                         <li><a href="/account">Premium</a></li>
//                         <li><a href="/account">Help</a></li>
//                         <li><a href="/account">Download</a></li>
//                         <li><a href="/account">Privacy</a></li>
//                         <li><a href="/account">Terms</a></li>
//                     </ul>
//                 </div>
             
//             </div>}
//         </nav>
//     )
// }

// export default MobileMenu;







// import { useState } from 'react';
// import './MobileMenu.css'; // Import CSS directly

// function MobileMenu() {
//     const [active, setActive] = useState(false);

//     return (
//         <nav className={`nav ${active ? 'active' : ''}`}>
//             <div className={`nav_hamburger ${active ? 'active' : ''}`} onClick={() => setActive(prev => !prev)}>
//                 <div className="bar"></div>
//             </div>
//             {active && 
//             <div className="menu">
//                 <div className="nav_list">
//                     <ul>
//                         <li><a href="/products">Shop All</a></li>
//                         <li><a href="/account">Account</a></li>
//                         <li><a href="/account">Cart</a></li>
//                         <li><a href="/account">About</a></li>
//                         <li><a href="/account">Sign in</a></li>
//                     </ul>
//                 </div>
//                 <div className="footer">
//                     <span>NEURO</span>
//                 </div>
//             </div>}
//         </nav>
//     )
// }

// export default MobileMenu;
