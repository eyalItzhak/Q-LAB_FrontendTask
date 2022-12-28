import React from "react";
import { observer } from "mobx-react-lite";
import { Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Grid,Button } from "semantic-ui-react";
import { Outlet, useLocation, Link} from 'react-router-dom';


function App() {
  const location = useLocation();
  if(location.pathname=== '/'){ 
    return(
    <Segment inverted textAlign="center" vertical className="masthead">
      <h1>welcome!</h1>
      <h1>please go to users page </h1>
      <Button size='massive' as={Link} to='/users' positive content='users' />
    </Segment>)
  } 
  
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Grid columns={3} divided>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
         <Outlet />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    </Segment>
  );
}

export default observer(App);
