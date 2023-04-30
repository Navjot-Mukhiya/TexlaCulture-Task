import { Image, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MyHoliday() {
  return (
    <View>
      <Image
        style={{ padding: 15, margin: 15, width: "90%", height: 200 }}
        source={require("../assets/holiday.png")}
      />
      <Text
        style={{
          position: "absolute",
          padding: 15,
          margin: 15,
          color: "#F3FF00",
          fontSize: 15,
        }}
      >
        My Holidays
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
        color="#F3FF00"
      />
    </View>
  );
}

export default MyHoliday;
