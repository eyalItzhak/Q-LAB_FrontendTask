import React from "react";
import { observer } from "mobx-react-lite";
import { Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { Outlet, useLocation, Link } from "react-router-dom";

function App() {
  const location = useLocation();
  if (location.pathname === "/") {
    return (
      <Segment inverted textAlign="center" vertical className="masthead">
        <h1>welcome!</h1>
        <h1>please go to users page </h1>
        <Button size="massive" as={Link} to="/users" positive content="users" />
      </Segment>
    );
  }

  return <Outlet />;
}

export default observer(App);
