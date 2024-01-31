import './style/app.scss';
import NavbarLeft from './component/Navbar/NavbarLeft.tsx';
import NavbarBottom from './component/Navbar/NavbarBottom.tsx';
import HomeWelcome from './component/Home/HomeWelcome.tsx';
import AboutProfil from './component/About/AboutProfil.tsx';
import Sertificate from './component/Sertificate/Sertificate.tsx';

function App() {
  return (
    <>
      <div className="md:ml-24" id="body-all">
        {/* Navbar */}
        <NavbarLeft />
        <NavbarBottom />
        {/* Navbar End */}

        {/* Content */}
        <HomeWelcome />
        <AboutProfil />
        {/* <div className="hidden"> */}
        <Sertificate />
        {/* </div> */}
        {/* Content End */}
      </div>
    </>
  );
}

export default App;
