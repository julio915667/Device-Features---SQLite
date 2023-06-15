import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
  name: {
    fontFamily: "Inter-Medium",
    fontSize: 18,
    paddingVertical: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    paddingVertical: 10,
  },
  price: {
    fontSize: 18,
    fontFamily: "Inter-Bold",
    paddingVertical: 20,
  },
  weight: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
  },
  image: {
    width: "100%",
    height: 260,
  },
});
