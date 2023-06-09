import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Navigation = ({ setmainState }) => {
  const navhome = () => {
    setmainState(1);
  };
  const navglobal = () => {
    setmainState(2);
  };
  const navpost = () => {
    setmainState(3);
  };
  const navchat = () => {
    setmainState(4);
  };
  const navprofile = () => {
    setmainState(5);
  };

  return (
    <motion.div
      className="navigation"
      animate={{
        y: [-50, 0],
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="nav-home nav-item" onClick={() => navhome()}>
        <div className="nav-home-icon"></div>
      </div>
      <div className="nav-global nav-item" onClick={() => navglobal()}>
        <div className="nav-global-icon"></div>
      </div>
      <div className="nav-post nav-item" onClick={() => navpost()}>
        <div className="nav-post-icon"></div>
      </div>
      <div className="nav-chat nav-item" onClick={() => navchat()}>
        <div className="nav-chat-icon"></div>
      </div>
      <div className="nav-profile nav-item" onClick={() => navprofile()}>
        <div className="nav-profile-icon"></div>
      </div>
    </motion.div>
  );
};

export default Navigation;
