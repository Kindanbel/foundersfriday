import Notes from "./Notes";
import Button from "./Button";

const FifthContent = () => {
  return (
    <div className="mt-[80px] grid grid-cols-1 xl:grid-cols-2 gap-10 px-[5%] xl:px-[7%] place-items-center">
      <div className="notes animate-float w-[100%] md:w-[500px] max-h-[fit] p-10 
      rounded-lg shadow-xl border-2 border-solid border-[#cca8ef] 
      grid grid-cols-1 justify-center place-items-center md:grid-cols-2 gap-2">
        <Notes
          color="#9543e8"
          header="Networking Opportunitues"
          paragraph="Connect with industry leaders, founders, and potential partners"
        />
        <Notes
          color="#cca8ef"
          header="Networking Opportunitues"
          paragraph="Connect with industry leaders, founders, and potential partners"
        />
        <Notes
          color="#cca8ef"
          header="Networking Opportunitues"
          paragraph="Connect with industry leaders, founders, and potential partners"
        />
        <Notes
          color="#9543e8"
          header="Networking Opportunitues"
          paragraph="Connect with industry leaders, founders, and potential partners"
        />
      </div>

      <div className="inputs">
        <div className="header_text flex flex-col gap-2">
          <h1 className="header text-[20px] font-[500]">How To Sponsor</h1>
          <span className="text-[#2C2830] text-[18px]">
            Ready to Make an Impact?
          </span>
          <span className="text-[#2C2830] text-[18px]">
            Fill out the form below or contact us at +234
            9086546343/abel@gmail.com to learn more about how you can sponsor
            the next Founders Friday
          </span>
        </div>
        <form className="main grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="name flex flex-col gap-1">
            <label htmlFor="Name" className="text-[18px] font-[500]">
              Name
            </label>
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Full Name"
              className="outline-none border-2 border-solid border-[#9543e8] py-2 px-5 rounded-lg "
            />
          </div>
          <div className="company flex flex-col gap-1">
            <label htmlFor="company " className="text-[18px] font-[500]">
              Company <span className=" font-[300]">[optional]</span>
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company Name"
              className="outline-none border-2 border-solid border-[#9543e8] py-2 px-5 rounded-lg "
            />
          </div>
          <div className="email flex flex-col gap-1">
            <label htmlFor="email" className="text-[18px] font-[500]">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="outline-none border-2 border-solid border-[#9543e8] py-2 px-5 rounded-lg "
            />
          </div>
          <div className="phone flex flex-col gap-1">
            <label htmlFor="phone" className="text-[18px] font-[500]">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              className="outline-none border-2 border-solid border-[#9543e8] py-2 px-5 rounded-lg "
            />
          </div>
          <div className="btn">
            <Button
              bgcolor="#9524FF"
              color="white"
              title="Sponsor"
              icon="images/ArrowRight.svg"
              radius={12}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FifthContent;
