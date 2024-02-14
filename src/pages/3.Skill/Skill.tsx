import MainWrapper from '../../App';
import '../../style/3.Skill/skill.scss';

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
                  <div className="card"></div>
                  <div className="card card-bottom"></div>
                  <div className="card"></div>
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
