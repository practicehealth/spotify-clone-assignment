import Button from "./../../Button";
import GlobeIcon from "./../../../assets/icons/globe.svg?react";


export const SidebarFooter = () => {
  const URLS = [
    "Legal",
    "Privacy Center",
    "Privacy Policy",
    "Cookies",
    "About Ads",
    "Accesibility",
    "Cookies",
  ];

  return (<>
    <div className="flex flex-wrap p-6 gap-x-8 gap-y-4">
      {URLS.map((url, index) => {
        return (
          <span className="text-xs text-white/70" key={url + index}>
            {url}
          </span>
        );
      })}
    </div>
    <Button className="text-white rounded-full bg-transparent py-1 px-4 ml-6  border-[0.5px] shadow-none border-white/80">
      <div className="flex items-center gap-1">
        <GlobeIcon fill="#FFFFFF" width={14} height={14}/>
        <span className="font-medium">English</span>
       </div>  
    </Button>
    </>
  );
};
