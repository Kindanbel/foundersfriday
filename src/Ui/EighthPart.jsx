import Button from "../components/Button";

const EighthPart = () => {
  return (
    <section className="mt-[180px] px-[5%] flex gap-20 flex-col lg:flex-row items-center ">
      <div className="image max-w-[680px] max-h-[560px] order-2 lg:order-1">
        <img
          src="images/Frame 26.jpg"
          alt="image"
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="content flex flex-col gap-10 items-center lg:items-start order-1 lg:order-2">
        <div className="header text-[20px] font-[500] text-center lg:text-start">
          At Founder&apos;s Friday, Every Friday is a Learning Experience
        </div>
        <div className="sub font-[500] text-center lg:text-start">
          Join us in our mission to transform ideas into impact and shape the
          future of Nigeria’s startup landscape.
        </div>
        <div className="btn">
          <Button
            bgcolor="#9524FF"
            color="white"
            title="Register"
            icon="images/ArrowRight.svg"
            iconcolor="white"
          />
        </div>
      </div>
    </section>
  );
};

export default EighthPart;
