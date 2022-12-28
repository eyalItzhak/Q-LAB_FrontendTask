import {createContext, useContext} from "react";
import UserStore from "./UsersStore";

// import { observer } from "mobx-react"

// Model the application state.
export const store = {
    userStore: new UserStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}