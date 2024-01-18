import '../../style/About/aboutProfil.scss';
import '../../style/About/aboutProfilQuery.scss';

import { IBaseData } from '../../data';
import data from '../../data.json';

import AboutDes from '../About/AboutDes.tsx';
import React from 'react';

import { SetStateAction, useState } from 'react'; // Import useState

function AboutProfil() {
  const [responses] = React.useState<IBaseData>(data);

  const [activeIcon, setActiveIcon] = useState('about'); // State untuk ikon yang aktif

  // Fungsi untuk mengubah ikon yang aktif
  const handleClick = (iconName: SetStateAction<string>) => {
    setActiveIcon(iconName);
  };

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
            <AboutDes contentAboutData={responses.contentAbout} />
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
                <li
                  className={` ${
                    activeIcon == 'about' ? 'side-bar-profil-home' : ' '
                  }`}
                  onClick={() => handleClick('about')}
                >
                  <a href="#about-about">ABOUT</a>
                </li>
                <li
                  className={` ${
                    activeIcon == 'school' ? 'side-bar-profil-home' : ' '
                  }`}
                  onClick={() => handleClick('school')}
                >
                  <a href="#about-school">SCHOOL</a>
                </li>
                <li
                  className={` ${
                    activeIcon == 'activity' ? 'side-bar-profil-home' : ' '
                  }`}
                  onClick={() => handleClick('activity')}
                >
                  <a href="#about-activity">ACTIVITY</a>
                </li>
                <li
                  className={` ${
                    activeIcon == 'hobby' ? 'side-bar-profil-home' : ' '
                  }`}
                  onClick={() => handleClick('hobby')}
                >
                  <a href="#about-hobby">HOBBY</a>
                </li>
                <li
                  className={` ${
                    activeIcon == 'personal' ? 'side-bar-profil-home' : ' '
                  }`}
                  onClick={() => handleClick('personal')}
                >
                  <a href="#about-personal">PERSONAL</a>
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
