import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
// import { observer } from "mobx-react"

// Model the application state.
export default class UserStore {
  userList = null; //all active user

  deleteList = null; //list of index of deleted users
  updateUsersList = null; //info about updated users

  pageSize = 10;

  constructor() {
    makeAutoObservable(this);
    try {
      this.deleteList = localStorage.getItem("usersDeleteList").split(",");
    } catch (err) {
      this.deleteList = [];
    }

    try {
      this.updateUsersList = JSON.parse(
        localStorage.getItem("usersUpdateList").split(",")
      );
    } catch (err) {
      this.updateUsersList = [];
    }
  }

  async loadUserList() {
    let users = await agent.getUsers(this.pageSize + this.deleteList.length);

    if (this.deleteList.length > 0) {
      users = users.filter(
        (user) => this.deleteList.includes(user.login.uuid + "") !== true
      );
    }

    if (this.updateUsersList.length > 0) {
      this.updateUsersList.forEach((modfie) => {
        const userIndex = users.findIndex(
          (user) => user.login.uuid + "" === modfie.uuid + ""
        );
        console.log(userIndex);
        if (userIndex !== -1) {
          users[userIndex].name.first = modfie.first;
          users[userIndex].name.last = modfie.last;
          users[userIndex].email = modfie.email;
          users[userIndex].phone = modfie.myPhone;
        }
      });
    }
    users = users.slice(users);
    this.setUserList(users);
  }

  setUserList = (users) => {
    console.log(users[4].name.first);
    this.userList = users;
    console.log(this.userList[4].name.first);
  };

  setPageSize = (pageSize) => {
    this.pageSize = pageSize;
    this.loadUserList();
  };

  deleteUser = (index) => {
    if (index > -1) {
      // only splice array when item is found
      const user_uuid = this.userList[index].login.uuid;
      this.deleteList.push("" + user_uuid + "");
      localStorage.setItem("usersDeleteList", this.deleteList);
      this.userList.splice(index, 1);
    }
  };

  updateUser = (index, parmas) => {
    //[0] firstName ,[1] lastName ,[2] myEmail, [3] myPhone
    if (index > -1) {
      const user_uuid = this.userList[index].login.uuid; //key
      const updateinfo = {
        //update selcted user
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

  getUserbyUuid(uuid) {
    try {
      return this.userList.find((user) => user.login.uuid === uuid);
    } catch (err) {
      return null; //if user not in the list return null;
    }
  }
}
