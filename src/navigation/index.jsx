import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";

const Navigation = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default Navigation;
