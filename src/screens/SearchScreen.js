import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from "./theme";

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>검색 화면입니당</Text>
            <Text style={{color: "white"}}>검색 검색</Text>
            <Text style={{color: "white"}}>영어로는 서치서치</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bg,
    }
})