import React from "react";
import "./style.css";

const General = ({ titleState }) => {
  const [male, setMale] = React.useState(false);
  const [female, setFemale] = React.useState(false);
  const [other, setOther] = React.useState(false);
  const [generalState, setGeneralState] = React.useState({
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
  const [genAcheckbox, setGenAcheckbox] = React.useState(false);
  const [genBcheckbox, setGenBcheckbox] = React.useState(false);
  const [genCcheckbox, setGenCcheckbox] = React.useState(false);
  const [genDcheckbox, setGenDcheckbox] = React.useState(false);
  const [genEcheckbox, setGenEcheckbox] = React.useState(false);

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
    if (generalState.b.value !== "") {
      if (generalState.b.value === "Male") {
        setMale(true);
      } else if (generalState.b.value === "Female") {
        setFemale(true);
      } else if (generalState.b.value === "Other") {
        setOther(true);
      }
    }

    if (generalState.a.private) {
      setGenAcheckbox(true);
    }
    if (generalState.b.private) {
      setGenBcheckbox(true);
    }
    if (generalState.c.private) {
      setGenCcheckbox(true);
    }
    if (generalState.d.private) {
      setGenDcheckbox(true);
    }
    if (generalState.e.private) {
      setGenEcheckbox(true);
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
            setGeneralState({
              ...generalState,
              b: { ...generalState.b, value: "" },
            });
          } else if (female) {
            setGeneralState({
              ...generalState,
              b: { ...generalState.b, value: "" },
            });
          } else if (other) {
            setGeneralState({
              ...generalState,
              b: { ...generalState.b, value: "" },
            });
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
            setGeneralState({
              ...generalState,
              b: { ...generalState.b, value: value },
            });
          } else if (!female) {
            setGeneralState({
              ...generalState,
              b: { ...generalState.b, value: value },
            });
          } else if (!other) {
            setGeneralState({
              ...generalState,
              b: { ...generalState.b, value: value },
            });
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
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{ backgroundColor: genAcheckbox ? "black" : "transparent" }}
            onClick={() => {
              setGeneralState({
                ...generalState,
                a: { ...generalState.a, private: !generalState.a.private },
              });
              setGenAcheckbox(!genAcheckbox);
            }}
          />
          <div>
            <div className="createprofile-general-body-question">
              What can we call you?
            </div>
            <input
              className="createprofile-general-body-input"
              type="text"
              placeholder="Full name"
              onChange={(e) => {
                setGeneralState({
                  ...generalState,
                  a: { ...generalState.a, value: e.target.value },
                });
              }}
              value={generalState.a.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{ backgroundColor: genBcheckbox ? "black" : "transparent" }}
            onClick={() => {
              setGeneralState({
                ...generalState,
                b: { ...generalState.b, private: !generalState.b.private },
              });
              setGenBcheckbox(!genBcheckbox);
            }}
          />
          <div>
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
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{ backgroundColor: genCcheckbox ? "black" : "transparent" }}
            onClick={() => {
              setGeneralState({
                ...generalState,
                c: { ...generalState.c, private: !generalState.c.private },
              });

              setGenCcheckbox(!genCcheckbox);
            }}
          />
          <div>
            <div className="createprofile-general-body-question">
              On which day did you come into this world?
            </div>
            <input
              className="createprofile-general-body-input"
              type="date"
              onChange={(e) => {
                console.log(generalState);
                setGeneralState({
                  ...generalState,
                  c: { ...generalState.c, value: e.target.value },
                });
              }}
              value={generalState.c.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{ backgroundColor: genDcheckbox ? "black" : "transparent" }}
            onClick={() => {
              setGeneralState({
                ...generalState,
                d: { ...generalState.d, private: !generalState.d.private },
              });
              setGenDcheckbox(!genDcheckbox);
            }}
          />
          <div>
            <div className="createprofile-general-body-question">
              What to put in recipient box to contact you?
            </div>
            <input
              className="createprofile-general-body-input"
              type="email"
              placeholder="Your mail"
              onChange={(e) => {
                console.log(generalState);
                setGeneralState({
                  ...generalState,
                  d: { ...generalState.d, value: e.target.value },
                });
              }}
              value={generalState.d.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{ backgroundColor: genEcheckbox ? "black" : "transparent" }}
            onClick={() => {
              setGeneralState({
                ...generalState,
                e: { ...generalState.e, private: !generalState.e.private },
              });

              setGenEcheckbox(!genEcheckbox);
            }}
          />
          <div>
            <div className="createprofile-general-body-question">
              What if mail didn't work?
            </div>
            <input
              className="createprofile-general-body-input"
              type="number"
              placeholder="Phone number"
              onChange={(e) => {
                console.log(generalState);
                setGeneralState({
                  ...generalState,
                  e: { ...generalState.e, value: e.target.value },
                });
              }}
              value={generalState.e.value}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default General;
