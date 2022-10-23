import * as React from 'react';
import {StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';

export default function CategoriesScreen({navigation}) {
    return(
        <View style = {styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Dessert Category")}>
            <View style = {styles.box}>
                    <Image 
                        style = {styles.icon} 
                        source={require("../../icons/dessert.png")} 
                    />
                    <Text style = {styles.boxTitle}>Desserts</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Soup Category")}>
                <View style = {styles.box}>
                <Image 
                        style = {styles.icon} 
                        source={require("../../icons/soup.png")} 
                    />
                    <Text style = {styles.boxTitle}>Soups</Text>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Drink Category")}>
                <View style = {styles.box}>
                <Image 
                        style = {styles.icon} 
                        source={require("../../icons/drink.jpg")} 
                    />
                    <Text style = {styles.boxTitle}>Drinks</Text>
                    </View>
            </TouchableOpacity>
              <View>
            </View>
        </View>
    );
}

let screenWidth = Dimensions.get("window").width / 2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 40,
    },
    box: {
        width: screenWidth - 10,
        height: 140,
        backgroundColor: "#D0D0D0",
        margin: 5,
        borderRadius: 15,
        opacity: 0.8,
        elevation: 25,
    },
    boxTitle: {
        alignSelf: "center",
        position: 'absolute',
        color: "black",
        bottom: 10,
        fontSize: 20,
    },
    icon: {
        width: 200,
        height: 150,
        aspectRatio: 0.9,
        alignSelf: "center",
        resizeMode: 'contain',
        bottom: 20,
    },
})