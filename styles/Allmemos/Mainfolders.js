import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(30, height),
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#1B223E",
      borderRadius: 15,
      flexDirection: "row",

      padding: 10,
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
    },
    memosiconbody: {
      height: getPercent(6, height),
      width: getPercent(6, height),
      borderRadius: 100,
      backgroundColor: "#FF8C00",
      marginBottom: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    memostitle: {
      fontFamily: "SemiBold",
      fontSize: rf(13),
      color: "#fff",
    },
    navigationdots: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
    },
    dot: {
      height: 6,
      width: 6,
      borderRadius: 100,
      backgroundColor: "#fff",
      marginHorizontal: 5,
    },
  });
