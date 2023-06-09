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

const apiUrl = process.env.REACT_APP_API_URL;

const Main = () => {
  const [loading, setloading] = React.useState(true);
  const [mainState, setmainState] = React.useState(1);
  const [mainPage, setmainPage] = React.useState();

  React.useEffect(() => {
    if (
      (localStorage.getItem("token") === null ||
        localStorage.getItem("token") === undefined ||
        localStorage.getItem("token") === "") &&
      (sessionStorage.getItem("token") === null ||
        sessionStorage.getItem("token") === undefined ||
        sessionStorage.getItem("token") === "")
    ) {
      window.location.href = "/login";
    }
    try {
      setTimeout(async () => {
        try {
          const response = await fetch(apiUrl + `/verify`, {
            method: "GET",
            headers: {
              "x-access-token":
                localStorage.getItem("token") ||
                sessionStorage.getItem("token"),
            },
          });
          const data = await response.json();
          console.log(data);
          if (data.timesloggedin < 2) {
            window.location.href = "/createprofile";
          }
          setTimeout(() => {
            if (data.status === "ok") {
              setloading(false);
            } else {
              alert("Invalid Token! Please Login Again!");
              localStorage.removeItem("token");
              sessionStorage.removeItem("token");
              window.location.href = "/login";
            }
          }, 1000);
        } catch (error) {
          alert("Server Error! Please Try Again Later!");
          console.log(error);
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
    // setTimeout(async () => {
    //   const response = await fetch(apiUrl + `/verify`, {
    //     method: "GET",
    //     headers: {
    //       "x-access-token":
    //         localStorage.getItem("token") || sessionStorage.getItem("token"),
    //     },
    //   });
    //   const data = await response.json();
    //   console.log(data);
    //   if (data.timesloggedin < 2) {
    //     window.location.href = "/createprofile";
    //   }
    //   setTimeout(() => {
    //     if (data.status === "ok") {
    //       setloading(false);
    //     } else {
    //       alert("Invalid Token! Please Login Again!");
    //       localStorage.removeItem("token");
    //       sessionStorage.removeItem("token");
    //       window.location.href = "/login";
    //     }
    //   }, 1000);
    // }, 1000);
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
