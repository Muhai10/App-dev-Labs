import React from "react";
import { Text, StyleSheet, View, FlatList, Image } from "react-native";

const ListScreen = () => {
    const uni = [
    { name: "BUET", key: '1' },
        { name: "IUT", key: '2' },
        { name: "DU", key: '3' },
        { name: "KUET", key: '4' },
        { name: "CUET", key: '5' },
        { name: "SUST", key: '6' },
        { name: "RU", key: '7' },
        { name: "RUET", key: '8' },
        { name: "BRAC", key: '9' },
        { name: "NSU", key: '10' },
        { name: "AUST", key: '11' },
        { name: "EWU", key: '12' },
];
    return (
        <View style={styles.viewStyle}>
            <FlatList
                horizontal={false}
                showsVerticalScrollIndicator={true}
                data={uni}
                renderItem={
                    function ({ item }) {
                        return <Text style={styles.textStyle}>{item.name}</Text>;
                                     }
                }
            />
            <Image
                source = {require("‪./../../assets/logo.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle: {
            fontSize: 30,
            color: "blue",
            marginVertical:30,
        },
        viewStyle: {
            backgroundColor: "white",
            borderColor : "green",
        }
    }
);

export default ListScreen;