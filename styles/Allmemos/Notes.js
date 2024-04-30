import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//Styles Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      height: getPercent(27, height),
      // height: 195,
      width: getPercent(90, width),
      alignSelf: "center",
      backgroundColor: "#1B223E",
      borderRadius: 10,
      justifyContent: "space-around",
      padding: 10,
      marginVertical: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    titleimagewrapper: {
      flexDirection: "row",
      alignItems: "center",
      // marginVertical: 4,
      // justifyContent: "space-between",
    },
    imagebody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      borderRadius: 100,
    },
    notestitle: {
      fontFamily: "SemiBold",
      fontSize: 18,
      fontWeight: "600",
      color: "#F2FDFF",
      marginLeft: 10,
    },
    foldertext: {
      fontFamily: "Medium",
      fontSize: 12,
      fontWeight: "500",
      color: "#E360C9",
    },
    timetext: {
      fontFamily: "Medium",
      fontSize: 12,
      fontWeight: "500",
      color: "#8C9AAE",
    },
    descriptiontext: {
      fontFamily: "Regular",
      fontSize: 12,
      fontWeight: "400",
      color: "#BEC3CA",
    },
    playbtnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      height: getPercent(6, height),
      // height: 45,
      width: getPercent(84, width),
      // width: 300,
      borderRadius: 90,
      paddingHorizontal: 10,
      justifyContent: "space-between",
      overflow: "hidden",
      alignSelf: "center",
      // backgroundColor: "#0F1322",
    },
    background: {
      position: "absolute",
      height: "100%",
      width: getPercent(84, width),
    },
    btnbackground: {
      height: "100%",
      width: "100%",
      // position: "absolute",

      borderRadius: 100,
    },
    pausebtn: {
      height: 30,
      width: 30,
      // height: getPercent(4, height),
      // width: getPercent(4, height),
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#fff",
    },
    playbtnbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),

      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    audiowavebody: {
      height: "90%",
      width: "70%",
      overflow: "hidden",
    },
    audiotime: {
      fontFamily: "Regular",
      fontSize: 10,
      fontWeight: "400",
      color: "#EAECEE",
      marginLeft: 10,
    },
    syncbtnbody: {
      height: getPercent(3.5, height),
      position: "absolute",
      right: -5,
      top: -8,
      // height: 15,
      width: getPercent(22, width),
      // width: 66,
      borderRadius: 5,
      backgroundColor: "#rgba(35, 88, 37, 1)",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    synctext: {
      fontFamily: "SemiBold",
      fontSize: 12,
      color: "#53D258",
      fontWeight: "600",
    },
  });
