import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 13,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Inter-Regular",
    color: COLORS.text,
    paddingVertical: 5,
  },
  errorContainer: {
    flex: 1,
    marginVertical: 5,
  },
  errorMessage: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    paddingVertical: 5,
    color: COLORS.brightRed,
  },
});
