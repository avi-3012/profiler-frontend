import React from "react";
import "./style.css";
import lockIcon from "../../../assets/icons/CreateProfile/lock.png";
import unlockIcon from "../../../assets/icons/CreateProfile/unlock.png";

const Study = () => {
  const [studyAcheckbox, setStudyAcheckbox] = React.useState(false);
  const [studyBcheckbox, setStudyBcheckbox] = React.useState(false);
  const [studyCcheckbox, setStudyCcheckbox] = React.useState(false);
  const [studyDcheckbox, setStudyDcheckbox] = React.useState(false);
  const [studyEcheckbox, setStudyEcheckbox] = React.useState(false);

  const [yes, setYes] = React.useState(false);
  const [no, setNo] = React.useState(false);
  const [nerd, setNerd] = React.useState(false);
  const [average, setAverage] = React.useState(false);
  const [tsk, setTsk] = React.useState(false);

  const [studyState, setStudyState] = React.useState({
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
      localStorage.getItem("study") !== null &&
      localStorage.getItem("study") !== undefined &&
      localStorage.getItem("study") !== ""
    ) {
      setStudyState(JSON.parse(localStorage.getItem("study")));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("study", JSON.stringify(studyState));

    if (studyState.a.private) {
      setStudyAcheckbox(true);
    }
    if (studyState.b.private) {
      setStudyBcheckbox(true);
    }
    if (studyState.c.private) {
      setStudyCcheckbox(true);
    }
    if (studyState.d.private) {
      setStudyDcheckbox(true);
    }
    if (studyState.e.private) {
      setStudyEcheckbox(true);
    }
  }, [studyState]);

  // const [male, setMale] = React.useState(false);
  // const [female, setFemale] = React.useState(false);
  // const [other, setOther] = React.useState(false);

  const changeValue = (value) => {
    if (value === "Yes") {
      setYes(!yes);
      setNo(false);
    } else if (value === "No") {
      setNo(!no);
      setYes(false);
    }
  };

  const changeValue2 = (value) => {
    if (value === "Nerd") {
      setNerd(!nerd);
      setAverage(false);
      setTsk(false);
    } else if (value === "Average") {
      setAverage(!average);
      setNerd(false);
      setTsk(false);
    } else if (value === "Tsk") {
      setTsk(!tsk);
      setNerd(false);
      setAverage(false);
    }
  };

  const Checked = ({ value }) => {
    return (
      <div
        className="createprofile-study-body-choice-checked"
        onClick={() => {
          if (yes) {
            setStudyState({
              ...studyState,
              a: { ...studyState.a, value: "" },
            });
          } else if (no) {
            setStudyState({
              ...studyState,
              a: { ...studyState.a, value: "" },
            });
          }
          changeValue(`${value}`);
        }}
      >
        {value}
      </div>
    );
  };

  const Checked2 = ({ value }) => {
    return (
      <div
        className="createprofile-study-body-choice-checked"
        onClick={() => {
          if (nerd) {
            setStudyState({
              ...studyState,
              e: { ...studyState.e, value: "" },
            });
          } else if (average) {
            setStudyState({
              ...studyState,
              e: { ...studyState.e, value: "" },
            });
          } else if (tsk) {
            setStudyState({
              ...studyState,
              e: { ...studyState.e, value: "" },
            });
          }
          changeValue2(`${value}`);
        }}
      >
        {value}
      </div>
    );
  };

  const Unchecked = ({ value }) => {
    return (
      <div
        className="createprofile-study-body-choice-unchecked"
        onClick={() => {
          if (!yes) {
            setStudyState({
              ...studyState,
              a: { ...studyState.a, value: value },
            });
          } else if (!no) {
            setStudyState({
              ...studyState,
              a: { ...studyState.a, value: value },
            });
          }
          changeValue(`${value}`);
        }}
      >
        {value}
      </div>
    );
  };

  const Unchecked2 = ({ value }) => {
    return (
      <div
        className="createprofile-study-body-choice-unchecked"
        onClick={() => {
          if (!nerd) {
            setStudyState({
              ...studyState,
              e: { ...studyState.e, value: value },
            });
          } else if (!average) {
            setStudyState({
              ...studyState,
              e: { ...studyState.e, value: value },
            });
          } else if (!tsk) {
            setStudyState({
              ...studyState,
              e: { ...studyState.e, value: value },
            });
          }
          changeValue2(`${value}`);
        }}
      >
        {value}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="createprofile-study-header">
        <div className="createprofile-study-header-icon"></div>
        <div className="createprofile-study-header-title">Studies</div>
      </div>
      <div className="createprofile-study-body">
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genBcheckbox ? "black" : "transparent",
              backgroundImage: studyAcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setStudyState({
                ...studyState,
                a: { ...studyState.a, private: !studyState.a.private },
              });
              setStudyAcheckbox(!studyAcheckbox);
            }}
          />
          <div>
            <div className="createprofile-study-body-question">
              Are you still studying?
            </div>
            <div className="createprofile-study-body-choices">
              {yes ? <Checked value={"Yes"} /> : <Unchecked value={"Yes"} />}
              {no ? <Checked value={"No"} /> : <Unchecked value={"No"} />}
            </div>
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: studyBcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setStudyState({
                ...studyState,
                b: { ...studyState.b, private: !studyState.b.private },
              });
              setStudyBcheckbox(!studyBcheckbox);
            }}
          />
          <div>
            <div className="createprofile-study-body-question">
              {studyState.a.value === "Yes"
                ? "What is the name of the college/school you are attending?"
                : "What is the name of the college/school you went to?"}
            </div>
            <input
              className="createprofile-study-body-input"
              type="text"
              placeholder="College/School Name"
              onChange={(e) =>
                setStudyState({
                  ...studyState,
                  b: { ...studyState.b, value: e.target.value },
                })
              }
              value={studyState.b.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: studyCcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setStudyState({
                ...studyState,
                c: { ...studyState.c, private: !studyState.c.private },
              });
              setStudyCcheckbox(!studyCcheckbox);
            }}
          />
          <div>
            <div className="createprofile-study-body-question">
              {studyState.a.value === "Yes"
                ? "What is your major?"
                : "What was your major?"}
            </div>
            <input
              className="createprofile-study-body-input"
              type="text"
              placeholder="Major"
              onChange={(e) =>
                setStudyState({
                  ...studyState,
                  c: { ...studyState.c, value: e.target.value },
                })
              }
              value={studyState.c.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: studyDcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setStudyState({
                ...studyState,
                d: { ...studyState.d, private: !studyState.d.private },
              });
              setStudyDcheckbox(!studyDcheckbox);
            }}
          />
          <div>
            <div className="createprofile-study-body-question">
              What was your GPA in the previous semester/course?
            </div>
            <input
              className="createprofile-study-body-input"
              type="number"
              placeholder="GPA"
              onChange={(e) =>
                setStudyState({
                  ...studyState,
                  d: { ...studyState.d, value: e.target.value },
                })
              }
              value={studyState.d.value}
            />
          </div>
        </div>
        <div className="question">
          <div
            type="checkbox"
            className="general-a-Checkbox createprofile-general-body-checkbox"
            style={{
              // backgroundColor: genAcheckbox ? "black" : "transparent",
              backgroundImage: studyEcheckbox
                ? `url(${lockIcon})`
                : `url(${unlockIcon})`,
            }}
            onClick={() => {
              setStudyState({
                ...studyState,
                e: { ...studyState.e, private: !studyState.e.private },
              });
              setStudyEcheckbox(!studyEcheckbox);
            }}
          />
          <div>
            <div className="createprofile-study-body-question">
              What do you consider yourself?
            </div>
            <div className="createprofile-study-body-choices">
              {nerd ? (
                <Checked2 value={"Nerd"} />
              ) : (
                <Unchecked2 value={"Nerd"} />
              )}
              {average ? (
                <Checked2 value={"Average"} />
              ) : (
                <Unchecked2 value={"Average"} />
              )}
              {tsk ? <Checked2 value={"Tsk"} /> : <Unchecked2 value={"Tsk"} />}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Study;
