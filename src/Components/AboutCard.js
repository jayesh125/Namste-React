const AboutCard = ({ isOpen, onToggle, title }) => {
  return (
    <div className="p-4">
      <div className="flex bg-slate-200 justify-between border-black-300 border p-3 items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        <span
          className="font-mono font-thin cursor-pointer border p-2 shadow-lg shadow-gray-400 bg-black text-white"
          onClick={onToggle}
        >
          {isOpen ? "Close" : "Open"}
        </span>
      </div>
      {isOpen && (
        <p className="p-6 bg-slate-300">
          This is a simple React application with a header, body, and footer.
        </p>
      )}
    </div>
  );
};

export default AboutCard;