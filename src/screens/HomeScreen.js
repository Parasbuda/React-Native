import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>Hello World!!! </Text>
      <Button
        onPress={() =>props.navigation.navigate('Component') }
        title="Go To the Component Screen"
      />
      <TouchableOpacity onPress={()=>props.navigation.navigate('List')}>
        <Text>Go to List </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
