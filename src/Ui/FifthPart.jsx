import FifthContent from "../components/FifthContent";

const FifthPart = () => {
  return (
    <section className="xl:mt-[400px] mt-[80px] px-[5%]">
      <div className="content ">
        <div className="header text-center xl:text-start">
          <span className="text-[17px]  text-founderPuple font-[500]">
            Sponsor The Next Friday
          </span>
          <h1 className="text-[30px] flex flex-col leading-tight pt-2 text-center">
            <span>Why Sponsor</span> <span>Founder&apos;s Friday?</span>
          </h1>
        </div>
      </div>
      <FifthContent />
    </section>
  );
};

export default FifthPart;
