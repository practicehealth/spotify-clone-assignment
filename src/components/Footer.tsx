const Footer = () => {
  return (
    <div className="bg-gray-200 py-4 px-6 flex items-center w-full h-16 bg-gradient-to-r from-purple-800 to-blue-500 justify-between">
      <div className="text-white">
        <div className=" flex text-md font-bold">Preview of Spotify</div>
        <div className="text-md">
          Signup to get access to unlimited songs and podcasts with occasional
          ads. No credit card needed.
        </div>
      </div>
      <button className="text-nowrap text-lg text-black font-semibold bg-white rounded-full py-2 px-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:font-bold">
        Signup for free
      </button>
    </div>
  );
};

export default Footer;
