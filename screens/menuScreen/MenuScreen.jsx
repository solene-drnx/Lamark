import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CATEGORIES } from '../../constants';
import { useState } from 'react';

export function MenuScreen({setScreen, setSelectedChap}) {
    const handleChapSelected = (currentChap) => {
        setSelectedChap(currentChap);
        setScreen("quizz");
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {Object.values(CATEGORIES).map((currentChap) => (
                    <TouchableOpacity
                        key={currentChap.chapitre}
                        style={styles.containerChap}
                        onPress={() => handleChapSelected(currentChap)}
                    >
                        <Text style={styles.textChap}>{currentChap.nom}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9E7FA',
        alignItems: "center",
        justifyContent: "center",
    },
    containerChap: {
        height: 150,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 10,
        margin: 10,
    },
    textChap: {
        position: "absolute",
        right: 0,
        bottom: 0,
    },
});