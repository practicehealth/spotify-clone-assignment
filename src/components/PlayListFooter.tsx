import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

const PlayListFooter = () => {
  return (
    <>
      <div className="mt-24 flex justify-between items-start">
        <div className="flex flex-wrap gap-20">
          <div>
            <p className="font-bold text-white">Company</p>
            <p className="font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              About
            </p>
            <p className="font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              Jobs
            </p>
            <p className="font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              For the Record
            </p>
          </div>
          <div>
            <p className="font-bold text-white">Communities</p>
            <p className="font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              For Artists
            </p>
            <p className="font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              Developers
            </p>
            <p className=" font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              Advertising
            </p>
            <p className="font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              Investors
            </p>
          </div>
          <div>
            <p className="font-bold text-white">Useful Links</p>
            <p className="font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              Support
            </p>
            <p className=" font-medium text-[16px] text-[#858585] hover:text-white hover:underline cursor-pointer">
              Free Mobile App
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className=" bg-[#3b3b3b4d] rounded-full p-2 hover:bg-[#5858584d] hover:cursor-pointer">
            <img className="w-5 h-5" src={instagram} />
          </div>
          <div className=" bg-[#3b3b3b4d] rounded-full p-2 hover:bg-[#5858584d] hover:cursor-pointer">
            <img className="w-5 h-5" src={twitter} />
          </div>
          <div className=" bg-[#3b3b3b4d] rounded-full p-2 hover:bg-[#5858584d] hover:cursor-pointer">
            <img className="w-5 h-5" src={facebook} />
          </div>
        </div>
      </div>
      <div className="w-auto h-[0.1px] mt-10 bg-[#2A2A2A]"></div>
      <p className="text-[#858585] text-sm mt-10">© 2024 Spotify AB</p>
    </>
  );
};

export default PlayListFooter;
