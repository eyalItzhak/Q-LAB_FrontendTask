import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
// import { observer } from "mobx-react"

// Model the application state.
export default class UserStore {
  userList = null;
  deleteList = null;

  constructor() {
    makeAutoObservable(this);
    try {
      this.deleteList = localStorage.getItem("usersDeleteList").split(",");
    } catch (err) {
      this.deleteList = [];
    }
    console.log(this.deleteList);
  }

  async loadUserList() {
    const users = await agent.getUsers();

    if (this.deleteList.length > 0) {
      const filterUser = users.filter(
        (user) => this.deleteList.includes(user.login.uuid + "") !== true
      );
      this.setUserList(filterUser);
    } else {
      this.setUserList(users);
    }
  }

  setUserList = (users) => {
    this.userList = users;
  };

  deleteUser = (index) => {
    if (index > -1) {
      // only splice array when item is found
      const user_uuid = this.userList[index].login.uuid;
      this.deleteList.push("" + user_uuid + "");
      localStorage.setItem("usersDeleteList", this.deleteList);
      this.userList.splice(index, 1); // 2nd parameter means remove one item only
    }
  };
}
