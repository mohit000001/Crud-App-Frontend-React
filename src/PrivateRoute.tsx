import React from "react";
import { isUserLogined } from "./Utils/AuthServies";
import Login from "./Components/Login";
export default function PrivateRoute(props: any): JSX.Element {
  const [islogined, setIslogined] = React.useState(false);
  React.useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    const loginToken = window.localStorage.getItem("loginToken");
    if (loginToken) {
      const res = await isUserLogined(loginToken);
      if (res === true) {
        setIslogined(true);
      } else {
        console.log(res);
      }
    } else {
      setIslogined(false);
    }
  };
  return <>{islogined ? <props.element /> : <Login />}</>;
}
