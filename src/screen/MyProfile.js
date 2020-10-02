import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Profile = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>Profile</Text>
            <Text> </Text>
            <Image style={styles.imageStyle} source={require("‪./../../assets/profile1.png")}></Image>
            <Text> </Text>
            <Text style={styles.textStyle2}>Name : Al Muhaimin</Text>
            <Text style={styles.textStyle2}>Student ID : 170042010</Text>
            <Text style={styles.textStyle2}>Room No : 322,North</Text>
            <Text style={styles.textStyle2}>Email : al-muhaimin@iut-dhaka.edu</Text>
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
            textAlign: "left",
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
    }
);

export default Profile;