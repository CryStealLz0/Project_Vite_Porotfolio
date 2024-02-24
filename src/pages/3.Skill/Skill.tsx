import MainWrapper from '../../App';
import '../../style/3.Skill/skill.scss';
import { IoLogoHtml5 } from 'react-icons/io5';
import { IContentSkills, IContentSkillsProps } from '../../data';

function Skill({ contentSkillsData }: IContentSkillsProps) {
  return (
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
                {contentSkillsData.length > 0 ? (
                  contentSkillsData.map((ContentSkills: IContentSkills) => (
                    <div
                      className={ContentSkills.clasPosition}
                      key={ContentSkills.key}
                    >
                      <div className="card-bg bg-[#E96228]"></div>
                      <div className="card-head">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: ContentSkills.componentIcon,
                          }}
                        />
                        <div className="card-text">
                          <h1>{ContentSkills.headIcon}</h1>
                        </div>
                      </div>
                      <div className="card-des">
                        <h1>{ContentSkills.desSkills}</h1>
                        {ContentSkills.linkSkills.linkPlaylist && (
                          <div className="links">
                            <p>
                              {ContentSkills.linkSkills.linkPlaylist.headList}
                            </p>
                            <ul>
                              {ContentSkills.linkSkills.linkPlaylist.links.map(
                                (link) => (
                                  <li key={link.id}>
                                    <a href={link.listLink}>{link.list}</a>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                        {ContentSkills.linkSkills.linkBootcamp && (
                          <div className="links">
                            <p>
                              {ContentSkills.linkSkills.linkBootcamp.headList}
                            </p>
                            <ul>
                              {ContentSkills.linkSkills.linkBootcamp.links.map(
                                (link) => (
                                  <li key={link.id}>
                                    <a href={link.listLink}>{link.list}</a>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <span>Data Tidak Muncul</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Skill;
