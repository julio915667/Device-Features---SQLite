import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  footerContainer: {
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.primary,
    borderTopWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonConfirm: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonConfirmText: {
    color: COLORS.text,
    fontFamily: "Inter-Medium",
    fontSize: 14,
  },
  totalContainer: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  totalText: {
    color: COLORS.text,
    fontFamily: "Inter-Medium",
    fontSize: 14,
  },
  totalPrice: {
    color: COLORS.text,
    fontFamily: "Inter-Bold",
    fontSize: 15,
  },
});
