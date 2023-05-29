import React from "react";
import "./style.css";
import { motion, AnimatePresence } from "framer-motion";

//
import General from "../../components/CreateProfile/General/index.jsx";
import Location from "../../components/CreateProfile/Location/index.jsx";
import Study from "../../components/CreateProfile/Study/index.jsx";
import Family from "../../components/CreateProfile/Family/index.jsx";
import Skills from "../../components/CreateProfile/Skills/index.jsx";
import Hobbies from "../../components/CreateProfile/Hobbies/index.jsx";
import Interests from "../../components/CreateProfile/Interests/index.jsx";
import Friends from "../../components/CreateProfile/Friends/index.jsx";
import Personality from "../../components/CreateProfile/Personality/index.jsx";
import Favourites from "../../components/CreateProfile/Favourites/index.jsx";
import Lifestyle from "../../components/CreateProfile/Lifestyle/index.jsx";
import Misc from "../../components/CreateProfile/Misc/index.jsx";

const CreateProfile = () => {
  const [titleState, setTitleState] = React.useState("General");
  const [pageState, setPageState] = React.useState();
  const [endbuttonState, setEndbuttonState] = React.useState(false);
  const [disableBack, setDisableBack] = React.useState(true);
  const [disableNext, setDisableNext] = React.useState(false);
  const [title] = React.useState([
    "General",
    "Location",
    "Study",
    "Family",
    "Skills",
    "Hobbies",
    "Interests",
    "Friends",
    "Personality",
    "Favourites",
    "Lifestyle",
  ]);

  React.useEffect(() => {
    switch (titleState) {
      case "General":
        setPageState(<General titleState={titleState} />);
        break;
      case "Location":
        setPageState(<Location />);
        break;
      case "Study":
        setPageState(<Study />);
        break;
      case "Family":
        setPageState(<Family />);
        break;
      case "Skills":
        setPageState(<Skills />);
        break;
      case "Hobbies":
        setPageState(<Hobbies />);
        break;
      case "Interests":
        setPageState(<Interests />);
        break;
      case "Friends":
        setPageState(<Friends />);
        break;
      case "Personality":
        setPageState(<Personality />);
        break;
      case "Favourites":
        setPageState(<Favourites />);
        break;
      case "Lifestyle":
        setPageState(<Lifestyle />);
        break;
      default:
        setPageState(<General />);
    }
  }, [titleState]);

  React.useEffect(() => {
    const index = title.indexOf(titleState);
    if (index === 0) {
      setDisableBack(true);
    } else {
      setDisableBack(false);
    }
    if (index === title.length - 1) {
      setDisableNext(true);
    } else {
      setDisableNext(false);
    }
  }, [titleState, title]);

  const handleNext = (event) => {
    event.preventDefault();
    const index = title.indexOf(titleState);
    if (index + 1 < title.length) {
      // setEndbuttonState(true);
      if (index + 2 === title.length) {
        setEndbuttonState(true);
      }
      setTitleState(title[index + 1]);
    }
  };

  const handleBack = (event) => {
    event.preventDefault();
    const index = title.indexOf(titleState);
    if (index - 1 >= 0) {
      setTitleState(title[index - 1]);
      setEndbuttonState(false);
    }
  };

  const handleEnd = (event) => {
    event.preventDefault();
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  return (
    <div className="main-createprofile">
      <Misc />
      <div className="createprofile-mainDiv">
        <AnimatePresence mode="wait">
          <motion.div
            key={titleState}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            {pageState}
          </motion.div>
        </AnimatePresence>
        {/* {pageState} */}
        <div className="createprofile-buttons">
          {disableBack ? (
            <button
              className="createprofile-button-disable"
              onClick={handleBack}
              disabled
            >
              Back
            </button>
          ) : (
            <button
              className="createprofile-backbutton createprofile-button"
              onClick={handleBack}
            >
              Back
            </button>
          )}
          {disableNext ? (
            <button
              className="createprofile-nextbutton createprofile-button-disable"
              onClick={handleNext}
              disabled
            >
              Next
            </button>
          ) : (
            <button
              className="createprofile-nextbutton createprofile-button"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
        <div className="createprofile-endbutton">
          {endbuttonState ? (
            <button className="createprofile-submitbutton" onClick={handleEnd}>
              Submit
            </button>
          ) : (
            <button className="createprofile-skipbutton" onClick={handleEnd}>
              Skip
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
