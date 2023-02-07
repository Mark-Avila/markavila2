import InitialSVG from "../assets/initial.svg";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence, Variants } from "framer-motion";
import InitialLogo from "./InitialLogo";

interface HeaderItems {
  [item: string]: boolean;
}

interface HeaderProps {
  items: HeaderItems;
  onItemClick: (key: string) => void;
}

function Header(props: HeaderProps) {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const { items, onItemClick } = props;

  const toggleMobileItems = () => {
    setMobileOpen(!isMobileOpen);
  };

  const handleItemClick = (key: string) => {
    onItemClick(key);

    setTimeout(toggleMobileItems, 150);
  }

  const listVariant: Variants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        delay: 0.3
      }
    },
    show: {
      height: 500,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3
      }
    }
  }

  const itemVariant: Variants = {
    hidden: {
      width: 0,
      opacity: 0,
    },
    show: {
      width: "100%",
      opacity: 1,
    }
  }

  //

  return (
    <nav className="fixed w-full z-20 h-fit bg-[rgb(07,07,07)] border-b border-b-gray-700 md:bg-transparent pb-4 md:border-none md:py-4">
      <ul className="flex h-full flex-col items-start justify-center px-6 text-white md:flex-row md:items-center md:justify-between">
        <li className="mt-4 flex w-full items-center justify-between md:mt-0 md:w-20">
          <button className="w-fit">
            <InitialLogo/>
          </button>
          <button
            onClick={toggleMobileItems}
            className="flex h-full items-center justify-center md:hidden"
          >
            {isMobileOpen ? <CgClose size={30} /> : <FaListUl size={30} />}
          </button>
        </li>
        <AnimatePresence>
        {isMobileOpen && (
            <motion.ul animate="show" exit="hidden" initial="hidden" variants={listVariant} className="box-border overflow-hidden w-full md:hidden">
              {Object.keys(items).map((item: string, index) => (
                <motion.li variants={itemVariant} key={index} className="overflow-hidden first:mt-8 box-border w-full">
                  <button
                    onClick={() => handleItemClick(item)}
                    className={`nav-hover h-16 w-full rounded-sm px-10 text-left font-roboto text-lg text-gray-400 outline-none hover:border-b-gray-400 ${
                      items[item] ? "nav-onclick" : ""
                    }`}
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
              <motion.li variants={itemVariant} className="overflow-hidden w-full mt-8">
                <button className="border-1 resume h-16 text-left px-10 box-border text-lg w-full rounded-md border border-white font-roboto transition ease-in bg-transparent before:active:bg-slate-300">
                  Resume
                </button>
              </motion.li>
            </motion.ul>
        )}
        </AnimatePresence>
        <ul className="hidden md:flex md:w-fit md:items-center md:justify-between">
          {Object.keys(items).map((item: string, index) => (
            <li key={index + 10} className="box-border w-full md:mx-2 md:w-20">
              <button
                onClick={() => handleItemClick(item)}
                className={`nav-hover h-8 w-full rounded-sm px-1 text-center font-roboto text-sm text-gray-400 outline-none hover:border-b-gray-400 ${
                  items[item] ? "md:nav-onclick" : ""
                }`}
                key={index}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <li className="hidden w-20 md:block">
          <button className="border-1 resume h-10 w-full rounded-md border border-white font-roboto text-sm transition ease-in bg-transparent before:active:bg-slate-300">
            Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
