import { faAngleLeft, faAngleRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import FlatButton from "../button/flatButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    return (
        <nav className="flex justify-between">
            <div className="flex gap-3 justify-center items-center">
                <FlatButton
                    icon={faAngleLeft} literal="" title="" href={""}
                    className="w-8 bg-neutral-950 flex rounded-[50%] aspect-square items-center justify-center text-gray-500" />

                <FlatButton
                    icon={faAngleRight} literal="" title="" href={""}
                    className="w-8 bg-neutral-950 flex rounded-[50%] aspect-square items-center justify-center text-gray-500"
                />

                {location.pathname === "/search" &&
                    <div className="items-center rounded-full bg-gray-800 px-4 py-2 hover:border transition duration-300 focus-within:border-gray-500">
                        <FontAwesomeIcon className="text-gray-600" icon={faSearch} />
                        <input
                            type="text"
                            placeholder="What do you want to play?"
                            className="ml-2 text-sm bg-transparent outline-none focus:outline-none w-60"
                        />
                    </div>}
            </div>

            <ul role="menu" className="flex items-center gap-10">
                <li>
                    <FlatButton
                        icon="0" literal={"Sign up"} title="" href={""}
                        className="text-neutral-400 hover:text-white font-bold hover:scale-105"
                    />
                </li>
                <li>
                    <FlatButton
                        icon={"0"} literal={"Log in"} title="" href={""}
                        className="px-8 py-3 rounded-full text-black justify-center font-bold hover:scale-105 text-sm bg-white"
                    />
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;