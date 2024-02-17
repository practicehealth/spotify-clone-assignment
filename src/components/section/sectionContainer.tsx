import React from "react";
import { SectionContainerProps } from "../../ts";

const SectionContainer: React.FC<SectionContainerProps> = ({ className, children }) => {
    return (
        <div className={`flex flex-col bg-neutral-900 rounded-lg ${className}`}>
            {children}
        </div>
    );
}

export default SectionContainer