import { Button } from "./ui/Button";

const Banner = () => {
  return (
    <div className="fixed bottom-0 w-full bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="container flex items-center justify-between px-8 py-2.5 mx-auto">
        <div>
          <p className="font-bold text-white text-md">Preview of Spotify</p>
          <p className="font-semibold text-white">
            Sign up to get unlimited songs and podcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <Button size={"lg"}>Sign Up Free</Button>
      </div>
    </div>
  );
};

export default Banner;
