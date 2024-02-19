import MainWrapper from '../../App';
import '../../style/3.Skill/skill.scss';
import { IoLogoHtml5 } from 'react-icons/io5';

function Skill() {
  return (
    <>
      <MainWrapper>
        <div className="container-section" id="skill">
          <div className="heading">
            <h1>Skill</h1>
          </div>
          <div className="content">
            <div className="skill-content">
              <div className="container-skil-heading"></div>
              <div className="container-skill-card">
                <div className="cont-card-opac">
                  <div className="card">
                    <div className="card-bg bg-[#E96228]"></div>
                    <div className="card-head">
                      <IoLogoHtml5 className="h-20 w-20 flex m-auto text-[#222]" />
                      <div className="card-text">
                        <h1>HTML</h1>
                      </div>
                    </div>
                    <div className="card-des">
                      <h1> Im learn in playlist WPU and bootcam dicoding</h1>
                      <div className="links">
                        <p>Link Playlist</p>
                        <ul>
                          <li>
                            <a href="">Basic HTML</a>
                          </li>
                          <li>
                            <a href="">HTML 5</a>
                          </li>
                        </ul>
                      </div>
                      <div className="links">
                        <p>Link Bootcamp</p>
                        <ul>
                          <li>
                            <a href="https://www.dicoding.com/academies/123/tutorials/4916">
                              Semantic HTML
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </>
  );
}

export default Skill;
