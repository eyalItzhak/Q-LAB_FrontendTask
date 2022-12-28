import React ,{useState} from "react";
import { Table ,Button} from 'semantic-ui-react'
import DoubleClickLabel from "../../app/common/DoubleClickLabel";
import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";

export default observer(function UserTabelItem(props) {

const {name,email,phone,gender} = props.user  

const [firstName,setfirstName] = useState(name.first);
const [lastName,setLastName] = useState(name.last);
const [myEmail,setMyEmail] = useState(email);
const [myPhone,setMyPhone] = useState(phone);

const { userStore } = useStore();

const deleteMe = (event) =>{
  userStore.deleteUser(props.userId);
};

const updateMe = (event) =>{
  const parmasToUpdate = [firstName,lastName,myEmail,myPhone] //[0] firstName ,[1] lastName ,[2] myEmail, [3] myPhone
  userStore.updateUser(props.userId,parmasToUpdate);
};


//name.first
  return (
  <Table.Row>
    <Table.Cell>{props.userId +1}</Table.Cell>
    <Table.Cell><DoubleClickLabel input={firstName} setInput={setfirstName}/> </Table.Cell>
    <Table.Cell><DoubleClickLabel input={lastName} setInput={setLastName}/></Table.Cell>
    <Table.Cell><DoubleClickLabel input={myEmail} setInput={setMyEmail}/></Table.Cell>
    <Table.Cell>{<DoubleClickLabel input={myPhone} setInput={setMyPhone}/>}</Table.Cell>
    <Table.Cell>{gender}</Table.Cell>
    <Table.Cell> <Button inverted color='green' onClick={updateMe}>Update</Button></Table.Cell>
    <Table.Cell> <Button inverted color='red' onClick={deleteMe}>Delete</Button></Table.Cell>
  </Table.Row>
  );
})

