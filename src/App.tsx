import './style/app.scss';
import NavbarLeft from './component/Navbar/NavbarLeft.tsx';
import NavbarBottom from './component/Navbar/NavbarBottom.tsx';

function App() {
  return (
    <>
      <div className="ml-24 mt-5">
        <NavbarLeft />
        <NavbarBottom />
      </div>
    </>
  );
}

export default App;
