import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function MyAttendance() {
  const [celebrations, setCelebrations] = React.useState([
    {
      Days: "20",
      Format: "Total Days in Dec",
      iconName: "calendar",
      color: "#B3F5F5",
      iconColor: "#25B6FE",
      borderIconColor: '#7DC7F1'
    },
    {
      Days: "20",
      Format: "Payable Days in Dec",
      iconName: "logo-usd",
      color: "#F3F7D4",
      iconColor: "#B1E98F",
      borderIconColor: '#D7EF5E'
    },
    {
      Days: "20",
      Format: "Present",
      iconName: "checkmark-circle-sharp",
      color: "#E5F8D8",
      iconColor: "#6AE81D",
      borderIconColor: '#B7FF8B'
    },
    {
      Days: "20",
      Format: "On Duty",
      iconName: "briefcase-sharp",
      color: "#F3D9D2",
      iconColor: "#FF916E",
      borderIconColor: '#F55927'
    },
    {
      Days: "20",
      Format: "Week Off",
      iconName: "ios-logo-playstation",
      color: "#D7DDF0",
      iconColor: "#7FA5F7",
      borderIconColor: '#5086F9'
    },
    {
      Days: "20",
      Format: "Holiday",
      iconName: "sunny-outline",
      color: "#FAFEC4",
      iconColor: "#F48301",
      borderIconColor: '#E9EE48'
    },
    {
      Days: "20",
      Format: "Leave",
      iconName: "alert-outline",
      color: "#F2C7C7",
      iconColor: "#F1583D",
      borderIconColor: '#F07F7F'
    },
    {
      Days: "20",
      Format: "Leave Without Pay",
      iconName: "warning-outline",
      color: "#F2C7E9",
      iconColor: "#E633EF",
      borderIconColor: '#E379E8'
    },
    {
      Days: "20",
      Format: "Absent",
      iconName: "close-circle",
      color: "#F7AFAF",
      iconColor: "#FE2B01",
      borderIconColor: '#F6765D'
    },
  ]);
  const renderGrid = (dummyValues) => {
    const numColumns = 3;
    const items = dummyValues.map((val, index) => (
      <View
        key={index}
        style={[
          {
            alignItems: "center",
            justifyContent: 'space-between',
            marginHorizontal: 3,
            flexDirection: "row",
            borderWidth: 1,
            backgroundColor: val.color,
            width: "30%",
            
          },
          styles.text,
        ]}
      >
        <View style={{borderRadius: 20, borderWidth: 1, padding: 3, borderColor: val.borderIconColor}}>
        <Ionicons
          name={val.iconName}
          size={15}
          style={{ color: val.iconColor, }}
        />
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {val.Days}
          </Text>
          <Text
         // numberOfLines={2}
            style={{ paddingHorizontal: 0, fontSize: 9, textAlign: "center" }}
          >
            {val.Format}
          </Text>
        </View>
      </View>
    ));

    const rows = [];
    let i = 0;

    while (i < items.length) {
      rows.push(
        <View
          key={i}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {items.slice(i, i + numColumns)}
        </View>
      );
      i += numColumns;
    }

    return rows;
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={styles.textMain}>
        <Text style={{ fontWeight: "bold", marginRight: 10 }}>
          My Attendance
        </Text>
        <Text style={{ fontSize: 12 }}>April(31Days)</Text>
        <Ionicons
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          end: 8,
        }}
        name="arrow-forward"
        size={20}
        color="#FF8F00"
      />
      </View>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {renderGrid(celebrations)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  textMain: {
    padding: 8,
    //  fontWeight: "bold",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    margin: 7,
    padding: 15,
    borderColor: "#6fa8dc",
    borderWidth: 0,
    borderRadius: 10,
  },
  clr1: {
    backgroundColor: "#49e675",
  },
  clr2: {
    backgroundColor: "#97ccf0",
  },
  clr3: {
    backgroundColor: "#b4a7d6",
  },
  clr4: {
    backgroundColor: "#f6b26b",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MyAttendance;
