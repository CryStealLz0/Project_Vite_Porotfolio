import './style/app.scss';
import NavbarLeft from './component/Navbar/NavbarLeft.tsx';
import NavbarBottom from './component/Navbar/NavbarBottom.tsx';
import ProfilWelcome from './component/Profil/ProfilWelcome.tsx';

function App() {
  return (
    <>
      <div className="md:ml-24" id="body-all">
        {/* Navbar */}
        <NavbarLeft />
        <NavbarBottom />
        {/* Navbar End */}

        {/* Content */}
        <ProfilWelcome />
        {/* Content End */}
      </div>
    </>
  );
}

export default App;
