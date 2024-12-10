import Button from "../components/Button";

const FouthPart = () => {
  return (
    <section className="relative xl:mt-[150px] mt-[100px] px-[5%] ">
      <img src="images/Vector 3.svg" alt="svg" className="absolute right-[10px] top-[-150px] hidden xl:block" />

      <div className="body grid grid-cols-1 xl:grid-cols-2 gap-[200px] relative ">
        <div className="content text-center xl:text-start flex flex-col items-center xl:items-start ">
          <div className="header">
          <span className="text-[17px] text-founderPuple font-[500]">Founder&apos;s Friday</span>
          <h1 className="text-[30px] flex flex-col leading-tight pt-2">
            <span>What Happens At</span> <span>Founder&apos;s Friday</span>
          </h1>
          </div>
          <p className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
            rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
            dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
            suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
            turpis. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>
          <div className="btn pt-10 ">
          <Button
            bgcolor="#9524FF"
            color="white"
            title="Learn More"
            icon="images/ArrowRight.svg"
            radius={12}
          />
          </div>
        </div>
        <div className="imag animate-float place-items-center">
        <div className="img1 relative xl:absolute right-0 top-[-150px] xl:top-[-50px] max-w-[400px] max-h-[400px]">
          <img src="images/fourth1.jpg" alt="fourth1" className="w-[100%] h-[100%]" />
        </div>
        <div className="img2 relative xl:absolute xl:right-[250px] top-[-100px] xl:top-[180px] max-w-[400px] max-h-[400px]">
          <img src="images/fourth22.jpg" alt="fourth2" className="w-[100%] h-[100%]" />
        </div>
        </div>
      </div>
    </section>
  );
};

export default FouthPart;
