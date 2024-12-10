import Button from "./Button";
import navLinks from "../../datas/navLink";

const Footer = () => {
  return (
    <footer className="footer px-[2%] py-5 flex flex-col gap-[100px] ">
      <div className="logo flex gap-3 items-center">
        <span className="logo_image">
          <img src="/images/logo.svg" alt="logo" className="w-[60px]" />
        </span>
        <span className="logo_text text-[20px] font-[500] flex flex-col leading-tight text-[#1f0b31]">
          Founder&apos;s <span>Friday</span>
        </span>
      </div>
      <div className="body flex items-start md:items-center justify-center flex-col gap-7">
        <div className="text">
          <h1 className="text-2xl  md:text-5xl font-[500] text-start md:text-center capitalize">
            Want to be a part of Abuja biggest Tech <br></br> Community?{" "}
          </h1>
        </div>
        <div className="btn">
          <Button
            borderWidth={2}
            borderColor="#9524FF"
            border="solid"
            color="#9524FF"
            title="Register For Our Next Event"
            icon="images/Right arrow.svg"
            iconsize={30}
            size={20}
          />
        </div>
      </div>
      <div className="last border-t-2 border-solid border-[#cba4ee] flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="socials flex gap-2 items-center mt-7">
          <img src="images/Fblogo.svg" alt="icon" />
          <img src="images/instalogo.svg" alt="icon" />
          <img src="images/xlogo.svg" alt="icon" />
        </div>
        <div className="links mt-7">
          <ul className="links flex flex-col md:flex-row gap-7">
            {navLinks.map((link, index) => {
              return (
                <a key={index} href={link.href} className="text-[20px] ">
                  <li className="link">{link.link}</li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
