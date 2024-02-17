import { useLocation } from "react-router-dom"
import { MENU_LIST } from "../../constants/menu"
import FlatButton from "../button/flatButton"
import SectionContainer from "../section/sectionContainer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

const SideMenu = () => {
    const location = useLocation();
    return (
        <SectionContainer className="gap-6 px-6 py-5">
            <div className="flex flex-row text-white gap-1">
                <FontAwesomeIcon size="xl" icon={faSpotify} />
                <p className="">Spotify</p>
            </div>
            {MENU_LIST.map((menu: any) => {
                return (
                    <FlatButton
                        key={menu.label}
                        literal={menu.label}
                        href={menu.href}
                        icon={menu.Icon}
                        className={`flex gap-5 text-md font-bold ${location.pathname === menu.href ? "text-white" : "text-neutral-400"}`}
                        title={""}
                    />
                )
            })}
        </SectionContainer>
    )
}

export default SideMenu;