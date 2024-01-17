import '../../style/About/aboutProfil.scss';
import '../../style/About/aboutProfilQuery.scss';
import AboutDes from '../About/AboutDes.tsx';

function AboutProfil() {
  return (
    <>
      <div className="container-section" id="about">
        <div className="heading">
          <h1>About</h1>
        </div>
        <div className="content-about">
          <div className="about-content">
            <div className="about-profil-img">
              <img src="./src/assets/img/indra.png" alt="" />
            </div>
            <AboutDes />
          </div>
          <div className="side-about-content">
            <div className="semi-circle"></div>
            <div className="circle-profil">
              <div className="cp"></div>
            </div>
            <div className="side-name-profil">
              <h1>Dimas Indra Jaya</h1>
              <p>
                <span>Web Developer</span> in Indonesia
              </p>
            </div>
            <div className="side-bar-profil">
              <ul>
                <li className="side-bar-profil-home">
                  <a href="#about-about">ABOUT</a>
                </li>
                <li>
                  <a href="#about-school">SCHOOL</a>
                </li>
                <li>
                  <a href="#about-activity">ACTIVITY</a>
                </li>
                <li>
                  <a href="#about-hobby">HOBBY</a>
                </li>
                <li>
                  <a href="#about-personal">PERSONAL DATA</a>
                </li>
              </ul>
            </div>
            <div className="copy-right">
              <p>
                Create by Dimas Indra Jaya | Crafted with Passion & Precision |
                All Rights Reserved &copy; 2024.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutProfil;
