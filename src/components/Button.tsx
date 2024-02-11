import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  buttonText: string;
  className?: string;
}
const Button: FC<ButtonProps> = ({ buttonText, className }) => {
  return (
    <button
      className={twMerge(
        `flex justify-center bg-white text-black rounded-full text-xs font-bold no-underline normal-case px-5 py-2 mt-3 border w-fit transition-all duration-300 ease-in-out hover:ease-in hover:scale-105`,
        className,
      )}
    >
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
