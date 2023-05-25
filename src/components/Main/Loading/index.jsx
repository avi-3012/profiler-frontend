import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Loading = () => {
  const [size1] = React.useState("8px");
  const [size2] = React.useState("32px");
  const [size3] = React.useState("8px");
  const [rotate1] = React.useState(0);
  const [rotate2] = React.useState(180);
  const [rotate3] = React.useState(360);

  return (
    <div className="loading-main">
      <motion.div
        className="loading-main-loader"
        animate={{
          rotate: [rotate1, rotate2, rotate3],
          borderRadius: [`${size1}`, `${size2}`, `${size3}`],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      ></motion.div>
    </div>
  );
};

export default Loading;
