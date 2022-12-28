import React, { useEffect,useState } from "react";
// import { observer } from "mobx-react-lite";
 import {Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useStore } from "../../app/stores/store";
import { useParams } from 'react-router-dom';
import './profileStyle.css'
import ProfileDetails from "./ProfileDetails";

export default function UsersDashboard() {
  const { userStore } = useStore();
  const { uuid } = useParams()
  const [userInfo,setUserInfo] = useState(null)

  useEffect(() => {
    setUserInfo(userStore.getUserbyUuid(uuid));
  },[setUserInfo,uuid,userStore])

  if(!userInfo){
    return<h1>user not found!</h1>
  }
  return (       
      <Grid >
          <Grid.Row>
          <Grid.Column width={8} className="zone1" >
            <div className="profileHeader">
              <h1 className="brownHeader">My Profile</h1>
              <ProfileDetails/>
            </div>
          </Grid.Column>
          <Grid.Column width={8} className="zone2"></Grid.Column>
          </Grid.Row>
      </Grid>
    );
};
