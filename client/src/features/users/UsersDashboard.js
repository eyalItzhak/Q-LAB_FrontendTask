import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Table, Dropdown, Grid, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useStore } from "../../app/stores/store";
import UserTabelItem from "./UserTabelItem";

export default observer(function UsersDashboard() {
  const { userStore } = useStore();
  const categories = [
    "sn",
    "First Name",
    "Last Name",
    "Email",
    "Phone",
    "Gender",
    "Update",
    "Delete",
  ];

  const options = [
    { key: 1, text: "10", value: 10 },
    { key: 2, text: "20", value: 20 },
    { key: 3, text: "50", value: 50 },
    { key: 4, text: "100", value: 100 },
  ];

  const handlePageSize = (e, data) => {
    userStore.setPageSize(data.value);
  };

  const usersData = userStore.userList;

  useEffect(() => {
    if (usersData.length === 0) {
      userStore.loadUserList();
    }
  }, [userStore, usersData]);

  if (!usersData) {
    return <>loading</>;
  }

  return (
    <Grid columns={3}>
      <Grid.Row width={1} />
      <Grid.Row width={2}>
        <Grid.Column width={1} />
        <Grid.Column width={14}>
          <Table celled inverted>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="8">
                  <Menu floated="right" pagination>
                    <Dropdown
                      text={userStore.pageSize.toString()}
                      options={options}
                      simple
                      item
                      onChange={handlePageSize}
                    />
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Header>
              <Table.Row>
                {categories.map((opt) => (
                  <Table.HeaderCell key={opt}>{opt}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {usersData.map((user, index) => (
                <UserTabelItem
                  key={user.login.uuid}
                  user={user}
                  userId={index}
                />
              ))}
            </Table.Body>

          </Table>
        </Grid.Column>
        <Grid.Column width={1} />
      </Grid.Row>
    </Grid>
  );
});
