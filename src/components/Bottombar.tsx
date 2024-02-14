import Buttons from "./Buttons";

const Bottombar = () => {
  return (
    <div className="mx-2 mb-2 bg-gradient-to-r from-[#AE2896] to-[#509BF5] h-full flex justify-between items-center text-white py-2 px-4 sticky bottom-0">
      <section>
        <h3 className="font-bold text-sm">Preiew of Spotify</h3>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </section>
      <Buttons label={"Log in"}></Buttons>
    </div>
  );
};

export default Bottombar;
