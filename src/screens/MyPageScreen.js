import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from "./theme";

export default function MyPageScreen() {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>마이페이지!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bg,
        paddingHorizontal: 20,
    }
})