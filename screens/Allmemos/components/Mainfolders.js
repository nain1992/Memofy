import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Allmemos/Mainfolders";
import { getPercent } from "../../../middleware";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const Mainfolders = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [active, setactive] = useState();

  let memonsicon = [
    {
      icon: require("../../../assets/14.png"),
      title: "All Memos",
      backgroundColor: "#FF8C00",
    },
    {
      icon: require("../../../assets/14.png"),
      title: "All Memos",
      backgroundColor: "#8A58CF",
    },
    {
      icon: require("../../../assets/14.png"),
      title: "All Memos",
      backgroundColor: "#FB7655",
    },
    {
      icon: require("../../../assets/14.png"),
      title: "All Memos",
      backgroundColor: "#8C6C00",
    },
    {
      icon: require("../../../assets/14.png"),
      title: "All Memos",
      backgroundColor: "#DC38BC",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal pagingEnabled>
        <View style={styles.contentcontainer}>
          <TouchableOpacity style={styles.memosbody}>
            <View style={styles.iconbody}>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "rgba(251, 118, 85, 1)",
                  "rgba(220, 56, 188, 1)",
                  "rgba(138, 88, 207, 1)",
                ]}
                style={styles.background}
              />
              <Image
                source={require("../../../assets/1.png")}
                style={{ height: "60%", width: "60%" }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.memostxt,
                {
                  color: "#FB7655",
                },
              ]}
            >
              All Memos
            </Text>
          </TouchableOpacity>
          {memonsicon?.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.memosbody}>
                <View
                  style={[
                    styles.iconbody,
                    { backgroundColor: item?.backgroundColor },
                  ]}
                >
                  <Image
                    source={item?.icon}
                    style={{ height: "60%", width: "60%" }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.memostxt}>{item?.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.other}>
          <TouchableOpacity style={styles.memosbody}>
            <View style={styles.iconbody}>
              <LinearGradient
                // Background Linear Gradient
                colors={[
                  "rgba(251, 118, 85, 1)",
                  "rgba(220, 56, 188, 1)",
                  "rgba(138, 88, 207, 1)",
                ]}
                style={styles.background}
              />
              <Image
                source={require("../../../assets/1.png")}
                style={{ height: "60%", width: "60%" }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={[
                styles.memostxt,
                {
                  color: "#FB7655",
                },
              ]}
            >
              All Memos
            </Text>
          </TouchableOpacity>
          {memonsicon?.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.memosbody}>
                <View
                  style={[
                    styles.iconbody,
                    { backgroundColor: item?.backgroundColor },
                  ]}
                >
                  <Image
                    source={item?.icon}
                    style={{ height: "60%", width: "60%" }}
                    resizeMode="contain"
                  />
                </View>
                <Text style={styles.memostxt}>{item?.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.dotswrapper}>
        <View style={styles.dot}></View>
        <View style={styles.activedot}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Mainfolders);
