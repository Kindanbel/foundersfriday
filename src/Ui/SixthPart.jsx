import { useState, useEffect } from "react";
import Button from "../components/Button";

const SixthPart = () => {
  const locations = ["Kaduna", "Abuja", "Lagos", "Kano"];
  const [activeIndex, setActiveIndex] = useState(0);

  //logic for the auto changing text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [locations.length]);


  return (
    <section
      className="sec-6 mt-[100px] bg-[url('/images/bgimage.png')] 
    xl:h-[80vh] h-fit px-[5%] bg-center bg-cover grid grid-cols-1 gap-[50px] xl:grid-cols-2 items-center 
    xl:gap-[200px] bg-blend-overlay bg-[rgba(0,0,0,0.55)]"
    >
      <div className="content xl:text-start py-10">
        <div className="header text-white text-[30px]  ">
          Founders Friday is coming to
        </div>
        <div className="relative h-[150px] overflow-hidden ">
          {locations.map((location, index) => (
            <span
              key={index}
              className={`absolute text-[80px] md:text-[100px]  font-[500] text-[#38135b] transition-all duration-700 ${
                activeIndex === index ? "animate-slide-in" : "animate-slide-out"
              }`}
            >
              {location}
            </span>
          ))}
        </div>
        <p className="pb-7 text-[white] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula
          dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id
          turpis. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>
        <div className="btn ">
        <Button
          borderWidth={2}
          borderColor="#9524FF"
          border="solid"
          color="#9524FF"
          title="Register"
          icon="images/arrow-right 1.svg"
          radius={12}
        />
        </div>
      </div>
      <div className="logo_img w-[300px] lg:w-[500px] ">
        <img src="images/largelogo.svg" alt="logo" className="w-[100%]" />
      </div>
    </section>
  );
};

export default SixthPart;
