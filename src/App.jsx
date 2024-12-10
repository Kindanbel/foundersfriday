import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Screens/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="page relative h-screen">
        <Header />

        <div className="body ">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>

        <div className="footer mt-[100px] border-t-2 border-solid border-[#cba4ee]">
          <Footer />
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
