
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './components/spinner';

const App = () => {

  const ABOUT = lazy(() => import("./components/About"));
  const CONTACT = lazy(() => import("./components/Contact"));
  const EXPERIENCE = lazy(() => import("./components/Experience"));
  const HERO = lazy(() => import("./components/Hero"));
  const NAVBAR = lazy(() => import("./components/Navbar"));
  const TECH = lazy(() => import("./components/Tech"));
  const PROJECT = lazy(() => import("./components/Projects"));
  return (
    <BrowserRouter>
    <Suspense fallback={<Spinner/>}>
    <div className="relative z-0">
      <div>
        <NAVBAR />
        <HERO />
      </div>

      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <ABOUT />
      </div>

      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <TECH />
      </div>

      <PROJECT />

      <div
        className="bg-experience bg-cover bg-center bg-no-repeat 
          rounded-tl-[150px] rounded-br-[150px]">
        <div
          className="bg-experienceLight bg-cover bg-center 
          bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
          <EXPERIENCE />
        </div>
      </div>
      <div className="relative z-0">
        <CONTACT />
      </div>
    </div>
  </Suspense>
   
  </BrowserRouter>
  )
}

export default App
