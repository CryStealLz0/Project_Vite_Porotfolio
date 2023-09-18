import {
  BiSolidHome,
  BiSolidUser,
  BiSolidFolderOpen,
  BiSolidSpreadsheet,
  BiSolidContact,
} from 'react-icons/bi';
import '../../style/Navbar/navbarBottom.scss';

function NavbarBottom() {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-20 px-10 md:hidden">
        <div className="w-full h-full bg-black">
          <span className="span-left" />
          <span className="span-right" />
          <div>
            <ul className="translate-y-7 hover:translate-y-2 duration-300 grid grid-cols-5 w-full h-full justify-around leading-[80px] font-bold text-white">
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="flex flex-col justify-center items-center">
                  <BiSolidUser className="h-10 w-10" />
                  <span className="mt-[-20px]">Profil</span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="flex flex-col justify-center items-center">
                  <BiSolidFolderOpen className="h-10 w-10" />
                  <span className="mt-[-20px]">Project</span>
                </li>
              </div>
              <div className="grid-cols-2 flex flex-col items-center justify-center">
                <li className="flex flex-col justify-center items-center">
                  <BiSolidHome className="h-10 w-10" />
                  <span className="mt-[-20px]">Home</span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="flex flex-col justify-center items-center">
                  <BiSolidSpreadsheet className="h-10 w-10" />
                  <span className="mt-[-20px]">Skill</span>
                </li>
              </div>
              <div className="grid-cols-2 flex items-center justify-center">
                <li className="flex flex-col justify-center items-center">
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
