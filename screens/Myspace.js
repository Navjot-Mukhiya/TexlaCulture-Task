import { Ionicons } from "@expo/vector-icons";
import MyAttendance from "../Types/myAttendance";
import MyLeaves from "../Types/myLeaves";
import MyHoliday from "../Types/myHoliday";
import React from "react";
import { ScrollView, StyleSheet, TextInput, View, Text, Pressable, Image, Button } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MyTask from "../Types/myTask";


const mySpace = (props) => {

React.useEffect(() => {
  props.navigation.setOptions({
    headerShown: true,
    headerLeft: () => <Ionicons style={styles.icon}  name="arrow-back" size= {20} color= 'orange' onPress={() => props.navigation.navigate('Home')
    }/>,
    headerRight: () => 
    <View style={{flexDirection: 'row'}}>
    <Ionicons style={styles.icon} name="search" size= {20} color= 'orange' />
    <Ionicons style={styles.icon} name="notifications" size= {20} color= 'orange' />
    </View>
  })
}, [props?.navigation])

  return (
    <ScrollView>
      <View>
        <View style={styles.bar}>
        <Ionicons
        style={{
          alignSelf: "flex-end",
          end: 8,
        }}
        name="eye"
        size={20}
        color="orange"
      />
          <View style={styles.design}>
            <View >
            <Image style={styles.image} source={require('../assets/iphoneemoji6removebgpreview.png')}/>
            </View>
            <View style={styles.text}>
            <Text style={{color: 'orange', fontWeight: 'bold', fontSize: 18}}>Ananya Singh</Text>
            <Text style={{fontWeight: 'bold'}}>UX Designer</Text>
            <Text style={{fontWeight: 'bold'}}>127927</Text>
            </View>
          </View>
        </View>
          <MyAttendance />
        <View style={styles.main}>
          <MyLeaves />
        </View>
        <View>
          <MyHoliday />
        </View>
        <View>
          <MyTask />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "column",
    backgroundColor: "#fff2cc",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingBottom: 10
    },
  text: {
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 50
  },
  ann: {
    color: "#67dd10",
  },
  textinput: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 0,
  },
  main: {
    // margin: 8,
    padding: 10,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#f8f8ff",
    borderRadius: 10,
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  image: {
    marginTop: 10,
    height: 80,
    width: 80,
    alignItems: 'flex-start',
    backgroundColor: "#c0cccc",
    borderRadius: 40,
    marginLeft: 30,
    alignItems: 'center'

  },
  textMain: {
    padding: 8,
    fontWeight: "bold",
    color: "#f6b26b",
    fontSize: 25,
    alignSelf: "center",
    backgroundColor: "#c0cccc",
    flexDirection: 'row',
  },
  design: {
    flexDirection: 'row'
  }, 
  icon: {
    margin: 10
  }
}) 


export default mySpace;