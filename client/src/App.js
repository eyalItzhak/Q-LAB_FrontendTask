import React from "react";
import { observer } from "mobx-react-lite";
import { Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import UsersDashboard from "./features/users/UsersDashboard";

function App() {
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Grid columns={3} divided>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <UsersDashboard />
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid>
    </Segment>
  );
}

export default observer(App);
