import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
// import { observer } from "mobx-react"

// Model the application state.
export default class UserStore {
  userList = null;
  userLoad = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadUserList() {
    const users = await agent.getUsers();
    this.setUserList(users);
  }

  setUserList = (users) => {
    this.userList = users;
  };

//   setUserLoad = (state) => {
//     this.userList = state;
//   };

  foo = () =>{
    console.log(this.userList)
  }
}
