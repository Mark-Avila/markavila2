import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function InitialStroke() {
  const [strokeDone, setStrokeDone] = useState(false);

  useEffect(() => {
    setTimeout(() => setStrokeDone(true), 2700);
  }, []);

  return (
    <motion.svg
      width="559"
      height="558"
      viewBox="-80 -50 559 558"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-48 w-48 transition ease-in-out active:scale-90"
    >
      {strokeDone && (
        <>
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            d="M3 408H77.4473L77.4473 234.5L202.654 390.654L329.553 234.5L329.553 408H404V8L202.654 276.068L3 8V408Z"
            fill="url(#paint0_linear_495_41)"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            d="M312.633 96.3049H90.9831L146.819 168.841H259.617L312.633 96.3049Z"
            fill="url(#paint1_linear_495_41)"
          />
        </>
      )}
      <motion.path
        d="M3 408H77.4473L77.4473 234.5L202.654 390.654L329.553 234.5L329.553 408H404V8L202.654 276.068L3 8V408Z"
        stroke="#0356E5"
        strokeWidth="8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M312.633 96.3049H90.9831L146.819 168.841H259.617L312.633 96.3049Z"
        stroke="#0356E5"
        strokeWidth="8"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut"
        }}
      />
      {
        <defs>
          <linearGradient
            id="paint0_linear_495_41"
            x1="203.5"
            y1="8"
            x2="203.5"
            y2="408"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#034FE5" />
            <stop offset="1" stopColor="#03C1E5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_495_41"
            x1="203.5"
            y1="8"
            x2="203.5"
            y2="408"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#034FE5" />
            <stop offset="1" stopColor="#03C1E5" />
          </linearGradient>
        </defs>
      }
    </motion.svg>
  );
}

export default InitialStroke;
