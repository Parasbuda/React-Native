import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!!! </Text>
      <Button
        style={styles.button}
        onPress={() => props.navigation.navigate("Component")}
        title="Go To the Component Screen"
      />
      {/* <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
        <Text>Go to List </Text>
      </TouchableOpacity> */}
      <Button
        style={styles.button}
        title="Go to List"
        onPress={() => props.navigation.navigate("List")}
      />
      <Button
        style={styles.button}
        onPress={() => props.navigation.navigate("Image")}
        title="Go To Image"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button:{
    marginVertical: 50,
  },
});

export default HomeScreen;
