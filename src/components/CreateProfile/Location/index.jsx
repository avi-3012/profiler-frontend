import React from "react";
import "./style.css";

const Location = () => {
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
          <div className="createprofile-location-body-question">
            What city do you live in?
          </div>
          <input
            className="createprofile-location-body-input"
            type="text"
            placeholder="City"
          />
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
          <div className="createprofile-location-body-question">
            In which state this city is?
          </div>
          <input
            className="createprofile-location-body-input"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="question">
          <div className="createprofile-location-body-question">
            How can we deliver some gifts to you?
          </div>
          <input
            className="createprofile-location-body-input"
            type="number"
            placeholder="H.No/Locality/Street"
          />
        </div>
        <div className="question">
          <div className="createprofile-location-body-question">
            The delivery guy is asking for a code...
          </div>
          <input
            className="createprofile-location-body-input"
            type="number"
            placeholder="Zip Code"
          />
        </div>
        <div className="question">
          <div className="createprofile-location-body-question">
            Wait, are we in the right country? Where are you from?
          </div>
          <input
            className="createprofile-location-body-input"
            type="text"
            placeholder="Country"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Location;
