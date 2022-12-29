import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./profileStyle.css";
import ProfileDetails from "./ProfileDetails";
import logo from "../../app/image/Logo.png";

export default function MobileScreen(props) {
  const userInfo = props.userInfo;

  return (
    <Grid width={8}>
      <Grid.Row className="zone2Phone">
        <img className="logoPhotoMobile" src={logo} alt="Logo" />
      </Grid.Row>

      <Grid.Row className="zone1tablet">
        <div className="profileHeader">
          <h1 className="brownHeader">My Profile</h1>
          <ProfileDetails userDetails={userInfo} mode={"phone"} />
        </div>
      </Grid.Row>
    </Grid>
  );
}
