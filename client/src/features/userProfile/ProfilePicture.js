import profilePicture from "../../app/image/Profile_Picture.png";
import { Grid } from "semantic-ui-react";

export default function ProfilePicture() {
  return (
    <Grid.Column width={7}>
      <h4>Profile Picture</h4>
      <img src={profilePicture} alt="Logo" />
    </Grid.Column>
  );
}
