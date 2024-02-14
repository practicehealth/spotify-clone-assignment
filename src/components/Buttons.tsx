const Buttons = ({ label, icon, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white text-black text-sm font-bold py-2 px-3 hover:px-4 rounded-full flex items-center justify-center gap-2${
        label === "Log in" && "py-3 px-4 hover:px-5 text-base"
      }`}
    >
      {label}
      {icon}
    </button>
  );
};

export default Buttons;
