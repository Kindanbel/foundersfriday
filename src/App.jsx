import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import EighthPart from "./Ui/EighthPart";
import FifthPart from "./Ui/FifthPart";
import FouthPart from "./Ui/FouthPart";
import Hero from "./Ui/Hero";
import NinthPart from "./Ui/NinthPart";
import SecondPart from "./Ui/SecondPart";
import SeventhPart from "./Ui/SeventhPart";
import SixthPart from "./Ui/SixthPart";
import TenthPart from "./Ui/TenthPart";
import ThridPart from "./Ui/ThridPart";

function App() {
  return (
    <>
      <div className="page relative h-screen">
        <Header />

        <div className="body ">
          <Hero />
          <SecondPart />
          <ThridPart />
          <FouthPart />
          <FifthPart />
          <SixthPart />
          <SeventhPart />
          <EighthPart />
          <NinthPart />
          <TenthPart />
        </div>

        <div className="footer mt-[100px] border-t-2 border-solid border-[#cba4ee]">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
