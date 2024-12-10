const Notes = (prop) => {
  return (
    <div
      className="w-[200px] h-[200px] rounded-[100%] p-5 text-center flex flex-col items-center justify-center "
      style={{ backgroundColor: prop.color }}
    >
      <div className="header text-[17px] font-[500] pt-3">{prop.header}</div>
      <div className="text pt-3 text-[13px]">{prop.paragraph}</div>
    </div>
  );
};

export default Notes;
