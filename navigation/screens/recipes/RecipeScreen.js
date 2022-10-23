import * as React from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions, TouchableHighlight, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from "react-native-vector-icons/Ionicons"

export default function RecipeScreen({navigation, route}) {
    const [comment, setComment] = React.useState("");
    let [loadedComment, setLoadedComment] = React.useState("");

    const handleDataUpload = async(itemId) => {
        try {
            await AsyncStorage.setItem(itemId, comment);
        } catch (err) {
            console.log(err.message);
        }
        loadData(itemId);
        alert("Comment Successfully Saved");
    }

    const loadData = async(itemId) => {
        try {
            const loadedComment = await AsyncStorage.getItem(itemId);
            if (loadedComment === null) {
                loadedComment = "";
            }
            setLoadedComment(loadedComment);
        } catch (err) {
            console.log(err.message);
        }
    } 

    const handleDataRemoval = async(itemId) => {
        try {
            await AsyncStorage.removeItem(itemId);
        } catch (err) {
            console.log(err.message);
        }
        setLoadedComment("");
        alert("Comment Successfully Removed");
    }

    React.useEffect(() => {
        loadData(route.params.recipeId.toString());
    }, [])

    return(
        <View style={styles.container}>
            <Text style={{fontSize: 26, fontWeight: 'bold', color: "#FF5733"}}>{route.params.title}:</Text>
            <View style = {styles.space}></View>
            <Text style={{fontSize: 15, fontWeight: 'bold', color: "#575C60"}}>{route.params.content}</Text>
            <View style = {styles.space}></View>
            <TextInput style = {styles.commentInputBox} placeholder = "Write a comment..." placeholderTextColor = "black" onChangeText = {setComment} value = {comment}/>
            <TouchableHighlight style = {styles.commentPostButton}>
                <Button title = "Post Comment" onPress = {() => handleDataUpload(route.params.recipeId.toString())}/>
            </TouchableHighlight>   
            {loadedComment !== "" ? (
                <View style = {styles.commentBox}>
                    <Text style = {{ paddingLeft: 10, paddingTop: 5, fontSize: 20, color: "black"}}>{loadedComment}</Text>
                    <Ionicons name = "close-sharp" size = {40} style = {styles.deleteBox} onPress = {() => handleDataRemoval(route.params.recipeId.toString())}/>
                </View>
            ): null}
        </View>
    );
}

const screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    commentInputBox: {
        height: 50,
        margin: 10,
        borderWidth: 2,
        padding: 10,
        fontSize: 20,
        color: "black",
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent:'center',
    },
    commentPostButton: {
        height: 40,
        width: screenWidth - 25,
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 50,
    },
    commentBox: {
        width: screenWidth - 20, 
        height: 40,
        marginTop: -5,
        marginBottom: 30,
        margin: 10, 
        borderWidth: 2,
        borderColor: "black", 
    },
    deleteBox: {
        alignSelf: "flex-end", 
        position: "absolute", 
        bottom: -5,
        color: "red",
    },
    space:{
        height:30,
      }
})
