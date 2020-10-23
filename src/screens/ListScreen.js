import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Paras",age:20 },
    { name: "Dipen",age:30 },
    { name: "Amit",age:22 },
    { name: "Umesh",age:24 },
    { name: "Aanand",age:25 },
    { name: "Pratik",age:26 },
  ];
  return (
    <FlatList

    showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={(element) => {
        return <Text style={styles.textStyle}>{element.item.name}-Age {element.item.age}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical:50,
    color: "blue",
  },
});
export default ListScreen;
