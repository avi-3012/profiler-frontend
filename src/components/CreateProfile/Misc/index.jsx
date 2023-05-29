import React from "react";
import "./style.css";

const index = () => {
  return (
    <React.Fragment>
      <div className="createprofile-misc"></div>
      <div className="createprofile-misc-body">
        1. All the fields are optional.
        <br />
        2. You can toggle the privacy of each field by clicking on the lock
        icon. <br />
        3. All of these information can be modified later through the profile
        section. <br />
        4. Though, we recommend you to fill all the fields as these information
        will determine your "Trust" score.
        <br />
        5. Verification will be done later through the profile section.
      </div>
    </React.Fragment>
  );
};

export default index;
