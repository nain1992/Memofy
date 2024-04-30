import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../../styles/Allmemos/Notes";
import { getPercent } from "../../../middleware";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Mainfolders = (props) => {
  let { syncbtn } = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  const [toggleplay, settToggleplay] = useState(true);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.titleimagewrapper,
          {
            justifyContent: "space-between",
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.imagebody}>
            <Image
              source={require("../../../assets/3.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.notestitle}>Our Work Notes</Text>
        </View>
        {syncbtn ? (
          <TouchableOpacity style={styles.syncbtnbody}>
            <View style={{ height: 15, width: 15, overflow: "hidden" }}>
              <Image
                source={require("../../../assets/7.png")}
                style={{ height: "100%", width: "100%" }}
                // resizeMode="cover"
              />
            </View>
            <Text style={styles.synctext}>Synced</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <View style={styles.titleimagewrapper}>
        <Text style={styles.foldertext}>Folder One</Text>
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 100,
            backgroundColor: "#8C9AAE",
            marginHorizontal: 8,
          }}
        ></View>
        <Text style={styles.timetext}>1 min ago</Text>
      </View>
      <View>
        <Text style={styles.descriptiontext}>
          The voice record is playing The voice record is playing The voice
          record is playing The voice record is playing The voice{" "}
        </Text>
      </View>

      {toggleplay ? (
        <View style={styles.playbtnwrapper}>
          <LinearGradient
            // Background Linear Gradient
            colors={[
              "rgba(251, 118, 85, 1)",
              "rgba(220, 56, 188, 1)",
              "rgba(138, 88, 207, 1)",
            ]}
            style={styles.background}
          />

          <TouchableOpacity
            onPress={() => settToggleplay(false)}
            style={styles.pausebtn}
          >
            {/* <MaterialCommunityIcons
              name="pause"
              size={20}
              color="rgba(251, 118, 85, 1)"
              style={{ position: "absolute", zIndex: 9999 }}
            /> */}
            <Image
              source={require("../../../assets/Subtract.png")}
              style={{ height: "220%", width: "220%" }}
              resizeMode="cover"
            />
          </TouchableOpacity>

          <View style={styles.audiowavebody}>
            <Image
              source={require("../../../assets/6.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.audiotime}>05:26</Text>
        </View>
      ) : (
        <View
          style={[
            styles.playbtnwrapper,
            {
              backgroundColor: "#0F1322",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => settToggleplay(true)}
            style={styles.playbtnbody}
          >
            <FontAwesome5
              name="play"
              size={10}
              color="#fff"
              style={{ position: "absolute", zIndex: 9999 }}
            />

            <LinearGradient
              // Background Linear Gradient
              colors={[
                "rgba(251, 118, 85, 1)",
                "rgba(220, 56, 188, 1)",
                "rgba(138, 88, 207, 1)",
              ]}
              style={styles.btnbackground}
            />
          </TouchableOpacity>

          <View style={styles.audiowavebody}>
            <Image
              source={require("../../../assets/6.png")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.audiotime}>05:26</Text>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Mainfolders);
