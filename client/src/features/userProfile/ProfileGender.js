import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";

import male_active from "../../app/image/Male_button.png";
import female_active from "../../app/image/Female_button.png";
import male_disable from "../../app/image/Male_button_dim.png";
import female_disable from "../../app/image/Female_button_dim.png";

export default function ProfileGender(props) {
  if (props.gender === "male")
    return (
     
        <Grid.Row >
            <h3>gender</h3>
            <img src={male_active} className="spaceObject" alt="Logo" />
            <img src={female_disable} className="spaceObject" alt="Logo" />
        </Grid.Row>
     
    );

  if (props.gender === "female")
    return (
      <Grid.Row >
      <h3>gender</h3>
          <img src={male_disable} alt="Logo" className="spaceObject" />
          <img src={female_active} alt="Logo" className="spaceObject" />
      </Grid.Row>
    );
}
