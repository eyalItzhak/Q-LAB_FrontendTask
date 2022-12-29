import React, { useState } from "react";
import { Button, Table } from "semantic-ui-react";
import DoubleClickLabel from "../../app/common/DoubleClickLabel";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { Link } from "react-router-dom";

export default observer(function UserTabelItem(props) {
  const { name, email, phone, gender, login } = props.user;

  const [firstName, setfirstName] = useState(name.first);
  const [lastName, setLastName] = useState(name.last);
  const [myEmail, setMyEmail] = useState(email);
  const [myPhone, setMyPhone] = useState(phone);

  const [loading, setloading] = useState(false);

  const { userStore } = useStore();

  const deleteMe = (event) => {
    userStore.deleteUser(props.userId);
  };

  const updateMe = (event) => {
    updateAnimation();
    const parmasToUpdate = [firstName, lastName, myEmail, myPhone]; //[0] firstName ,[1] lastName ,[2] myEmail, [3] myPhone
    userStore.updateUser(props.userId, parmasToUpdate);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const updateAnimation = async () => {
    setloading(true);
    await delay(2000);
    setloading(false);
  };

  //name.first
  return (
    <Table.Row>
      <Table.Cell textAlign="center">
        {
          <Button as={Link} to={`/users/${login.uuid} `}>
            {props.userId + 1}
          </Button>
        }
      </Table.Cell>
      <Table.Cell>
        <DoubleClickLabel input={firstName} setInput={setfirstName} />{" "}
      </Table.Cell>
      <Table.Cell>
        <DoubleClickLabel input={lastName} setInput={setLastName} />
      </Table.Cell>
      <Table.Cell>
        <DoubleClickLabel input={myEmail} setInput={setMyEmail} />
      </Table.Cell>
      <Table.Cell>
        {<DoubleClickLabel input={myPhone} setInput={setMyPhone} />}
      </Table.Cell>
      <Table.Cell>{gender}</Table.Cell>
      {!loading && (
        <Table.Cell>
          {" "}
          <Button inverted color="green" onClick={updateMe}>
            Update
          </Button>
        </Table.Cell>
      )}
      {loading && (
        <Table.Cell>
          {" "}
          <Button inverted color="green" loading>
            Update
          </Button>
        </Table.Cell>
      )}
      <Table.Cell>
        {" "}
        <Button inverted color="red" onClick={deleteMe}>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  );
});
