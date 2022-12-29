import { makeAutoObservable } from "mobx";
import agent from "../api/agent";

// Model the application state.
export default class UserStore {
  userList = []; //the users of the table

  deleteList = []; //List of deleted users
  updateUsersList = []; //List of modify users + parameters

  pageSize=10; //Page size of the table



  constructor() {
    makeAutoObservable(this);

    //load or init deleted/modify users from localStorage and update store
    try {
      this.deleteList = localStorage.getItem("usersDeleteList").split(",");
    } catch (err) {
      console.log("no usersDeleteList saved id localStorage");
    }


    try {
      this.updateUsersList = JSON.parse(
        localStorage.getItem("usersUpdateList").split(",")
      );
    } catch (err) {
      console.log("no usersUpdateList saved in localStorage");
    }

   
      const lastPageSize  = Number(localStorage.getItem("lastPageSize"))
      if(lastPageSize!==0){
        this.pageSize = lastPageSize; //defualt
      }
  }

  //load users
  async loadUserList() {
    let users = await agent.getUsers(this.pageSize + this.deleteList.length); //get list of users from randomuser //get extra users for display a Table of size "pageSize"

    if (this.deleteList.length > 0) {  //filter non-existent users
      users = users.filter(
        (user) => this.deleteList.includes(user.login.uuid + "") !== true
      );
    }
                                       
    if (this.updateUsersList.length > 0) {  //Changing previously modified items
      this.updateUsersList.forEach((modfie) => {
        const userIndex = users.findIndex(
          (user) => user.login.uuid + "" === modfie.uuid + ""
        );

        if (userIndex !== -1) {
          users[userIndex].name.first = modfie.first;
          users[userIndex].name.last = modfie.last;
          users[userIndex].email = modfie.email;
          users[userIndex].phone = modfie.myPhone;
        }
      });
    }

    users = users.slice(0,this.pageSize); //Clearing extra users from the list if it is greater than pageSize
    this.setUserList(users); //set users
  }

  setUserList = (users) => { //set table
    this.userList = users;
  };

  setPageSize = (pageSize) => { //handle pageSize change
    this.pageSize = pageSize;
    this.loadUserList();
    localStorage.setItem("lastPageSize", this.pageSize);
  };



  // delete User from tabel
  deleteUser = (index) => {
    if (index > -1) {
      // only splice array when item is found
      const user_uuid = this.userList[index].login.uuid;
      this.deleteList.push("" + user_uuid + "");
      localStorage.setItem("usersDeleteList", this.deleteList);
      this.userList.splice(index, 1);
    }
  };

  //handle case when user is modify
  updateUser = (index, parmas) => {
    //[0] firstName ,[1] lastName ,[2] myEmail, [3] myPhone
    if (index > -1) {
      const user_uuid = this.userList[index].login.uuid; //key
      const updateinfo = {
        uuid: user_uuid,
        first: parmas[0],
        last: parmas[1],
        email: parmas[2],
        myPhone: parmas[3],
      };

      let inx_userUpdateList = this.updateUsersList.findIndex(
        (user) => user.uuid + "" === updateinfo.uuid
      );

      if (inx_userUpdateList !== -1) {
        this.updateUsersList.splice(inx_userUpdateList, 1);
      }
      this.updateUsersList.push(updateinfo);

      localStorage.setItem(
        "usersUpdateList",
        JSON.stringify(this.updateUsersList)
      );

    }
  };

  //get user by his uniq info.
  getUserbyUuid(uuid) {
    try {
      return this.userList.find((user) => user.login.uuid === uuid);
    } catch (err) {
      return null; //if user not in the list return null;
    }
  }
}
