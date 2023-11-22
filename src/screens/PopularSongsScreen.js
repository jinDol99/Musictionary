import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";
import {theme} from "./theme";

export default function PopularSongsScreen() {
    const [tjActivated, setTj] = useState(true);
    const ky = () => setTj(false);
    const tj = () => setTj(true);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>실시간 인기곡</Text>
                <View style={styles.header}>
                    <TouchableOpacity onPress={tj}>
                        <Text style={{...styles.btnText, color: tjActivated ? "white" : theme.grey}}>TJ 미디어</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ky}>
                        <Text style={{...styles.btnText, color: !tjActivated ? "white" : theme.grey}}>금영 노래방</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.bg,
        paddingHorizontal: 20,
    },
    title:{
        marginTop: 20,
        fontSize: 30,
        color: "#ffffff"
    },
    header:{
        flexDirection: "row",
        marginTop: 20
    },
    btnText:{
        marginHorizontal: 10,
        fontSize: 20,
        color: "#ffffff"
    }
})