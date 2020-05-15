import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  bar: { paddingTop: Constants.statusBarHeight },
  heading: {
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  box: { margin: 10, borderRadius: 10, padding: 20, borderWidth: 2 },
  button: { margin: 10, width: "50%", alignSelf: "center" },
  blue: { borderColor: "blue", color: "blue", textAlign: "center" },
  red: { borderColor: "red", color: "red", textAlign: "center" },
  inputBox: { borderWidth: 5 },
});
