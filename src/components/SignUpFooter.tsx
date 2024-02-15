import React from "react";

const SignUpFooter: React.FC = () => {
  return (
    <div className="absolute bottom-0 w-[100%] px-4 py-2 my-2 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500">
      <div className="text-white">
        <p className="text-lg sm:text-sm font-medium">Preview of Spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed
        </p>
      </div>
      <div className=" font-bold">
        <button className="bg-white py-2 px-4 rounded-3xl">Sign up free</button>
      </div>
    </div>
  );
};

export default SignUpFooter;
