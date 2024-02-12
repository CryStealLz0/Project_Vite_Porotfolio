import MainWrapper from '../../App';
import '../../style/1.Home/home.scss';
import '../../style/1.Home/homeQuery.scss';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';

function Home() {
  return (
    <>
      <MainWrapper>
        <div className="container-section" id="home">
          <div className="heading">
            <h1>Home</h1>
          </div>
          <div className="content">
            <div className="side-home-content">
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
                  <li className="side-bar-profil-home">HOME</li>
                  <li>
                    <a href="#about">ABOUT</a>
                  </li>
                  <li>SKILLS</li>
                  <li>EXPERIENCE</li>
                  <li>CONTACT</li>
                </ul>
              </div>
              <div className="copy-right">
                <p>
                  Create by Dimas Indra Jaya | Crafted with Passion & Precision
                  | All Rights Reserved &copy; 2024.
                </p>
              </div>
            </div>
            <div className="home-content">
              <div className="description-profil">
                <div className="heading-des">
                  <h1>I am</h1>
                  <h1>a Web Developer</h1>
                </div>
                <div className="des">
                  <p>
                    Crafting the digital realm with innovation and expertise,
                    seamlessly blending design and functionality into an
                    inspiring masterpiece.
                  </p>
                </div>
                <div className="button-des">
                  <button>
                    <a href="#about">Explore More About Me</a>
                  </button>
                </div>
                <div>
                  <ul className="sosmed-icon">
                    <li>
                      <a href="#">
                        <AiFillGithub className="h-8 w-8 icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiFillLinkedin className="h-8 w-8 icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiFillInstagram className="h-8 w-8 icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flower-top-profil">
                <img src="./src/assets/img/flowerProfilC.png" alt="" />
              </div>
              <div className="profil-img">
                <img src="./src/assets/img/indra.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
}

export default Home;
