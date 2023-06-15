import { StyleSheet } from "react-native";

import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 35,
  },
  label: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
    paddingVertical: 5,
    color: COLORS.text,
  },
  subLabel: {
    fontSize: 12,
    fontFamily: "Inter-Regular",
    paddingVertical: 5,
    color: COLORS.text,
  },
});
