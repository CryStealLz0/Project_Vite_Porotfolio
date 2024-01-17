import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import '../../style/About/aboutDes.scss';

function AboutDes() {
  return (
    <>
      <div className="container-about">
        <div className="description-about">
          <div className="container-des-about">
            <div className="des-a" id="about-about">
              <div className="heading-des">
                <h1>Hello guys, </h1>
                <h1>you can call me Dimas.</h1>
              </div>
              <div className="des">
                <p>
                  I am a website developer with a passion for adding value to
                  every project. Together, let's transform ideas into
                  extraordinary digital realities.
                </p>
              </div>
              <div className="button-des">
                <button>
                  <a href="#about-school">Explore More</a>
                </button>
              </div>
            </div>
            <div className="des-a" id="about-school">
              <div className="heading-des">
                <h1>I am currently</h1>
                <h1>studying at Pamulang University</h1>
              </div>
              <div className="des">
                <p>
                  I attended elementary school at Bakti Jaya, middle school at
                  Al-Inayah Islamic boarding school, vocational high school at
                  Sasmita Jaya 1, and I am currently in my fourth semester at
                  Pamulang University.
                </p>
              </div>
              <div className="button-des">
                <button>
                  <a href="#about-activity">Explore More</a>
                </button>
              </div>
            </div>
            <div className="des-a" id="about-activity">
              <div className="heading-des">
                <h1>Exploring new realms </h1>
                <h1>of knowledge and striving for excellence.</h1>
              </div>
              <div className="des">
                <p>
                  Currently, I am exploring my creative potential in website
                  development, applying the knowledge I have acquired, and
                  constantly seeking fresh inspiration to meet the challenges of
                  future evolution.
                </p>
              </div>
              <div className="button-des">
                <button>
                  <a href="#about-hobby">Explore More</a>
                </button>
              </div>
            </div>
            <div className="des-a" id="about-hobby">
              <div className="heading-des">
                <h1>Striving to deliver </h1>
                <h1>excellence in every endeavor I undertake.</h1>
              </div>
              <div className="des">
                <p>
                  I attended elementary school at Bakti Jaya, middle school at
                  Al-Inayah Islamic boarding school, vocational high school at
                  Sasmita Jaya 1, and I am currently in my fourth semester at
                  Pamulang University.
                </p>
              </div>
              <div className="button-des">
                <button>
                  <a href="#about-personal">Explore More</a>
                </button>
              </div>
            </div>
            <div className="des-a" id="about-personal">
              <div className="heading-des">
                <h1>I reside in South Tangerang,</h1>
                <h1>precisely in the Pamulang Permata.</h1>
              </div>
              <div className="des">
                <p>
                  I reside in the city of South Tangerang, precisely in Bakti
                  Jaya district, on Permata Pamulang Street. I was born on
                  October 5, 2002. Currently, I am not employed, but I work as a
                  martial arts coach near my home.
                </p>
              </div>
              <div className="button-des">
                <button>
                  <a href="#about-about">Back to about</a>
                </button>
              </div>
            </div>
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
