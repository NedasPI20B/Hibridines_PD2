import * as React from 'react';
import { render } from 'react-dom';
import {View, Text} from 'react-native';
import {StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { recipeData } from "../../../data"
import { useState, useEffect } from 'react';

export default function DrinkScreen({navigation}) {
  const [itemArray, setItems] = useState([]);

  useEffect(() => {
    setItems([]);
    recipeData.forEach((element) => {
      setItems(oldArray => [...oldArray, {
        id: element.id,
        title: element.title,
        categoryId: element.categoryid,
        content: element.content,
      }])
    })
  }, [])

  return(
    <View>
      {itemArray.filter(item => item.categoryId === 3).map((element, index) => 
        <TouchableOpacity key = {index} onPress = {() => navigation.navigate("Recipe", {
          title: element.title,
          recipeId: element.id,
          content: element.content,
        })}>
          <View style={styles.space} />
          <View style={styles.button}>
            <Text style={styles.text}>{element.title}</Text>
          </View>
          <View style={styles.space} />
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:"lightgrey",
    padding: 30,
    alignItems:"center",
    width:"80%",
    alignSelf:"center",
    borderWidth:1,
    borderColor:"black",
    borderRadius: 30,
  },
  text:{
    fontSize:20,
    color:"black",
  },
  space:{
    height:15,
  }
})