import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const Semester2 = () => {
    const Course = [
        { name: "  1. SWE 4201: Object Oriented Concepts I" },
        { name: "  2. CSE 4203 Discrete Mathematics" },
        { name: "  3. CSE 4205 Digital Logic Design" },
        { name: "  4. Math 4241 Integral Calculus and Differential Equations" },
        { name: "  5. Hum 4247: Accounting" },
        { name: "  6. Hum 4249: Business Psychology and Communications" },
    ];
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle2}>Second Semester</Text>
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

export default Semester2;