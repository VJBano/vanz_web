import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/spinner";
import Navbar from "./components/Navbar"; // Load immediately - critical
import Hero from "./components/Hero"; // Load immediately - critical

// Lazy load components with prefetch hints
const ABOUT = lazy(() => 
  import("./components/About").then(module => {
    // Prefetch next likely component
    import("./components/Tech");
    return module;
  })
);

const TECH = lazy(() => 
  import("./components/Tech").then(module => {
    import("./components/Certificate");
    return module;
  })
);

const CERTIFICATE = lazy(() => 
  import("./components/Certificate").then(module => {
    import("./components/Projects");
    return module;
  })
);

const PROJECT = lazy(() => 
  import("./components/Projects").then(module => {
    import("./components/Reviews");
    return module;
  })
);

const REVIEWS = lazy(() => 
  import("./components/Reviews").then(module => {
    import("./components/Experience");
    return module;
  })
);

const EXPERIENCE = lazy(() => 
  import("./components/Experience").then(module => {
    import("./components/Contact");
    return module;
  })
);

const CONTACT = lazy(() => 
  import("./components/Contact").then(module => {
    import("./components/Footer");
    return module;
  })
);

const FOOTER = lazy(() => import("./components/Footer"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <div className="relative z-0 overflow-hidden">
          <div>
            <Navbar />
            <Hero />
          </div>

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <ABOUT />
          </div>

          <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
            <TECH />
          </div>

          <div className="flex pt-10 justify-center bg-about  bg-cover bg-center bg-no-repeat pb-10">
            <CERTIFICATE />
          </div>

          <PROJECT />

          <div className="bg-about bg-cover bg-center bg-no-repeat">
            <REVIEWS />
          </div>

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]"
          >
            <div
              className="bg-experienceLight bg-cover bg-center 
          bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
            >
              <EXPERIENCE />
            </div>
          </div>
          <div className="relative z-0 justify-center w-full">
            <CONTACT />
          </div>
          <div className="flex justify-center items-center w-full">
            <FOOTER />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
