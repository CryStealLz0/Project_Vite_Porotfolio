import {
  BiSolidHome,
  BiSolidUser,
  BiSolidFolderOpen,
  BiSolidSpreadsheet,
  BiSolidContact,
} from 'react-icons/bi';
import '../../style/Navbar/navbarBottom.scss';
import { useState } from 'react';

function NavbarBottom() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-20 px-10 md:hidden">
        <div className="w-full h-full bg-[#0000006a]">
          <span className="span-left" />
          <span className="span-right" />
          <div className="absolute top-0 left-0 flex justify-center w-full">
            <button
              className="w-8 h-1 bg-white rounded-md"
              onClick={toggleMenu}
            ></button>
          </div>
          <div>
            <ul
              className={`grid grid-cols-5 w-full h-full justify-around leading-[80px] font-bold text-white duration-300 ${
                isOpen ? 'translate-y-2 ' : 'translate-y-7'
              }`}
            >
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidUser className="h-10 w-10" />
                  <span className="mt-[-20px]">Profil</span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidFolderOpen className="h-10 w-10" />
                  <span className="mt-[-20px]">Project</span>
                </li>
              </div>
              <div className="grid-cols-2 flex flex-col items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidHome className="h-10 w-10" />
                  <span className="mt-[-20px]">Home</span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidSpreadsheet className="h-10 w-10" />
                  <span className="mt-[-20px]">Skill</span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="cursor-pointer flex flex-col justify-center items-center">
                  <BiSolidContact className="h-10 w-10" />
                  <span className="mt-[-20px]">Contact</span>
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
