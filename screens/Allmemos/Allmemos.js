import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { connect } from "react-redux";
import { styles as _styles } from "../../styles/Allmemos/main";
import Header from "../../globalComponents/Header";
import Mainfolders from "./components/Mainfolders";
import { AntDesign } from "@expo/vector-icons";
import { RFValue as rf } from "react-native-responsive-fontsize";
import Notes from "./components/Notes";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getPercent } from "../../middleware";

const Allmemos = (props) => {
  let {} = props;
  let { width, height } = useWindowDimensions();
  let styles = _styles({ width, height });

  return (
    <View style={styles.container}>
      <Header title={"All Memos"} navigation={props?.navigation} />
      <KeyboardAwareScrollView>
        <View style={styles.lablewrapper}>
          <Text style={styles.title}>Your Folders</Text>
          <TouchableOpacity>
            <Text style={styles.seealltext}>See All</Text>
          </TouchableOpacity>
        </View>
        <Mainfolders />
        <View style={styles.searchbarwrapper}>
          <View style={styles.searchbarbody}>
            <View style={{ height: 20, width: 20 }}>
              <Image
                source={require("../../assets/11.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Search Any Note..."
              placeholderTextColor={"#rgba(190, 195, 202, 1)"}
            />
          </View>
          <TouchableOpacity style={styles.sertiniconbody}>
            <Image
              source={require("../../assets/2.png")}
              style={{ height: "80%", width: "80%" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <Notes />
            <Notes syncbtn />
            <Notes />
            <Notes syncbtn />
            <Notes />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors.errors,
});
export default connect(mapStateToProps, {})(Allmemos);
