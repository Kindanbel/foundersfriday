const Offer = (prop) => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[2fr_5fr_100px] items-center xl:gap-20 justify-between border-b-2 border-solid border-gray-300 pb-7">
      <div className="title flex items-center gap-10">
        <div className="dot w-[20px] h-[20px] rounded-full bg-founderPuple"></div>
        <div>
          <div className="title-text text-[25px] font-[500]">{prop.title}</div>
          <div className="title-text text-[25px] font-[500]">{prop.sectitle}</div>
        </div>
      </div>
      <div className="text title flex items-center justify-between">
        <p className="paragraph text-[15px]">{prop.paragraph}</p>
        <img src="images/plus 1.svg" alt="" className="w-[50px] block xl:hidden" />
      </div>
      <div className="icon hidden xl:block">
          <img src="images/plus 1.svg" alt="" className="w-[50px]" />
        </div>
    </div>
  );
};

export default Offer;
