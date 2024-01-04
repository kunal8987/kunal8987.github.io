import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import Profile from "../../assets/Kunal.JPG";
import AOS from "aos";
import { Link } from "react-scroll";
import Resume from "../../assets/Kunal_Deotale_Resume.pdf";
import "aos/dist/aos.css";
const menuItems = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },

  {
    name: "Skills",
    href: "skills",
  },
  {
    name: "Projects",
    href: "projects",
  },
  {
    name: "Git",
    href: "github",
  },
  {
    name: "Contacts",
    href: "contacts",
  },
];
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div data-aos="fade-down" className=" fixed top-0 z-20 w-full bg-stone-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <div className="isolate flex -space-x-2">
              <img
                className="relative z-10 inline-block h-10 w-10 object-top object-cover rounded-full ring-2 ring-white"
                src={Profile}
                alt="Lee_Robinson"
              />
            </div>
          </span>
          <span className="font-bold text-2xl">Kunal Deotale</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  smooth={true}
                  offset={-30}
                  duration={1500}
                  className=" font-semibold text-xl text-gray-800 hover:text-gray-900 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block ">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <a
              href={Resume}
              download
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1_JOQXfdN6AQCsgg8m1R4i2M66Z3mvRhe/view?usp=drive_link"
                )
              }
            >
              Resume
            </a>
          </button>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <div className="isolate flex -space-x-2">
                        <img
                          className="relative z-10 inline-block h-10 w-10 object-top object-cover rounded-full ring-2 ring-white"
                          src={Profile}
                          alt="Lee_Robinson"
                        />
                      </div>
                    </span>
                    <span className="font-bold text-xl">Kunal Deotale</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        smooth={true}
                        offset={-30}
                        duration={1500}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold cursor-pointer hover:bg-gray-50"
                      >
                        <span className="ml-3 font-medium text-xl text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                >
                  <a
                    href={Resume}
                    download
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/1_JOQXfdN6AQCsgg8m1R4i2M66Z3mvRhe/view?usp=drive_link"
                      )
                    }
                  >
                    Resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
