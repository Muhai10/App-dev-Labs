import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const SemesterWiseCourseList = (props) => {
    return (
        <View>
            <Text style={styles.textStyle}>Semesters</Text>
            <TouchableOpacity
                onPress={
                    function () {
                        props.navigation.navigate("CourseList of First Semester");
                    }
                }
                style={styles.ButtonContainer}
            >
                <Text style={styles.buttonText}>1st Semester</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity
                onPress={
                    function () {
                        props.navigation.navigate("CourseList of Second Semester");
                    }
                }
                style={styles.ButtonContainer}
            >
                <Text style={styles.buttonText}>2nd Semester</Text>
            </TouchableOpacity>
            <Text> </Text>
            <TouchableOpacity
                onPress={
                    function () {
                        props.navigation.navigate("CourseList of Third Semester");
                    }
                }
                style={styles.ButtonContainer}
            >
                <Text style={styles.buttonText}>3rd Semester</Text>
            </TouchableOpacity>
            <Text> </Text>
        </View>
    );
};
console.log(require);

const styles = StyleSheet.create(
    {
        textStyle: {
            textAlign: "center",
            fontSize: 30,
            color: 'blue',
            backgroundColor: 'white',
        },
        viewStyle: {
            backgroundColor: "white",
            borderColor: "green",
            borderWidth: 5,
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

export default SemesterWiseCourseList;