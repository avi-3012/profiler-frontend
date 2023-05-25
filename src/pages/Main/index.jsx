import React from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";

//components
import Loading from "../../components/Main/Loading";
import Navigation from "../../components/Main/Navigation";

//pages
import Home from "./Home";
import Global from "./Global";
import Post from "./Post";
import Chat from "./Chat";
import Profile from "./Profile";

const Main = () => {
  const [update, setupdate] = React.useState(0);
  const [loading, setloading] = React.useState(true);
  const [mainState, setmainState] = React.useState(1);
  const [mainPage, setmainPage] = React.useState();

  React.useEffect(() => {
    if (update === 1) {
      setloading(false);
    }
  }, [update]);

  setTimeout(() => {
    setupdate(1);
  }, 8000);

  React.useEffect(() => {
    if (mainState === 1) {
      setmainPage(<Home />);
    } else if (mainState === 2) {
      setmainPage(<Global />);
    } else if (mainState === 3) {
      setmainPage(<Post />);
    } else if (mainState === 4) {
      setmainPage(<Chat />);
    } else if (mainState === 5) {
      setmainPage(<Profile />);
    }
  }, [mainState]);

  const MainContainer = () => {
    return <React.Fragment>{mainPage}</React.Fragment>;
  };

  return (
    <React.Fragment>
      <div className="main">
        {loading ? (
          <div>
            <Loading setupdate={setupdate} />
          </div>
        ) : (
          <div className="main-container">
            <MainContainer />
            <Navigation setmainState={setmainState} />
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Main;
