import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MainStackNavigator, CategoryStackNavigator } from "./StackNavigator";

//Screen names
const homeName = 'Home';
const categoriesName = 'Categories';

const Tab = createBottomTabNavigator();
export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (rn === categoriesName) {
              iconName = focused ? 'list' : 'list-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>

        <Tab.Screen name={homeName} component={MainStackNavigator} options = {{ headerShown: false }}/>
        <Tab.Screen name={categoriesName} component={CategoryStackNavigator} options = {{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}