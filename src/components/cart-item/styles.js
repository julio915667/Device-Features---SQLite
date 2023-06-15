import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: COLORS.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginHorizontal: 10,
    marginVertical: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: "Inter-Regular",
    color: COLORS.text,
    marginBottom: 5,
  },
  bodyContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  quantity: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    color: COLORS.text,
    marginBottom: 5,
  },name:{
    fontSize: 13,
    fontFamily: "Inter-Regular",
    color: COLORS.text,
    marginBottom: 5,
  },
  price: {
    fontSize: 15,
    fontFamily: "Inter-Bold",
    color: COLORS.text,
    marginBottom: 5,
  },
});
