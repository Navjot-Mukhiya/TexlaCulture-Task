import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MyTask() {
  return (
    <View>
      <Image
        style={{ padding: 15, margin: 15, width: "90%", height: 150 }}
        source={require("../assets/mytask.jpg")}
      />
      <Text
        style={{
          position: "absolute",
          padding: 15,
          margin: 15,
          color: "red",
          fontSize: 15,
        }}
      >
        My Tasks
      </Text>
      <Ionicons
        style={{
          position: "absolute",
          padding: 15,
          margin: 15,
          alignSelf: "flex-end",
          end: 10,
        }}
        name="arrow-forward"
        size={30}
        color="red"
      />
    </View>
  );
}

export default MyTask;
