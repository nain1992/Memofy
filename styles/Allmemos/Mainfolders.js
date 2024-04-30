import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      width: getPercent(90, width),
      alignSelf: "center",
      borderRadius: 10,
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "center",
      alignItems: "center",
      backgroundColor: "#1B223E",
      // height: getPercent(28, height),
      height: 200,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    contentcontainer: {
      height: getPercent(26, height),
      width: getPercent(90, width),
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      padding: 5,
    },
    background: {
      height: "100%",
      width: "100%",
      position: "absolute",
      borderRadius: 100,
    },
    other: {
      height: getPercent(28, height),
      width: getPercent(90, width),
      backgroundColor: "#1B223E",
      flexDirection: "row",
      flexWrap: "wrap",
      borderRadius: 10,
      justifyContent: "space-evenly",
      padding: 5,

      alignItems: "center",
      // marginHorizontal: 10,
    },
    memosbody: {
      alignItems: "center",

      margin: 12,
      // marginTop: 10,
    },
    iconbody: {
      // height: 40,
      // width: 40,
      height: getPercent(5.5, height),
      width: getPercent(5.5, height),
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      // overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    memostxt: {
      fontFamily: "Regular",
      fontSize: 14,
      fontWeight: "600",
      color: "#fff",
      marginTop: 5,
    },
    dotswrapper: {
      flexDirection: "row",
      alignItems: "center",
      alignSelf: "center",
      marginBottom: 12,
    },
    dot: {
      height: 6,
      width: 6,
      borderRadius: 10,
      backgroundColor: "#rgba(255, 255, 255, 1)",
      marginHorizontal: 0,
    },
    activedot: {
      height: 6,
      width: 16,
      borderRadius: 10,
      backgroundColor: "#rgba(61, 43, 226, 1)",
      marginHorizontal: 4,
    },
  });
