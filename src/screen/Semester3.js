import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const Semester3 = () => {
    const Course = [
        { name: "  1. SWE 4301: Object Oriented Concepts II" },
        { name: "  2. CSE 4303: Data Structures" },
        { name: "  3. CSE 4305: Computer Organization and Architecture" },
        { name: "  4. CSE 4307: Database Management System" },
        { name: "  5. CSE 4309: Theory of Computing" },
        { name: "  6. Math 4341: Linear Algebra" },
    ];
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle2}>Third Semester</Text>
            <FlatList
                style={styles.ListStyle}
                data={Course}
                renderItem={function ({ item }) {
                    return (<Text style={styles.textStyle}>{item.name}</Text>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: "left",
        fontSize: 20,
        color: 'black',
        backgroundColor: 'white',
    },
    textStyle2: {
        textAlign: "center",
        fontSize: 30,
        color: 'blue',
        backgroundColor: 'white',
    },
});

export default Semester3;