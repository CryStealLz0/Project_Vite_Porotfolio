import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import '../../style/About/desAbout.scss';

function AboutDes() {
  return (
    <>
      <div className="container-about">
        <div className="description-about">
          <div className="container-des-about">
            <div className="des-a-1" id="a">
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
                  <a href="#s">Explore More</a>
                </button>
              </div>
            </div>
            <div className="des-a-2" id="s">
              <div className="heading-des">
                <h1>I am</h1>
                <h1>a Web dimas</h1>
              </div>
              <div className="des">
                <p>
                  Crafting the digital realm with innovation and expertise,
                  seamlessly blending design and functionality into an inspiring
                  masterpiece.
                </p>
              </div>
              <div className="button-des">
                <button>Explore More</button>
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
