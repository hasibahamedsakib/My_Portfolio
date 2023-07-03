const SectionHeader = ({ title, text }) => {
  return (
    <div className="text-[#333] ">
      <h1 className="text-4xl font-bold capitalize"> {title}</h1>
      <p className="text-xl pt-2 font-bold">{text}</p>
    </div>
  );
};

export default SectionHeader;
