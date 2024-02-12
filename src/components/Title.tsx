import React from 'react';
import { NavLink } from 'react-router-dom';

interface TitleProps {
  title: string;
  more?: boolean;
}

const Title: React.FC<TitleProps> = ({ title, more = false }) => {
  return (
    <header className="flex items-center justify-between mb-4 px-4 mt-2">
      <div>
        <h3 className="text-xl text-white font-semibold tracking-tight hover:underline cursor-pointer">
          {title}
        </h3>
      </div>
      {more && (
        <div>
          <NavLink
            to="/more"
            className="text-sm text-gray-400 hover:text-white transition duration-300"
          >
            More
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Title;
