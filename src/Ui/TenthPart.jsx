import Faqs from "../components/Faqs";

const TenthPart = () => {
  return (
    <section className="mt-[150px] px-[5%]">
      <div className="header text-[30px] font-bold">FAQS</div>
      <div className="questions px-[7%] grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10">
        <Faqs
          question="What services does Belsoft Systems offer?"
          answer="Belsoft Systems offfer web developemnt, 
          mobile app development deskktop software development, maintenance and technical support."
        />
        <Faqs
          question="How do I get started with Belsoft Systems?"
          answer="Simply reach out to use through our contact form or email, and we'll promply discuss
          your project requirements and provide a personalized solution."
        />
        <Faqs
          question="How experienced is the team at Belsoft Sytems?"
          answer="Our team comprises seasoned professionals with a track record of delivering high-quaity
          projects."
        />
        <Faqs
          question="What Industries does Belsoft Systems serve?"
          answer="We carter to diverse industries including healthcare, finance, education, e-commerce
          and entertainment."
        />
        <Faqs
          question="What technologies does Belsoft Systems use?"
          answer="We spercialize in JavaScript, Python, Java, PHP, Swift, React Native and more."
        />
        <Faqs
          question="How does Belsoft Systems ensure project security?"
          answer="We follow industry best practices for secure coding and implement robust security 
          measures."
        />
      </div>
    </section>
  );
};

export default TenthPart;
