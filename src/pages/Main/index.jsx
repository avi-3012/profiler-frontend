import React from "react";
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

const apiUrl = "http://localhost:8080";

const Main = () => {
  const [loading, setloading] = React.useState(true);
  const [mainState, setmainState] = React.useState(1);
  const [mainPage, setmainPage] = React.useState();

  React.useEffect(() => {
    if (localStorage.getItem("token") === null) {
      window.location.href = "/login";
    }
    setTimeout(async () => {
      const response = await fetch(apiUrl + `/verify`, {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      console.log(data);
      if (data.status === "ok") {
        setloading(false);
      } else {
        alert("Invalid Token! Please Login Again!");
        window.location.href = "/login";
      }
    }, 2000);
  }, []);

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
            <Loading />
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
