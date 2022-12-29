import { Grid } from "semantic-ui-react";
import UserInput from "../../app/common/UserInput";


export default function ProfileMainData(props) {

  if(props.mode === "pc")
  return (
    <>
      <Grid.Row>
        <Grid.Column width={8}>
          <h3>First name</h3>
          <UserInput info={props.f_name} type={"short"} />
        </Grid.Column>
        <Grid.Column width={8}>
          <h3>Last Name</h3>
          <UserInput info={props.l_name} type={"short"} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <h3>email</h3>
          <UserInput info={props.email} type={"long"} mailIcon={true} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={16}>
          <h3>phone</h3>
          <UserInput info={props.number} type={"long"} phoneIcon={true} />
        </Grid.Column>
      </Grid.Row>
    </>
  );

  if(props.mode === "tablet")
  return (
    <>
      <Grid.Row>
        <Grid.Column width={7}>
          <h3>First name</h3>
          <UserInput info={props.f_name} type={"short"} />
        </Grid.Column>
        <Grid.Column width={7}>
          <h3>Last Name</h3>
          <UserInput info={props.number} type={"short"} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={7}>
          <h3>Email</h3>
          <UserInput info={props.email} type={"short"} />
        </Grid.Column>
        <Grid.Column width={7}>
          <h3>phone</h3>
          <UserInput info={props.number} type={"short"} />
        </Grid.Column>
      </Grid.Row>
    </>
  );


  
  if(props.mode === "phone")
  return (
    <>
     <Grid.Row>
        <Grid.Column width={15}>
          <h3>first name</h3>
          <UserInput info={props.f_name} type={"long"}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={15}>
          <h3>phone</h3>
          <UserInput info={props.l_name} type={"long"} phoneIcon={true} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column  width={15}>
          <h3>email</h3>
          <UserInput info={props.email} type={"long"} mailIcon={true} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column width={15}>
          <h3>phone</h3>
          <UserInput info={props.number} type={"long"} phoneIcon={true} />
        </Grid.Column>
      </Grid.Row>
    </>
  );

}
