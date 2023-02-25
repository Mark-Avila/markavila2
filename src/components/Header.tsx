import InitialSVG from "../assets/initial.svg";
import { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence, Variants } from "framer-motion";
import InitialLogo from "./InitialLogo";
import { global, headerVariants } from "../variants";
import ToggleSwitch from "./ToggleSwitch";

interface HeaderItems {
  [item: string]: boolean;
}

interface HeaderProps {
  items: HeaderItems;
  onItemClick: (key: string) => void;
  particles: boolean;
  handleParticles: () => void;
}

function Header(props: HeaderProps) {
  const [isMobileOpen, setMobileOpen] = useState(false);

  const { items, onItemClick, handleParticles } = props;

  const toggleMobileItems = () => {
    setMobileOpen(!isMobileOpen);
  };

  const handleItemClick = (key: string) => {
    onItemClick(key);

    setTimeout(toggleMobileItems, 150);
  };

  return (
    <nav className="fixed z-20 box-border h-fit w-full border-b border-b-gray-700 bg-[rgb(07,07,07)] pb-4 md:border-none md:bg-transparent md:py-4">
      <ul className="flex h-full flex-col items-start justify-center px-6 text-white md:flex-row md:items-center md:justify-between">
        <li className="mt-4 flex w-full items-center justify-between md:mt-0 md:w-48">
          <motion.button
            initial="hidden"
            animate="show"
            variants={global.popScale}
            className="flex w-fit items-center justify-center"
            onClick={() => handleItemClick("home")}
          >
            <InitialLogo />
          </motion.button>
          <button
            onClick={toggleMobileItems}
            className="flex h-full items-center justify-center md:hidden"
          >
            {isMobileOpen ? <CgClose size={30} /> : <FaListUl size={30} />}
          </button>
        </li>
        <li className="box-border w-full overflow-hidden md:hidden">
          <AnimatePresence>
            {isMobileOpen && (
              <motion.ul
                animate="show"
                exit="hidden"
                initial="hidden"
                variants={headerVariants.mbDropdown}
                className="box-border w-full overflow-hidden md:hidden"
              >
                {Object.keys(items).map(
                  (item: string, index) =>
                    item !== "initial" && (
                      <motion.li
                        variants={headerVariants.mbItem}
                        key={index}
                        className="box-border w-full overflow-hidden first:mt-8"
                      >
                        <button
                          onClick={() => handleItemClick(item)}
                          className={`nav-hover h-16 w-full rounded-sm px-10 text-left font-roboto text-lg text-gray-400 outline-none hover:border-b-gray-400 ${
                            items[item] ? "nav-onclick" : ""
                          }`}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                      </motion.li>
                    )
                )}
                <motion.li
                  variants={headerVariants.mbItem}
                  className="mt-8 w-full overflow-hidden"
                >
                  <button className="border-1 resume box-border h-16 w-full rounded-md border border-white bg-transparent px-10 text-left font-roboto text-lg transition ease-in before:active:bg-slate-300">
                    Resume
                  </button>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </li>

        {/* Desktop nav */}
        <li className="hidden md:block">
          <motion.ul
            initial="hidden"
            animate="show"
            variants={headerVariants.linkStagger}
            className="flex overflow-hidden md:w-fit md:items-center md:justify-between"
          >
            {Object.keys(items).map(
              (item: string, index) =>
                item !== "home" &&
                item !== "initial" && (
                  <motion.li
                    variants={global.letterSlideUp}
                    transition={{
                      ease: global.eases.slideUp,
                      duration: 0.5
                    }}
                    key={index + 10}
                    className="box-border w-full md:w-20"
                  >
                    <button
                      onClick={() => handleItemClick(item)}
                      className={`nav-hover h-8 w-full rounded-sm px-1 text-center font-montserrat text-xs text-gray-400 outline-none hover:border-b-gray-400 lg:w-16 lg:text-xs ${
                        items[item] ? "md:nav-onclick" : ""
                      }`}
                      key={index}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  </motion.li>
                )
            )}
          </motion.ul>
        </li>
        <motion.li
          initial="hidden"
          animate="show"
          variants={global.popScale}
          transition={{
            delay: 0.8
          }}
          className="hidden w-48 md:flex md:items-center md:justify-end lg:justify-between"
        >
          <ToggleSwitch onChange={handleParticles} />

          <button className="border-1 resume h-10 w-20 rounded-md border border-white bg-transparent font-montserrat text-xs transition ease-in before:active:bg-slate-300">
            Resume
          </button>
        </motion.li>
      </ul>
    </nav>
  );
}

export default Header;
