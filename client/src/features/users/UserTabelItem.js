import React from "react";
import { Table ,Button} from 'semantic-ui-react'

function UserTabelItem(props) {

  const {name,email,phone,gender} = props.user  
  

  return (
  <Table.Row>
    <Table.Cell>{props.userId}</Table.Cell>
    <Table.Cell>{name.first}</Table.Cell>
    <Table.Cell>{name.last}</Table.Cell>
    <Table.Cell>{email}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>{gender}</Table.Cell>
    <Table.Cell> <Button inverted color='green'>Update</Button></Table.Cell>
    <Table.Cell> <Button inverted color='red'>Delete</Button></Table.Cell>
  </Table.Row>
  );
}

export default UserTabelItem;