import { FaReact } from 'react-icons/fa';
import {
  BiSolidHome,
  BiSolidUser,
  BiSolidFolderOpen,
  BiSolidSpreadsheet,
  BiSolidContact,
} from 'react-icons/bi';
import { SetStateAction, useState } from 'react'; // Import useState
import '../../style/Navbar/navbarLeft.scss';

function NavbarLeft() {
  const [activeIcon, setActiveIcon] = useState('home'); // State untuk ikon yang aktif

  // Fungsi untuk mengubah ikon yang aktif
  const handleClick = (iconName: SetStateAction<string>) => {
    setActiveIcon(iconName);
  };

  return (
    <>
      <div className="w-24 h-full left-0 top-0 fixed hidden md:block">
        <div className="bg-p-v w-full h-1/6 pt-3 flex items-center justify-center  border-dashed border-b-4 border-[#00CDD4]">
          <FaReact className="icon-navbar" />
        </div>
        <div className="bg-p-v w-full h-5/6">
          <div className="h-full w-full pb-20 pt-6">
            <ul className="flex flex-col h-full justify-around">
              <a href="#home">
                <div
                  className={`h-20 ml-3 rounded-l-full flex justify-center items-center mr-[-1px] relative ${
                    activeIcon === 'home'
                      ? 'bg-p ct-p border-l-4 border-l-[#00CDD4] '
                      : 'border-l-4 border-l-[#0D7377] text-[#CBE4DE] hover:border-l-[#00CDD4] hover:text-white cursor-pointer'
                  }`}
                  onClick={() => handleClick('home')} // Mengatur onClick
                >
                  <span
                    className={`${
                      activeIcon === 'home' ? 'span-navbar-active' : ''
                    }`}
                  />

                  <li>
                    <BiSolidHome className="h-8 w-8 mr-[-10px]" />
                  </li>
                </div>
              </a>
              <a href="#about">
                <div
                  className={`h-20 ml-3 rounded-l-full flex justify-center items-center mr-[-1px] relative  ${
                    activeIcon === 'profil'
                      ? 'bg-p ct-p border-l-4 border-l-[#00CDD4] '
                      : 'border-l-4 border-l-[#0D7377] text-[#CBE4DE] hover:border-l-[#00CDD4] hover:text-white cursor-pointer'
                  }`}
                  onClick={() => handleClick('profil')} // Mengatur onClick
                >
                  <span
                    className={`${
                      activeIcon === 'profil' ? 'span-navbar-active' : ''
                    }`}
                  />
                  <li>
                    <BiSolidUser className="h-8 w-8 mr-[-10px]" />
                  </li>
                </div>
              </a>
              <a href="#sertificate">
                <div
                  className={`h-20 ml-3 rounded-l-full flex justify-center items-center mr-[-1px] relative  ${
                    activeIcon === 'project'
                      ? 'bg-p ct-p border-l-4 border-l-[#00CDD4] '
                      : 'border-l-4 border-l-[#0D7377] text-[#CBE4DE] hover:border-l-[#00CDD4] hover:text-white cursor-pointer'
                  }`}
                  onClick={() => handleClick('project')} // Mengatur onClick
                >
                  <span
                    className={`${
                      activeIcon === 'project' ? 'span-navbar-active' : ''
                    }`}
                  />
                  <li>
                    <BiSolidFolderOpen className="h-8 w-8 mr-[-10px]" />
                  </li>
                </div>
              </a>
              <div
                className={`h-20 ml-3 rounded-l-full flex justify-center items-center mr-[-1px] relative  ${
                  activeIcon === 'skill'
                    ? 'bg-p ct-p border-l-4 border-l-[#00CDD4] '
                    : 'border-l-4 border-l-[#0D7377] text-[#CBE4DE] hover:border-l-[#00CDD4] hover:text-white cursor-pointer'
                }`}
                onClick={() => handleClick('skill')} // Mengatur onClick
              >
                <span
                  className={`${
                    activeIcon === 'skill' ? 'span-navbar-active' : ''
                  }`}
                />
                <li>
                  <BiSolidSpreadsheet className="h-8 w-8 mr-[-10px]" />
                </li>
              </div>
              <div
                className={`h-20 ml-3 rounded-l-full flex justify-center items-center mr-[-1px] relative ${
                  activeIcon === 'contact'
                    ? 'bg-p ct-p border-l-4 border-l-[#00CDD4] '
                    : 'border-l-4 border-l-[#0D7377] text-[#CBE4DE] hover:border-l-[#00CDD4] hover:text-white cursor-pointer'
                }`}
                onClick={() => handleClick('contact')} // Mengatur onClick
              >
                <span
                  className={`${
                    activeIcon === 'contact' ? 'span-navbar-active' : ''
                  }`}
                />
                <li>
                  <BiSolidContact className="h-8 w-8 mr-[-10px]" />
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarLeft;
