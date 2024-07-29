import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LocomotiveScroll from "locomotive-scroll";
import Header from "./components/common/Header";
import { useEffect, useRef } from "react";
function App() {
  const locomotiveRef = useRef(null);

  useEffect(() => {
    locomotiveRef.current = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      if (locomotiveRef.current) {
        locomotiveRef.current.destroy();
      }
    };
  }, []);

  const stopScrolling = () => {
    if (locomotiveRef.current) {
      locomotiveRef.current.stop();
    }
  };
  const startScrolling = () => {
    if (locomotiveRef.current) {
      locomotiveRef.current.start();
    }
  };
  return (
    <div>
      <Header
        locomotiveRef={locomotiveRef}
        startScrolling={startScrolling}
        stopScrolling={stopScrolling}
      />

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
