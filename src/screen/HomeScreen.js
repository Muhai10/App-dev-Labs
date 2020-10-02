import React from "react";
import { Text, StyleSheet, Button, View, Image } from "react-native";

const HomeScreen = (props) => {
    console.log(props);
    return (
        <View>
                <Text style={styles.textStyle}>HomeScreen</Text>
                <Button
                title = "Go to list Screen"
                onPress ={
                function () {
                    props.navigation.navigate("List");
                }
            }
            />
            <Image source={require("‪./../../assets/logo.png")} />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: 'blue',
        }
    }
);

export default HomeScreen; 