import Image from "../components/Image";
import Title from "../components/Title";
import Button from "../components/Button";

const SeventhPart = () => {
  return (
    <section className="mt-[150px] ">
      <div className="header pb-10 text-center">
        <Title title="Register And Be Part of Our Community" />
        <p className="text-[]">
          Join our community of over 1000+ founders, developers, and tech
          junkies in general. <br></br>Be inspired by people who live to
          inspire!
        </p>
      </div>
      <img src="images/Vector 2.svg" alt="" className="" />
      <div className="images relative">
        <div className="img absolute top-[-70px] left-[20px] md:top-[-150px] md:left-[50px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
          <Image width="100%" height="100%" bColor="red" />
        </div>
        <div className="img absolute top-[-60px] md:top-[-120px] lg:top-[-200px] left-[200px] xl:top-[-320px] xl:left-[300px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
          <Image width="100%" height="100%" bColor="blue" />
        </div>
        <div className="img absolute top-[-80px] md:top-[-160px] lg:top-[-140px] xl:top-[-180px] md:left-[560px] lg:left-[650px] left-[300px] xl:left-[600px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
          <Image width="100%" height="100%" bColor="#9524FF" />
        </div>
        <div className="img absolute top-[-70px] md:top-[-120px] xl:top-[-180px] left-[100px] md:left-[400px] xl:left-[800px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
          <Image width="100%" height="100%" bColor="#9524FF" />
        </div>
        <div className="img absolute top-[-180px] right-[500px] w-[50px] h-[50px] md:w-[100px] md:h-[100px] hidden xl:block">
          <Image width="100%" height="100%" bColor="red" />
        </div>
        <div className="img absolute top-[-320px] right-[300px] w-[50px] h-[50px] md:w-[100px] md:h-[100px] hidden xl:block ">
          <Image width="100%" height="100%" bColor="#9524FF"/>
        </div>
        <div className="img absolute top-[-160px] right-[50px] w-[50px] h-[50px] md:w-[100px] md:h-[100px] hidden lg:block">
          <Image width="100%" height="100%" bColor="blue" />
        </div>
      </div>
      <div className="btn flex items-center justify-center">
      <Button
          borderWidth={2}
          borderColor="#9524FF"
          border="solid"
          color="#9524FF"
          title="Register Now"
          icon="images/arrow-right 1.svg"
        />
        </div>
    </section>
  );
};

export default SeventhPart;
