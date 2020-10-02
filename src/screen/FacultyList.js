import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const FacultyList = () => {
    const Faculty = [
        { name: "  1. Muhammad Mahbub Alam" },
        { name: "  2. Abu Raihan Mostofa Kamal" },
        { name: "  3. Md. Hasanul Kabir" },
        { name: "  4.  Kamrul Hasan" },
        { name: "  5. Hasan Mahmud" },
        { name: "  6. Md. Sakhawat Hossen" },
    ];
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle2}>First Semester</Text>
            <FlatList
                style={styles.ListStyle}
                data={Faculty}
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

export default FacultyList;