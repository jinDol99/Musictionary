import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from "./theme";

export default function ThemeListScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>테마 리스트 스크린</Text>
            <Text>스토리보드 01_2에 해당</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.bg,
    }
})