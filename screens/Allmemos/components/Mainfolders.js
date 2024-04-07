import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Allmemos/Mainfolders";
import { getPercent } from "../../../middleware";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Mainfolders = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  let memosdata = [
    {
      image: require("../../../assets/1.png"),
      title: "All Memos",
      backgroundColor: "rgba(251, 118, 85, 1)",
    },
    {
      image: require("../../../assets/1.png"),
      title: "All Memos",
      backgroundColor: "#FF8C00",
    },
    {
      image: require("../../../assets/1.png"),
      title: "All Memos",
      backgroundColor: "#8A58CF",
    },
    {
      image: require("../../../assets/1.png"),
      title: "All Memos",
      backgroundColor: "#FB7655",
    },
    {
      image: require("../../../assets/1.png"),
      title: "All Memos",
      backgroundColor: "#8C6C00",
    },
    {
      image: require("../../../assets/1.png"),
      title: "All Memos",
      backgroundColor: "#DC38BC",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <KeyboardAwareScrollView horizontal pagingEnabled> */}
      {memosdata?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              alignItems: "center",
              marginVertical: 10,
              marginHorizontal: getPercent(5, width),
            }}
          >
            <View
              style={[
                styles.memosiconbody,
                {
                  backgroundColor: item?.backgroundColor,
                },
              ]}
            >
              <Image
                source={item?.image}
                style={{ height: "50%", width: "50%" }}
              />
            </View>
            <Text style={styles.memostitle}>{item?.title}</Text>
          </TouchableOpacity>
        );
      })}
      {/* </KeyboardAwareScrollView> */}
      <View style={styles.navigationdots}>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Mainfolders);
