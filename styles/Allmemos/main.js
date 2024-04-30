import { Platform, StatusBar, StyleSheet } from "react-native";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { getPercent } from "../../middleware";

//container Styles starts here
export const styles = ({ width, height }) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#070B1B",
    },
    lablewrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      justifyContent: "space-between",
      height: getPercent(8, height),
      // paddingBottom: 10,
    },
    title: {
      fontFamily: "SemiBold",
      fontSize: 14,
      fontWeight: "600",
      color: "#fff",
    },
    seealltext: {
      fontFamily: "SemiBold",
      fontSize: 12,
      color: "#FB7655",
      fontWeight: "600",
    },
    searchbarwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(12, height),
      // marginVertical: 24,
      justifyContent: "space-between",
    },
    searchbarbody: {
      // height: getPercent(5.5, height),
      height: 40,
      width: getPercent(78, width),
      // width: 295,
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: "#1B223E",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      width: "90%",
      fontFamily: "Medium",
      fontSize: 14,
      fontWeight: "500",
      color: "#fff",
      marginLeft: 5,
    },
    sertiniconbody: {
      height: getPercent(4.5, height),
      width: getPercent(4.5, height),
      // height: 32,
      // width: 32,
      justifyContent: "center",
      alignItems: "center",
    },
  });
