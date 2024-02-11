import Button from './components/Button';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#ae2896] to-[#509bf5] px-10 py-4 flex justify-between">
      <div className="shrink-0">
        <p className="text-white uppercase font-medium text-sm mb-[10px]">Try Premium for free</p>
        <p className="text-gray-200 text-sm font-semibold">
          Sign up to enjoy unlimited music and podcasts with just a few ads. No credit card required.
        </p>
      </div>
      <Button className="" buttonText="Sign up for free" />
    </footer>
  );
};

export default Footer;
