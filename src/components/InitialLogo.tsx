import { useState } from "react";
import { motion } from "framer-motion";

function InitialLogo() {
  const [isHovering, setHovering] = useState(false);

  const toggleHovering = () => {
    setHovering(!isHovering);
  };

  return (
    <motion.svg
      width="559"
      height="558"
      viewBox="-80 -50 559 558"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 transition ease-in-out active:scale-90"
      onMouseEnter={toggleHovering}
      onMouseLeave={toggleHovering}
    >
      <path
        d="M0 400H74.4473L74.4473 226.5L199.654 382.654L326.553 226.5L326.553 400H401V0L199.654 268.068L0 0V400Z"
        fill="url(#paint0_linear_495_44)"
      />
      <path
        d="M309.633 88.3049H87.9831L143.819 160.841H256.617L309.633 88.3049Z"
        fill="url(#paint1_linear_495_44)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_495_44"
          x1="200.5"
          y1="0"
          x2="200.5"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="logo-transition"
            stopColor={`${isHovering ? "#0342E5" : "#03CAE5"}`}
          />
          <stop
            className="logo-transition"
            offset="1"
            stopColor={`${isHovering ? "#03CAE5" : "#0342E5"}`}
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_495_44"
          x1="200.5"
          y1="0"
          x2="200.5"
          y2="400"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="logo-transition"
            stopColor={`${isHovering ? "#0342E5" : "#03CAE5"}`}
          />
          <stop
            className="logo-transition"
            offset="1"
            stopColor={`${isHovering ? "#03CAE5" : "#0342E5"}`}
          />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

export default InitialLogo;
