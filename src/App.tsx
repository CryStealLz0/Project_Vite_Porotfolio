import './style/app.scss';
import NavbarLeft from './component/Navbar/NavbarLeft.tsx';
import NavbarBottom from './component/Navbar/NavbarBottom.tsx';
import HomeWelcome from './component/Home/HomeWelcome.tsx';

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
        {/* Content End */}
      </div>
    </>
  );
}

export default App;
