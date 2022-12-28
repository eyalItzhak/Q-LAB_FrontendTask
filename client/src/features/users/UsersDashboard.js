import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Table } from "semantic-ui-react";
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

  const usersData = userStore.userList;

  useEffect(() => {
    if (!usersData) {
      userStore.loadUserList();
    }
  }, [userStore,usersData]);

  if (!usersData) {
    return <>loading</>;
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          {categories.map((opt) => (
            <Table.HeaderCell key={opt}>{opt}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {usersData.map((user, index) => (
          <UserTabelItem key={index} user={user} userId={index + 1} />
        ))}
      </Table.Body>
    </Table>
  );
});
