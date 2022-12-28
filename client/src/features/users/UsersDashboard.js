import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Table, Menu, Dropdown } from "semantic-ui-react";
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
    if (!usersData) {
      userStore.loadUserList();
    }
  }, [userStore, usersData]);

  if (!usersData) {
    return <>loading</>;
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row></Table.Row>
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
          <UserTabelItem key={user.login.uuid} user={user} userId={index} />
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="8">
            <Menu floated="right" pagination>
              <Menu.Item>
                <Dropdown
                  text="Page Size"
                  options={options}
                  simple
                  item
                  onChange={handlePageSize}
                />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
});
