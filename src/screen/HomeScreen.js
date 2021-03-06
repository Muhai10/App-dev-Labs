﻿import React from "react";
import { Text, StyleSheet, Button, View, Image, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}> </Text>
            <Text style={styles.textStyle}>Home</Text>
            <Text> </Text>
            <Image style={styles.imageStyle} source={require("‪./../../assets/logo.png")}></Image>
            <Text> </Text>
            <Text style={styles.textStyle}>Department of CSE</Text>
            <Text> </Text>
            <Text style={styles.textStyle2}>Programme : SWE</Text>
            <Text> </Text>
            <TouchableOpacity
                onPress={
                    function () {
                        props.navigation.navigate("Profile");
                    }
                }
                style={styles.ButtonContainer}
            >
                <Text style={styles.buttonText}>My Profile</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity
                onPress={
                    function () {
                        props.navigation.navigate("Semesters");
                    }
                }
                style={styles.ButtonContainer}
            >
                <Text style={styles.buttonText}>Semester Wise Course List</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity
                onPress={
                    function () {
                        props.navigation.navigate("Faculty List");
                    }
                }
                style={styles.ButtonContainer}
            >
                <Text style={styles.buttonText}>List of The Faculties</Text>
            </TouchableOpacity>
            <Text> </Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            textAlign: "center",
            fontSize: 30,
            color: 'blue',
            backgroundColor: 'white',
        },
        textStyle2: {
            textAlign: "center",
            fontSize: 25,
            color: 'blue',
            backgroundColor: 'white',
        },
        imageStyle: {
            alignSelf: "center",
            width: 124,
            height: 203,
            borderColor: 'gainsboro',
            borderWidth: 2,
            backgroundColor: 'white'
        },
        buttonText: {
            fontSize: 18,
            color: "black",
            fontWeight: "bold",
            alignSelf: "center",
            textTransform: "uppercase"
        },
        ButtonContainer: {
            elevation: 8,
            backgroundColor: "deepskyblue",
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 12
        },
    }
);

export default HomeScreen; 