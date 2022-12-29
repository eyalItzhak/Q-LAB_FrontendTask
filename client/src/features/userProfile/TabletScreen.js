import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./profileStyle.css";
import ProfileDetails from "./ProfileDetails";
import logo from "../../app/image/Logo.png";

export default function TabletScreen(props) {
const userInfo = props.userInfo;

  return (
    <Grid>
         <Grid.Row className="zone2tablet">
             <img className="logoPhotoTablet" src={logo} alt="Logo" />
         </Grid.Row>
        <Grid.Row className="zone1tablet">
            <div className="profileHeader">
            <h1 className="brownHeader">My Profile</h1>
            <ProfileDetails userDetails={userInfo} mode={"tablet"} />
          </div>
        </Grid.Row>

       
    </Grid>
  );
}
