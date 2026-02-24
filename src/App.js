import Header from "./Header";
import Main from "./Main";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import SampleApp_1 from "./SampleApps/SampleApp_1";

const App = () => {

  const topRef = useRef(null);
  const profileRef = useRef(null);
  const workRef = useRef(null);
  const skillRef = useRef(null);
  const newsRef = useRef(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route path="/sample_app_1" element={<SampleApp_1 />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
