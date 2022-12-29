import React, { useEffect, useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { useStore } from "../../app/stores/store";
import { useParams } from "react-router-dom";
import useWindowDimensions from "../../app/common/useWindowDimensions";
import WideScreen from "./WideScreen";
import TabletScreen from "./TabletScreen";
import MobileScreen from "./MobileScreen.js";
import { observer } from "mobx-react-lite";

export default observer(function UsersDashboard() {
  const { userStore } = useStore();
  const { uuid } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    setUserInfo(userStore.getUserbyUuid(uuid));
  }, [setUserInfo, uuid, userStore.userList,userStore]);


  if (!userInfo && userStore.userList.length >= 1) {
    return <h1>user not found!</h1>;
  }  

  if (!userInfo) {
      userStore.loadUserList();
      return <div>User Store loading</div>;
  }

  if (width >= 768) return <WideScreen userInfo={userInfo} />;

  if (width <= 425) return <MobileScreen userInfo={userInfo} />;

  return <TabletScreen userInfo={userInfo} />;
});
