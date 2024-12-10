import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../components/Testimonials";
import Title from "../components/Title";

const NinthPart = () => {
  const CustomPrevArrow = (prop) => (
    <div
      onClick={prop.onClick}
      className="arrow"
      style={{
        display: "block",
        position: "absolute",
        right: "200px",
        top: "-100px",
        zIndex: 2,
        cursor: "pointer",
        width: "50px",
      }}
    >
      <img src="images/carousel back.svg" alt="" />
    </div>
  );

  const CustomNextArrow = (prop) => (
    <div
      onClick={prop.onClick}
      className="arrow"
      style={{
        display: "block",
        position: "absolute",
        top: "-100px",
        right: "140px",
        zIndex: 2,
        cursor: "pointer",
        width: "50px",
      }}
    >
      <img src="images/carousel next.svg" alt="" />
    </div>
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="mt-[150px] px-[5%] ">
      <div className="header text-center pb-5">
        <Title title="What Do Our Attendees Have To Say?" />
        <p className="text-[rgba(0,0,0,0.35)]">Well See For Yourself!</p>
      </div>

      <div className="mt-[50px]">
        <Slider {...settings}>
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
          <Testimonials />
        </Slider>
      </div>
    </section>
  );
};

export default NinthPart;
