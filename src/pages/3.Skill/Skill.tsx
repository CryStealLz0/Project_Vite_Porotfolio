import MainWrapper from '../../App';
import '../../style/3.Skill/skill.scss';
import { IContentSkills, IContentSkillsProps } from '../../data';

function Skill({ contentSkillsData }: IContentSkillsProps) {
  console.log({ contentSkillsData });
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
                {contentSkillsData && contentSkillsData?.length > 0 ? (
                  contentSkillsData?.map(
                    (ContentSkills: IContentSkills, index: number) => (
                      <>
                        {ContentSkills && (
                          <div
                            className={ContentSkills?.clasPosition || ''}
                            key={ContentSkills?.key || index}
                          >
                            <div
                              className={`card-bg`}
                              style={{
                                backgroundColor: ContentSkills?.clasColor,
                              }}
                            ></div>
                            <div className="card-head">
                              <div className="styleIcon">
                                <img
                                  src={ContentSkills?.svgIcon || '#'}
                                  alt=""
                                  className={
                                    ContentSkills.styleIcon || 'pt-2 pb-2'
                                  }
                                />
                              </div>
                              <div className="card-text">
                                <h1>
                                  {ContentSkills?.headIcon || 'no-header'}
                                </h1>
                              </div>
                            </div>
                            <div className="card-des">
                              <h1>
                                {ContentSkills?.desSkills || 'no-description'}
                              </h1>
                              {ContentSkills?.linkSkills?.linkPlaylist && (
                                <div className="links">
                                  <p>
                                    {ContentSkills?.linkSkills?.linkPlaylist
                                      ?.headList || 'no-header'}
                                  </p>
                                  <ul>
                                    {ContentSkills?.linkSkills?.linkPlaylist
                                      ?.links.length > 0 &&
                                      ContentSkills?.linkSkills?.linkPlaylist?.links.map(
                                        (link, indexI) => (
                                          <li key={link?.id || indexI}>
                                            <a href={link?.listLink || '#'}>
                                              {link?.list || 'no-list'}
                                            </a>
                                          </li>
                                        ),
                                      )}
                                  </ul>
                                </div>
                              )}
                              {ContentSkills?.linkSkills?.linkBootcamp && (
                                <div className="links">
                                  <p>
                                    {ContentSkills?.linkSkills?.linkBootcamp
                                      ?.headList || 'no-header'}
                                  </p>
                                  <ul>
                                    {ContentSkills?.linkSkills?.linkBootcamp
                                      ?.links.length > 0 &&
                                      ContentSkills?.linkSkills?.linkBootcamp?.links.map(
                                        (link, indexI) => (
                                          <li key={link?.id || indexI}>
                                            <a href={link?.listLink || '#'}>
                                              {link?.list || 'no-list'}
                                            </a>
                                          </li>
                                        ),
                                      )}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    ),
                  )
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
