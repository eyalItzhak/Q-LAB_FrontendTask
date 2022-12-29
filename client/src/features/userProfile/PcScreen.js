import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./profileStyle.css";
import ProfileDetails from "./ProfileDetails";
import logo from "../../app/image/Logo.png";

export default function PcScreen(props) {
const userInfo = props.userInfo;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8} className="zone1pc">
          <div className="profileHeader">
            <h1 className="brownHeader">My Profile</h1>
            <ProfileDetails userDetails={userInfo} mode={"pc"} />
          </div>
        </Grid.Column>
        <Grid.Column width={8} className="zone2pc">
          <img className="logoPhotoPC" src={logo} alt="Logo" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
