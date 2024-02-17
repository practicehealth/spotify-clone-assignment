import React from "react";
import { Link } from "react-router-dom";
import { ButtonProps } from "../../ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlatButton: React.FC<ButtonProps> = ({ icon, className, literal, title, href = "" }) => {
    const btnClass = `focus:outline-[3px] focus:outline-white whitespace-nowrap ${className}`;
    return href === "" ?
        (
            <button className={btnClass} title={title}>
                <FontAwesomeIcon size="xl" icon={icon} />
                {literal}
            </button>
        ) : (
            <Link
                to={href}
                className={btnClass}>
                <FontAwesomeIcon size="xl" icon={icon} />
                {literal}
            </Link>
        );
}

export default FlatButton;