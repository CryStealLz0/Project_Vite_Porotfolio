import './style/app.scss';
import NavbarLeft from './component/Navbar/NavbarLeft.tsx';
import NavbarBottom from './component/Navbar/NavbarBottom.tsx';
// import Home from './pages/1.Home/Home.tsx';
// import About from './pages/2.About/About.tsx';
// import Skill from './pages/3.Skill/Skill.tsx';
// import Experience from './pages/4.Experience/experience.tsx';

class MainWrapperProps {
  children: React.ReactNode;
}

function MainWrapper(props: MainWrapperProps) {
  return (
    <>
      <div className="md:ml-24" id="body-all">
        {/* Navbar */}
        <NavbarLeft />
        <NavbarBottom />
        {/* Navbar End */}
        {/* Content */}
        {props.children}
        {/* Content End */}
      </div>
    </>
  );
}

export default MainWrapper;
