const Buttons = ({ label, icon, onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black text-sm font-bold py-2 px-3 rounded-full flex items-center justify-center gap-2"
    >
      {label}
      {icon}
    </button>
  );
};

export default Buttons;
