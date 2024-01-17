import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import '../../style/About/aboutDes.scss';

// Data
import { IContentAbout, IContentAboutProps } from '../../data';

function AboutDes({ contentAboutData }: IContentAboutProps) {
  return (
    <>
      <div className="container-about">
        <div className="description-about">
          <div className="container-des-about">
            {contentAboutData.length > 0 ? (
              contentAboutData.map((ContentAbout: IContentAbout) => (
                <div className="des-a" id={ContentAbout.id}>
                  <div className="heading-des">
                    <h1>{ContentAbout.heading1}</h1>
                    <h1>{ContentAbout.heading2}</h1>
                  </div>
                  <div className="des">
                    <p>{ContentAbout.description}</p>
                  </div>
                  <div className="button-des">
                    <button>
                      <a href={ContentAbout.idNext}>{ContentAbout.buttons}</a>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <span>Data Belum terpanggil</span>
            )}
          </div>
        </div>
        <div>
          <ul className="sosmed-icon-a">
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
    </>
  );
}

export default AboutDes;
