import { useEffect, useRef, useState } from "react";
import SideLibrary from "./sideLibrary";
import SideMenu from "./sideMenu";

const Sidebar = () => {
    const [minWidth, maxWidth, defaultWidth] = [275, 425, 300];
    const [width, setWidth] = useState(parseInt(localStorage.getItem("sidebarWidth")!) || defaultWidth);
    const isDragged = useRef(false);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            if (!isDragged.current) {
                return;
            }

            setWidth((previousWidth) => {
                const newWidth = previousWidth + e.movementX / 2;
                const isWidthInRange = newWidth >= minWidth && newWidth <= maxWidth;
                return isWidthInRange ? newWidth : previousWidth;
            });
        });
        window.addEventListener("mouseup", () => {
            isDragged.current = false;
        });
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebarWidth", JSON.stringify(width));
    }, [width]);

    return (
        <div className="flex relative overflow-y-hidden select-none">
            <div className="relative flex flex-col gap-2" style={{ width: `${width / 16}rem` }}>
                <SideMenu />
                <SideLibrary />
            </div>

            <div className="w-2 bg-transparent cursor-col-resize hover:before:absolute before:content before:w-px before:h-full before:bg-gray-400"
                onMouseDown={() => { isDragged.current = true; }}
                style={{ cursor: isDragged.current ? "grabbing" : "grab" }}
            />
        </div>
    );
}

export default Sidebar;