import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const Semester1 = () => {
    const Course = [
        { name: "  1. SWE 4101: Introduction to Software Engineering" },
        { name: "  2. CSE 4107: Structured Programming I" },
        { name: "  3. Math 4141 Geometry and Differential Calculus" },
        { name: "  4. Phy 4143: Physics II" },
        { name: "  5. Hum 4145: Islamiat" },
        { name: "  6. Hum 4147: Technology, Environment and Society" },
    ];
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle2}>First Semester</Text>
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

export default Semester1;