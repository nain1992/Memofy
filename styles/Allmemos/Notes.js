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
      justifyContent: "space-around",
      padding: 10,
      marginVertical: 5,
    },
    titleimagewrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 4,
      justifyContent: "space-between",
    },
    imagebody: {
      height: 20,
      width: 20,
      overflow: "hidden",
      borderRadius: 100,
    },
    notestitle: {
      fontFamily: "SemiBold",
      fontSize: rf(15),
      color: "#fff",
      marginLeft: 10,
    },
    foldertext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#E360C9",
    },
    timetext: {
      fontFamily: "Regular",
      fontSize: rf(11),
      color: "#EAECEE",
      marginLeft: 10,
    },
    descriptiontext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#BEC3CA",
    },
    playbtnwrapper: {
      flexDirection: "row",
      alignItems: "center",
      height: getPercent(6, height),
      width: getPercent(80, width),
      borderRadius: 100,
      paddingHorizontal: 10,
      justifyContent: "space-between",
      overflow: "hidden",
      alignSelf: "center",
    },
    background: {
      position: "absolute",
      height: "100%",
      width: getPercent(80, width),
    },
    playbtnbody: {
      height: getPercent(4, height),
      width: getPercent(4, height),
      backgroundColor: "#fff",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    audiowavebody: {
      height: "90%",
      width: "65%",
      overflow: "hidden",
    },
    audiotime: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: "#EAECEE",
      marginLeft: 10,
    },
    syncbtnbody: {
      height: getPercent(4, height),
      width: getPercent(20, width),
      borderRadius: 5,
      backgroundColor: "rgba(35, 88, 37, 1)",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
    synctext: {
      fontFamily: "Regular",
      fontSize: rf(10),
      color: "#53D258",
    },
  });
