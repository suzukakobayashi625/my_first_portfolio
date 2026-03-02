import Header from "./Header";
import Main from "./Main";
import { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SampleApp_1 from "./SampleApps/SampleApp_1";
import MobileSampleApp_1 from "./SampleApps/MobileSampleApp_1";
import { ToastContainer, toast, Slide } from "react-toastify";
import MobileHeader from "./Mobile/MobileHeader";
import MobileMain from "./Mobile/MobileMain";

const App = () => {

  const [responsiveType, setResponsiveType] = useState(
    window.matchMedia("(max-width: 450px)").matches ?
      'mobile' : window.matchMedia("(max-width: 780px)").matches ?
        'tablet' : 'pc'
  );

  const topRef = useRef(null);
  const profileRef = useRef(null);
  const workRef = useRef(null);
  const skillRef = useRef(null);
  const newsRef = useRef(null);

  const handleResize = () => {
    setResponsiveType(window.matchMedia("(max-width: 450px)").matches ?
      'mobile' : window.matchMedia("(max-width: 780px)").matches ?
        'tablet' : 'pc'
    );
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            responsiveType == 'pc' ?
              <>
                <Header
                  topRef={topRef}
                  profileRef={profileRef}
                  workRef={workRef}
                  skillRef={skillRef}
                  newsRef={newsRef}
                />
                <Main
                  topRef={topRef}
                  profileRef={profileRef}
                  workRef={workRef}
                  skillRef={skillRef}
                  newsRef={newsRef}
                />
              </>
              :
              <>
                <MobileHeader
                  topRef={topRef}
                  profileRef={profileRef}
                  workRef={workRef}
                  skillRef={skillRef}
                  newsRef={newsRef}
                />
                <MobileMain
                  topRef={topRef}
                  profileRef={profileRef}
                  workRef={workRef}
                  skillRef={skillRef}
                  newsRef={newsRef}
                />
              </>
          }
        />
        <Route
          path="/sample_app_1"
          element={
            responsiveType == 'pc' ?
              <SampleApp_1 />
              :
              <MobileSampleApp_1 />
          }
        />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
      <ToastContainer
        transition={Slide}
        position={responsiveType == "pc" ? "bottom-right" : "top-right"}
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
