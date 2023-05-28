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

const CreateProfile = () => {
  const [titleState, setTitleState] = React.useState("General");
  const [pageState, setPageState] = React.useState();

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

  const title = [
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
  ];

  const handleNext = (event) => {
    event.preventDefault();
    const index = title.indexOf(titleState);
    if (index + 1 < title.length) {
      setTitleState(title[index + 1]);
    }
  };

  const handleBack = (event) => {
    event.preventDefault();
    const index = title.indexOf(titleState);
    if (index - 1 >= 0) {
      setTitleState(title[index - 1]);
    }
  };

  return (
    <div className="main-createprofile">
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
          <button
            className="createprofile-backbutton createprofile-button"
            onClick={handleBack}
          >
            Back
          </button>
          <button
            className="createprofile-nextbutton createprofile-button"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
