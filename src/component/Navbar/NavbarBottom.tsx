import {
  BiSolidHome,
  BiSolidUser,
  BiSolidFolderOpen,
  BiSolidSpreadsheet,
  BiSolidContact,
} from 'react-icons/bi';
import '../../style/StyleComponent/Navbar/navbarBottom.scss';
import { useState } from 'react';

function NavbarBottom() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
        className={`fixed bottom-0 left-0 w-full px-9 md:hidden duration-300 z-50 ${
          isOpen ? 'h-20' : 'h-16'
        }`}
      >
        <div className="w-full h-full rounded-t-xl bg-black">
          <span
            className={`duration-300 ${
              isOpen ? 'span-left-active' : 'span-left'
            }`}
          />
          <span
            className={`duration-300 ${
              isOpen ? 'span-right-active' : 'span-right'
            }`}
          />
          <div className="absolute top-0 left-0 flex justify-center w-full">
            <button
              className="w-8 h-1 bg-white rounded-md"
              onClick={toggleMenu}
            ></button>
          </div>
          <div>
            <ul
              className={`grid grid-cols-5 w-full h-full justify-around leading-[80px] text-[12px] font-bold text-white duration-300 ${
                isOpen ? 'translate-y-4' : 'translate-y-5'
              }`}
            >
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidUser
                    className={`duration-300 h-8 w-8 ${
                      isOpen ? 'h-7 w-7 text-white ' : 'text-[#b9b9b9]'
                    }`}
                  />
                  <span
                    className={`mt-[-30px] translate-y-5  duration-300 ${
                      isOpen ? 'translate-y-[-5]' : ''
                    }`}
                  >
                    Profil
                  </span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidFolderOpen
                    className={`duration-300 h-8 w-8 ${
                      isOpen ? 'h-7 w-7 text-white ' : 'text-[#b9b9b9]'
                    }`}
                  />
                  <span
                    className={`mt-[-30px] translate-y-5  duration-300 ${
                      isOpen ? 'translate-y-[-5]' : ''
                    }`}
                  >
                    Project
                  </span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidHome
                    className={`duration-300 h-8 w-8 ${
                      isOpen ? 'h-7 w-7 text-white ' : 'text-[#b9b9b9]'
                    }`}
                  />
                  <span
                    className={`mt-[-30px] translate-y-5  duration-300 ${
                      isOpen ? 'translate-y-[-5]' : ''
                    }`}
                  >
                    Home
                  </span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidSpreadsheet
                    className={`duration-300 h-8 w-8 ${
                      isOpen ? 'h-7 w-7 text-white ' : 'text-[#b9b9b9]'
                    }`}
                  />
                  <span
                    className={`mt-[-30px] translate-y-5  duration-300 ${
                      isOpen ? 'translate-y-[-5]' : ''
                    }`}
                  >
                    Skill
                  </span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidContact
                    className={`duration-300 h-8 w-8 ${
                      isOpen ? 'h-7 w-7 text-white ' : 'text-[#b9b9b9]'
                    }`}
                  />
                  <span
                    className={`mt-[-30px] translate-y-5 duration-300 ${
                      isOpen ? 'translate-y-[-5]' : ''
                    }`}
                  >
                    Contact
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarBottom;
