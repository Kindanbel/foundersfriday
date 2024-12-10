import Button from "../components/Button";
import Title from "../components/Title";

const SecondPart = () => {
  return (
    <section className="second-section md:mt-[400px] xl:mt-[290px] flex gap-3 relative px-[5%] flex-col xl:flex-row items-center justify-center">
      <div className="second-image w-[680px] max-w-[100%] max-h-[560px]">
        <img
          src="images/IMG_2857 1.jpg"
          alt="image"
          className="w-[100%] h-[100%]"
        />
      </div>
      <img src="images/Line 1.svg" alt="" className="h-[560px] hidden xl:block" />
      <div className="section-content flex-1 mt-[50px] xl:mt-0">
     
        <div className="title relative xl:absolute top-[-25px] text-center xl:text-start">
          <Title title="Who are we?" />
        </div>
        <div className="paragraph xl:pt-[150px] flex flex-col gap-[60px]">
          <p className="text text-[20px] text-center xl:text-start">
            Born from the vibrant startup ecosystem of Abuja, we recognized the
            need for a consistent, high-quality networking platform where
            founders, innovators, and tech enthusiasts could connect, share
            ideas, and foster collaboration.
          </p>
          <div className="btn flex flex-col md:flex-row items-center gap-5 justify-center xl:justify-start">
            <Button
              bgcolor="#9524FF"
              color="white"
              title="Register Now"
              icon="images/ArrowRight.svg"
              iconcolor="white"
            />
            <Button
              borderWidth={2}
              borderColor="#9524FF"
              border="solid"
              color="#9524FF"
              title="Donate"
              icon="images/Money Bag.svg"
            />
          </div>
        </div>
        <div className="last_part mt-10 xl:mt-0 text-[17px] text-center xl:text-start font-[500] relative xl:absolute bottom-[-8px]">
        Founder&apos;s Friday is more than just a meetup — it&apos;s a movement.
        </div>
      </div>
    </section>
  );
};

export default SecondPart;
