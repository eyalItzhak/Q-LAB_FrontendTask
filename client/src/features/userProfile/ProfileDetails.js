import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import male_active from  "../../app/image/Male_button.png"
import female_active from "../../app/image/Female_button.png"
import profilePicture from "../../app/image/Profile_Picture.png"
import GoogleMapService from "./gooleMapService/GoogleMapService";

export default function ProfileDetails() {
  const f_name = "eyal";
  const l_name = "Itzhak";
  const number = "10231342";
  const email = "asdasd@asd.com";

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={7}>
          <h3>profile pictur</h3>
          <img src={profilePicture} alt="Logo" />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={7}>
          <h3>First name</h3>
          <input type="text" className="sort" value={"asd"} onChange={()=>(console.log("somting"))} />
        </Grid.Column>
        <Grid.Column width={3}>
          <h3>Last Name</h3>
          <input type="text" className="sort" value={"  asd"} onChange={()=>(console.log("somting"))} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={7}>
          <h3>email</h3>
          <input type="text" className="long" value={"  asd"} onChange={()=>(console.log("somting"))} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={7}>
          <h3>phone</h3>
          <input type="text" className="long" value={"  asd"} onChange={()=>(console.log("somting"))} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
            <Grid.Column width={7}>
                <div>gender</div>
                <img src={male_active} alt="Logo" />
                <img src={female_active} alt="Logo" />
            </Grid.Column>
      </Grid.Row>
       <Grid.Row><GoogleMapService/> </Grid.Row> 
        

    </Grid>
  );
}
