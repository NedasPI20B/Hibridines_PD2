import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DessertScreen from "./screens/recipes/DessertScreen";
import SoupScreen from "./screens/recipes/SoupScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import RecipeScreen from "./screens/recipes/RecipeScreen";
import DrinkScreen from "./screens/recipes/DrinkScreen";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'black',
    headerBackTitle: "Back",
};

const MainStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name = "Home Page" component={HomeScreen} options = {{
            headerTitleAlign: 'center',
        }}/>
      </Stack.Navigator>
    );
}
const CategoryStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name = "Recipies Categories" component={CategoriesScreen} options = {{  
            headerTitleAlign: 'center' 
        }} />
        <Stack.Screen name = "Dessert Category" component={DessertScreen} options = {{
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name = "Soup Category" component={SoupScreen} options = {{
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name = "Recipe" component = {RecipeScreen} options = {{
            headerTitleAlign: 'center',
        }} />
        <Stack.Screen name = "Drink Category" component = {DrinkScreen} options = {{
            headerTitleAlign: 'center',
        }} />
      </Stack.Navigator>
    );
}

export { MainStackNavigator, CategoryStackNavigator };