import Header from "./Header";
import Main from "./Main";
import { useRef } from "react";

const App = () => {

  const topRef = useRef(null);
  const profileRef = useRef(null);
  const workRef = useRef(null);
  const skillRef = useRef(null);
  const newsRef = useRef(null);

  return (
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
  );
}

export default App;
