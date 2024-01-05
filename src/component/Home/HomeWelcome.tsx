import '../../style/Home/homeWelcome.scss';

function HomeWelcome() {
  return (
    <>
      <div className="container-profil">
        <div className="heading">
          <h1>Home</h1>
        </div>
        <div className="profil">
          <div className="side-profil">
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
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>EXPERIENCE</li>
                <li>CONTACT</li>
              </ul>
            </div>
            <div className="copy-right">
              <p>
                Create by Dimas Indra Jaya | Crafted with Passion & Precision |
                All Rights Reserved &copy; 2024.
              </p>
            </div>
          </div>
          <div className="content-profil">
            <div className="description-profil">
              <div className="heading-des">
                <h1>I am</h1>
                <h1>a Web Developer</h1>
              </div>
              <div className="des">
                <p>
                  Crafting the digital realm with innovation and expertise,
                  seamlessly blending design and functionality into an inspiring
                  masterpiece.
                </p>
              </div>
              <div className="button-des">
                <button>Explore More About Me</button>
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
    </>
  );
}

export default HomeWelcome;
