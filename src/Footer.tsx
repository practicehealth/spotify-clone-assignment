import Button from './components/Button';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#ae2896] to-[#509bf5] px-4 sm:px-10 py-2 sm:py-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="shrink-0 text-center sm:text-left">
        <p className="text-white uppercase font-medium text-xs sm:text-sm mb-2 sm:mb-[10px]">Try Premium for free</p>
        <p className="text-gray-200 text-xs sm:text-sm font-semibold">
          Sign up to enjoy unlimited music and podcasts with just a few ads. No credit card required.
        </p>
      </div>
      <Button className="mt-4 sm:mt-0" buttonText="Sign up for free" />
    </footer>
  );
};

export default Footer;
