import React from "react";
import "./style.css";
import lockIcon from "../../../assets/icons/CreateProfile/lock.png";
import unlockIcon from "../../../assets/icons/CreateProfile/unlock.png";

const Location = () => {
  const [locAcheckbox, setLocAcheckbox] = React.useState(false);
  const [locBcheckbox, setLocBcheckbox] = React.useState(false);
  const [locCcheckbox, setLocCcheckbox] = React.useState(false);
  const [locDcheckbox, setLocDcheckbox] = React.useState(false);
  const [locEcheckbox, setLocEcheckbox] = React.useState(false);
  const [locationState, setLocationState] = React.useState({
    a: {
      value: "",
      private: false,
    },
    b: {
      value: "",
      private: false,
    },
    c: {
      value: "",
      private: false,
    },
    d: {
      value: "",
      private: false,
    },
    e: {
      value: "",
      private: false,
    },
  });

  React.useEffect(() => {
    if (
      localStorage.getItem("general") !== null &&
      localStorage.getItem("general") !== undefined &&
      localStorage.getItem("general") !== ""
    ) {
      setLocationState(JSON.parse(localStorage.getItem("location")));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("location", JSON.stringify(locationState));

    if (locationState.a.private) {
      setLocAcheckbox(true);
    }
    if (locationState.b.private) {
      setLocBcheckbox(true);
    }
    if (locationState.c.private) {
      setLocCcheckbox(true);
    }
    if (locationState.d.private) {
      setLocDcheckbox(true);
    }
    if (locationState.e.private) {
      setLocEcheckbox(true);
    }
  }, [locationState]);
  // const [male, setMale] = React.useState(false);
  // const [female, setFemale] = React.useState(false);
  // const [other, setOther] = React.useState(false);

  // const changeValue = (value) => {
  //   if (value === "Male") {
  //     setMale(!male);
  //     setFemale(false);
  //     setOther(false);
  //   } else if (value === "Female") {
  //     setFemale(!female);
  //     setMale(false);
  //     setOther(false);
  //   } else if (value === "Other") {
  //     setOther(!other);
  //     setMale(false);
  //     setFemale(false);
  //   }
  // };

  // const Checked = ({ value }) => {
  //   return (
  //     <div
  //       className="createprofile-location-body-choice-checked"
  //       onClick={() => changeValue(`${value}`)}
  //     >
  //       {value}
  //     </div>
  //   );
  // };

  // const Unchecked = ({ value }) => {
  //   return (
  //     <div
  //       className="createprofile-location-body-choice-unchecked"
  //       onClick={() => changeValue(`${value}`)}
  //     >
  //       {value}
  //     </div>
  //   );
  // };

  return (
    <React.Fragment>
      <div className="createprofile-location-header">
        <div className="createprofile-location-header-icon"></div>
        <div className="createprofile-location-header-title">Location</div>
      </div>
      <div className="createprofile-location-body">
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: locAcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setLocationState({
                ...locationState,
                a: { ...locationState.a, private: !locationState.a.private },
              });
              setLocAcheckbox(!locAcheckbox);
            }}
          />
          <div>
            <div className="createprofile-location-body-question">
              What city do you live in?
            </div>
            <input
              className="createprofile-location-body-input"
              type="text"
              placeholder="City"
              onChange={(e) =>
                setLocationState({
                  ...locationState,
                  a: { ...locationState.a, value: e.target.value },
                })
              }
              value={locationState.a.value}
            />
          </div>
        </div>
        {/* <div className="question">
          <div className="createprofile-location-body-question">
            In which state this city is?
          </div>
          <div className="createprofile-location-body-choices">
            {male ? <Checked value={"Male"} /> : <Unchecked value={"Male"} />}
            {female ? (
              <Checked value={"Female"} />
            ) : (
              <Unchecked value={"Female"} />
            )}
            {other ? (
              <Checked value={"Other"} />
            ) : (
              <Unchecked value={"Other"} />
            )}
          </div>
        </div> */}
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: locBcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setLocationState({
                ...locationState,
                b: { ...locationState.b, private: !locationState.b.private },
              });
              setLocBcheckbox(!locBcheckbox);
            }}
          />
          <div>
            <div className="createprofile-location-body-question">
              In which state this city is?
            </div>
            <input
              className="createprofile-location-body-input"
              type="text"
              placeholder="State"
              onChange={(e) =>
                setLocationState({
                  ...locationState,
                  b: { ...locationState.b, value: e.target.value },
                })
              }
              value={locationState.b.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: locCcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setLocationState({
                ...locationState,
                c: { ...locationState.c, private: !locationState.c.private },
              });
              setLocCcheckbox(!locCcheckbox);
            }}
          />
          <div>
            <div className="createprofile-location-body-question">
              How can we deliver some gifts to you?
            </div>
            <input
              className="createprofile-location-body-input"
              type="number"
              placeholder="H.No/Locality/Street"
              onChange={(e) =>
                setLocationState({
                  ...locationState,
                  c: { ...locationState.c, value: e.target.value },
                })
              }
              value={locationState.c.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: locDcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setLocationState({
                ...locationState,
                d: { ...locationState.d, private: !locationState.d.private },
              });
              setLocDcheckbox(!locDcheckbox);
            }}
          />
          <div>
            <div className="createprofile-location-body-question">
              The delivery guy is asking for a code...
            </div>
            <input
              className="createprofile-location-body-input"
              type="number"
              placeholder="Zip Code"
              onChange={(e) =>
                setLocationState({
                  ...locationState,
                  d: { ...locationState.d, value: e.target.value },
                })
              }
              value={locationState.d.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: locEcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setLocationState({
                ...locationState,
                e: { ...locationState.e, private: !locationState.e.private },
              });
              setLocEcheckbox(!locEcheckbox);
            }}
          />
          <div>
            <div className="createprofile-location-body-question">
              Wait, are we in the right country? Where are you from?
            </div>
            <input
              className="createprofile-location-body-input"
              type="text"
              placeholder="Country"
              onChange={(e) =>
                setLocationState({
                  ...locationState,
                  e: { ...locationState.e, value: e.target.value },
                })
              }
              value={locationState.e.value}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Location;
