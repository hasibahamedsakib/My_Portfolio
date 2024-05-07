const SectionHeader = ({ title, text }) => {
  return (
    <div className="text-[#333] mt-2">
      <h1 className="text-2xl md:text-3xl xl:text-4xl font-semibold capitalize font-mono">
        {" "}
        {title}
      </h1>
      <p className="md:text-lg lg:text-xl xl:pt-2 font-semibold font-mono">
        {text}
      </p>
    </div>
  );
};

export default SectionHeader;
