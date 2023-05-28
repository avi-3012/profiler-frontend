import React from "react";
import "./style.css";

const General = ({ titleState }) => {
  const [male, setMale] = React.useState(false);
  const [female, setFemale] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const [generalState, setGeneralState] = React.useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
  });

  React.useEffect(() => {
    if (
      localStorage.getItem("general") !== null &&
      localStorage.getItem("general") !== undefined &&
      localStorage.getItem("general") !== ""
    ) {
      setGeneralState(JSON.parse(localStorage.getItem("general")));
    }
  }, []);

  React.useEffect(() => {
    if (generalState.b !== "") {
      if (generalState.b === "Male") {
        setMale(true);
      } else if (generalState.b === "Female") {
        setFemale(true);
      } else if (generalState.b === "Other") {
        setOther(true);
      }
    }
  }, [generalState]);

  React.useEffect(() => {
    localStorage.setItem("general", JSON.stringify(generalState));
  }, [generalState]);

  const changeValue = (value) => {
    if (value === "Male") {
      setMale(!male);
      setFemale(false);
      setOther(false);
    } else if (value === "Female") {
      setFemale(!female);
      setMale(false);
      setOther(false);
    } else if (value === "Other") {
      setOther(!other);
      setMale(false);
      setFemale(false);
    }
  };

  const Checked = ({ value }) => {
    return (
      <div
        className="createprofile-general-body-choice-checked"
        onClick={() => {
          if (male) {
            setGeneralState({ ...generalState, b: "" });
          } else if (female) {
            setGeneralState({ ...generalState, b: "" });
          } else if (other) {
            setGeneralState({ ...generalState, b: "" });
          }
          changeValue(`${value}`);
        }}
      >
        {value}
      </div>
    );
  };

  const Unchecked = ({ value }) => {
    return (
      <div
        className="createprofile-general-body-choice-unchecked"
        onClick={() => {
          if (!male) {
            setGeneralState({ ...generalState, b: value });
          } else if (!female) {
            setGeneralState({ ...generalState, b: value });
          } else if (!other) {
            setGeneralState({ ...generalState, b: value });
          }
          changeValue(`${value}`);
        }}
      >
        {value}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="createprofile-general-header">
        <div className="createprofile-general-header-icon"></div>
        <div className="createprofile-general-header-title">General</div>
      </div>
      <div className="createprofile-general-body">
        <div className="question">
          <div className="createprofile-general-body-question">
            What can we call you?
          </div>
          <input
            className="createprofile-general-body-input"
            type="text"
            placeholder="Full name"
            onChange={(e) => {
              setGeneralState({ ...generalState, a: e.target.value });
            }}
            value={generalState.a}
          />
        </div>
        <div className="question">
          <div className="createprofile-general-body-question">
            How do you identify?
          </div>
          <div className="createprofile-general-body-choices">
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
        </div>
        <div className="question">
          <div className="createprofile-general-body-question">
            On which day did you come into this world?
          </div>
          <input
            className="createprofile-general-body-input"
            type="date"
            onChange={(e) => {
              console.log(generalState);
              setGeneralState({ ...generalState, c: e.target.value });
            }}
            value={generalState.c}
          />
        </div>
        <div className="question">
          <div className="createprofile-general-body-question">
            What to put in recipient box to contact you?
          </div>
          <input
            className="createprofile-general-body-input"
            type="email"
            placeholder="Your mail"
            onChange={(e) => {
              console.log(generalState);
              setGeneralState({ ...generalState, d: e.target.value });
            }}
            value={generalState.d}
          />
        </div>
        <div className="question">
          <div className="createprofile-general-body-question">
            What if mail didn't work?
          </div>
          <input
            className="createprofile-general-body-input"
            type="number"
            placeholder="Phone number"
            onChange={(e) => {
              console.log(generalState);
              setGeneralState({ ...generalState, e: e.target.value });
            }}
            value={generalState.e}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default General;
