import { InitialStroke } from "../components";
import { motion } from "framer-motion";

function Initial() {
  return (
    <div className="m-0 box-border flex h-full flex-1 items-center justify-center p-0">
      <motion.div
        exit={{ scale: [1, 1.2, 0] }}
        transition={{
          duration: 0.5
        }}
        className="h-fit w-fit"
      >
        <InitialStroke />
      </motion.div>
    </div>
  );
}

export default Initial;
