import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import GoogleMapService from "./gooleMapService/GoogleMapService";
import ProfileGender from "./ProfileGender";
import ProfilePicture from "./ProfilePicture";
import ProfileMainData from "./ProfileMainData";


export default function ProfileDetails(props) {

  const f_name = props.userDetails.name.first;
  const l_name = props.userDetails.name.last;
  const number = props.userDetails.phone;
  const email =  props.userDetails.email;
  const myLat = parseFloat(props.userDetails.location.coordinates.latitude)
  const mylng = parseFloat(props.userDetails.location.coordinates.longitude)
  const gender = props.userDetails.gender


  return (
    <Grid>
      <Grid.Row>
        <ProfilePicture/>
      </Grid.Row>
        <ProfileMainData f_name={f_name} l_name={l_name} number={number} email={email} mode={props.mode} />
      <Grid.Row >
      <ProfileGender gender={gender}/>
      </Grid.Row>
       <Grid.Row ><GoogleMapService myLat={myLat} mylng={mylng}/> </Grid.Row> 
    </Grid>
  );

  

}

