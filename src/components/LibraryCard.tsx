import { FC } from 'react';
import Button from './Button';

interface CardProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const LibraryCard: FC<CardProps> = ({ title, subtitle, buttonText }) => {
  return (
    <section className="flex items-start bg-[#242424] justify-between gap-5 font-semibold text-xs mx-0 my-4 px-5 py-4 rounded-xl">
      <div className="flex flex-col">
        <span className="pb-4 text-white text-base font-bold">{title}</span>
        <span className="pb-4 text-gray-300 text-sm font-medium">{subtitle}</span>
        <Button buttonText={buttonText} />
      </div>
    </section>
  );
};

export default LibraryCard;
