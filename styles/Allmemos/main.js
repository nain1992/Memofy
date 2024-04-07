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
    },
    title: {
      fontFamily: "SemiBold",
      fontSize: rf(15),
      color: "#fff",
    },
    seealltext: {
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#FB7655",
    },
    searchbarwrapper: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: getPercent(5, width),
      height: getPercent(12, height),
      justifyContent: "space-between",
    },
    searchbarbody: {
      height: getPercent(6, height),
      width: getPercent(75, width),
      borderRadius: 10,
      paddingLeft: 10,
      backgroundColor: "#1B223E",
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      width: "100%",
      fontFamily: "Regular",
      fontSize: rf(12),
      color: "#fff",
      marginLeft: 5,
    },
    sertiniconbody: {
      height: getPercent(5, height),
      width: getPercent(5, height),
      justifyContent: "center",
      alignItems: "center",
    },
  });
