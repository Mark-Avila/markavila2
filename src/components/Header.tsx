import InitialSVG from "../assets/initial.svg";
import { FaListUl } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

interface HeaderItems {
  [item: string]: boolean;
}

interface HeaderProps {
  items: HeaderItems;
  onItemClick: (key: string) => void;
  isMobileOpen: boolean;
  toggleMobileOpen: () => void;
}

function Header(props: HeaderProps) {
  const { items, isMobileOpen, onItemClick, toggleMobileOpen } = props;

  return (
    <nav className="h-fit border-b border-b-gray-800 pb-4 md:py-4 md:border-none">
      <ul className="flex h-full flex-col items-start justify-center px-6 text-white md:flex-row md:justify-between md:items-center">
        <li className="mt-4 md:mt-0 flex w-full items-center justify-between md:w-20">
          <button className="w-fit">
            <img src={InitialSVG} className="h-8 w-8" alt="initial-svg" />
          </button>
          <button
            onClick={toggleMobileOpen}
            className="flex h-full items-center justify-center md:hidden"
          >
            {isMobileOpen ? <FaListUl size={30} /> : <CgClose size={30} />}
          </button>
        </li>
        {isMobileOpen && <li className="mt-8 md:hidden"></li>}
        <ul className="w-full md:w-fit md:flex md:justify-between md:items-center">
        {isMobileOpen &&
          Object.keys(props.items).map((item: string, index) => (
              <li className="box-border w-full md:w-20 md:mx-2">
                <button
                  onClick={() => props.onItemClick(item)}
                  className={`nav-hover h-16 md:h-8 md:text-sm md:text-center w-full rounded-sm px-10 text-left font-roboto text-lg text-gray-400 outline-none hover:border-b-gray-400 md:px-1 ${
                    props.items[item] ? "md:nav-onclick" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              </li>
          ))}
          </ul>
        <li className="hidden w-20 md:block">
          <button className="border-1 resume h-10 w-full rounded-md border  border-white font-roboto text-sm transition ease-in">
            Resume
          </button>
        </li>
      </ul>
      {/* <ul className="flex flex-col items-start justify-between text-white">>
        <li className="w-20">
          <button className="w-fit">
            <img src={InitialSVG} className="h-8 w-8" alt="initial-svg" />
          </button>
        </li>
        <ul className="flex flex-col">
          {Object.keys(props.items).map((item: string) => (
            <li className="w-full">
              <button
                onClick={() => props.onItemClick(item)}
                className={`w-full nav-hover mx-2 h-8 rounded-sm font-roboto text-sm text-gray-400 outline-none hover:border-b-gray-400 ${
                  props.items[item] ? "nav-onclick" : ""
                }`}
              >
                {item}
              </button>
            </li>
          ))}
          <li className="hidden w-20">
            <button className="border-1 resume h-10 w-full rounded-md border  border-white font-roboto text-sm transition ease-in">
              Resume
            </button>
          </li>
        </ul>
      </ul> */}
    </nav>
  );
}

export default Header;
