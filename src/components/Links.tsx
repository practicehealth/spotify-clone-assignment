import { FiGlobe } from 'react-icons/fi';

const Links = () => {
  return (
    <footer className="text-neutral-500 p-5 space-y-6">
      <div className="flex items-start justify-between">
        <a className="text-xs cursor-pointer min-w-fit hover:underline">Legal</a>
        <a className="text-xs cursor-pointer min-w-fit hover:underline">Privacy Center</a>
        <a className="text-xs cursor-pointer min-w-fit hover:underline">Privacy Policy</a>
      </div>
      <div className="flex items-start justify-between">
        <a className="text-xs cursor-pointer min-w-fit hover:underline">Cookies</a>
        <a className="text-xs cursor-pointer min-w-fit hover:underline">About Ads</a>
        <a className="text-xs cursor-pointer min-w-fit hover:underline">Accessibility</a>
      </div>
      <div className="flex items-start justify-between">
        <a className="text-xs cursor-pointer min-w-fit hover:underline">Cookies</a>
      </div>
      <div className="-mx-2">
        {/* Coudn't use the resuable button as it didn't recieved button as prop, might refactor later :) */}
        <button className="flex justify-center items-center gap-2 bg-transparent text-white rounded-full text-xs font-bold no-underline normal-case px-5 py-2 mt-3 border w-fit transition-all duration-300 ease-in-out hover:ease-in hover:scale-105">
          <FiGlobe className="text-2xl" />
          <span>English</span>
        </button>
      </div>
    </footer>
  );
};

export default Links;
