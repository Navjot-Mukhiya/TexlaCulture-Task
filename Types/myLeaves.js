import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

function MyLeaves() {
  const [myLeaves, setMyLeaves] = React.useState([
    {
      type: "Earned Leave",
      days: "12",
      left: "left",
      year: "Current Year",
      have: "Availed",
      total: "Balanced",
      value: "00",
      color1: "#FFAE00",
      color2: "#FFE5A1",
    },
    {
      type: "Casual Leave",
      days: "12",
      left: "left",
      year: "Current Year",
      have: "Availed",
      total: "Balanced",
      value: "00",
      color1: "#00FFFB",
      color2: "#BEFFFB",
    },
  ]);

  return (
    <View>
        <View style={{flexDirection: 'row', margin: 10 }}> 
      <Text style={{fontWeight: 'bold'}}>My Leaves</Text>
      <Ionicons
        style={{
          position: "absolute",
          alignSelf: "flex-end",
          end: 8,
        }}
        name="arrow-forward"
        size={20}
        color="red"
      />
      </View>
      <ScrollView horizontal>
        {myLeaves.map((val, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    backgroundColor: val.color1,
                    padding: 18,
                    marginRight: 15,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    color: 'white',
                    fontSize: 18
                  }}
                >
                  {val.type}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: val.color2,
                    marginRight: 15,
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold", fontSize: 25 }}>
                    {val.days}
                  </Text>
                  <Text style={{ fontSize: 12, marginHorizontal: 5, color: 'gray' }}>
                    {val.left}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: val.color2,
                    marginRight: 15,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingBottom: 10,
                    paddingHorizontal: 2,
                  }}
                >
                  <View style={styles.main}>
                    <Text style={{ color: 'gray'}}>{val.year}</Text>
                    <Text style={{ marginHorizontal: 35, }}>{val.value}</Text>
                  </View>
                  <View style={styles.main}>
                    <Text style={{ color: 'gray'}}>{val.have}</Text>
                    <Text style={{ marginHorizontal: 35,  }}>{val.value}</Text>
                  </View>
                  <View style={{ height: 1, backgroundColor: 'gray', marginHorizontal: 5, marginVertical: 5 }} />
                  <View style={styles.main}>
                    <Text style={{ color: 'gray'}}>{val.total}</Text>
                    <Text style={{ marginHorizontal: 35,  }}>{val.value}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
});

export default MyLeaves;
