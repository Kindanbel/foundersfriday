import HeroContent from "../components/HeroContent";

const Hero = () => {
  return (
    <section className="hero px-[5%] h-[80vh]">
      <img
        src="images/Vector 1.svg"
        alt="svg"
        className="absolute hidden xl:block md:right-[-150px] xl:right-[200px] top-[90px] -z-10 w-[800px]"
      />

      <div className="content h-[80vh] grid xl:grid-cols-2 grid-cols-1 ">
        <HeroContent />

        <div className="hero-images mt-[20px] xl:mt-[200px] relative md:place-items-center">
          <div className="image1 relative xl:absolute xl:right-[350px] max-w-[250px] md:max-w-[350px] lg:max-w-[450px]  xl:max-w-[350px]">
            <img src="images/Frame 16.svg" alt="" className="w-[100%]" />
          </div>
          <div className="image1 relative xl:absolute max-w-[250px] md:max-w-[350px] lg:max-w-[450px]  xl:max-w-[350px] right-[-50px] xl:right-[100px] lg:top-[-150px] top-[-100px] xl:top-[100px] z-50">
            <img src="images/Frame 17.svg" alt="" className="w-[100%]" />
          </div>
          <div className="image1 absolute top-[200px] xl:top-[400px] xl:right-[450px] w-[150px] z-50">
            <img src="images/Frame 20.svg" alt="" className="w-[200px]" />
          </div>
          <div className="image1 absolute top-[350px] xl:top-[550px] xl:right-[300px] z-50">
            <img src="images/Frame 22.svg" alt="" className="w-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
