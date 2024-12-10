import Offer from "../components/Offer";
import Title from "../components/Title";

const ThridPart = () => {
  return (
    <section className="mt-[100px] md:mt-[150px] px-[5%]">
      <div className="title text-center">
        <Title title="What We Offer" />
      </div>

      <div className="hints mt-[70px] flex flex-col gap-20">
        <Offer
          title="Monthly Meetups"
          paragraph="Our cornerstone event, held on the last Friday of every month,
          featuring keynote speakers, panel discussions, and ample networking
          opportunities."
        />
        <Offer
          title="Diverse Network"
          paragraph="Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts."
        />
        <Offer
          title="Knowledge Sharing"
          paragraph="Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts."
        />
        <Offer
          title="Colaboration"
          sectitle="Opportunities"
          paragraph="Find potential co-founders, mentors, or partners for your next big venture."
        />
        <Offer
          title="Community Support"
          paragraph="Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges."
        />
      </div>
    </section>
  );
};

export default ThridPart;
