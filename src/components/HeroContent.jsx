import Button from "./Button"
import { LuSquareArrowOutUpRight } from "react-icons/lu";


const HeroContent = () => {
  return (
    <div className="content-text mt-[200px] ">
    <div className="hero-text flex flex-col gap-7 items-center xl:items-start">
      <div className="flex flex-col gap-2 leading-tight">
        <span className="text-[15px] text-center xl:text-start">
          Join our premier monthly meetup for startup founders and tech
          visionaries
        </span>
        <h1 className="xl:text-[40px] text-center xl:text-start text-[30px] md:text-[40px] text-founderPuple font-[500]" >Connect, Collaborate, Innovate!</h1>
      </div>

      <p className="xl:w-[80%] w-[100%] text-[20px] text-center xl:text-start">
        Every last Friday of the month, we bring together the brightest
        minds in our local tech ecosystem. Whether you&apos;re a seasoned
        entrepreneur or just starting your journey, Founder&apos;s Friday
        is your launchpad for new ideas, valuable connections, and
        game-changing opportunities.
      </p>

      <div className="">
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
        <div className="text-[13px] mt-2 text-founderPuple text-center xl:text-start">Join Us for our next meetup on the 26th of July 2024</div>
      </div>
    </div>
    <div className="hero-icons pt-[60px] flex flex-col gap-5 items-center xl:items-start">
      <span className="icons"><img src="images/Frame 18.svg" alt="" className="w-[350px]" /></span>
      <span className="text-[15px] font-[500] flex gap-3 items-center">Become a collaborator today <LuSquareArrowOutUpRight /></span>
    </div>
  </div>
  )
}

export default HeroContent