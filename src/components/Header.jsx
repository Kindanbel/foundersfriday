import Button from "./Button";
import navLinks from "../../datas/navLink";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header h-[100px] bg-white drop-shadow-md px-[5%] lg:px-[3%] xl:px-[5%] py-[10px] fixed right-0 left-0 top-0 z-[100] flex items-center justify-between">
      <div className="logo flex gap-3 items-center">
        <span className="logo_image">
          <img src="/images/logo.svg" alt="logo" className="w-[60px]" />
        </span>
        <span className="logo_text text-[20px] font-[500]">
          Founder&apos;s Friday{" "}
        </span>
      </div>
      <nav
        className={`links transform ${
          isActive ? "translate-x-0" : "translate-x-[400px] lg:translate-x-0"
        } transition-all duration-500 flex flex-col lg:flex-row top-[100px] lg:top-0 h-[100vh] lg:h-0 px-20 pt-20 lg:pt-0 
      right-0 bg-[rgba(0,0,0)] lg:bg-white items-center gap-10 xl:gap-20 absolute lg:relative`}
      >
        <ul className="links flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-5 ">
          {navLinks.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.href}
                className={({ isActive }) =>
                  `text-[17px] ${
                    isActive ? "text-founderPuple" : "text-white lg:text-black"
                  } `
                }
              >
                <li className="link">{link.link}</li>
              </NavLink>
            );
          })}
        </ul>
        <div className="btn">
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
      </nav>

      <div className="menu block lg:hidden">
        {isActive ? (
          <MdClose className="text-[40px]" onClick={() => setIsActive(false)} />
        ) : (
          <RiMenu3Fill className="text-[40px]" onClick={handlePress} />
        )}
      </div>
    </header>
  );
};

export default Header;
