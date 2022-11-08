import { Image, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Alert } from "react-native";
import { Theme } from "../themes";
import { PhoneInput } from "./PhoneInput";

const logo = require('../assets/skull.jpeg')

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} resizeMode="contain"></Image>
                <TouchableOpacity hitSlop={styles.touchText}>
                    <Text style={styles.title}>Skin and Skulls!!!</Text>
                </TouchableOpacity>
                {/* <TextInput placeholder="Enter your phone number" style={styles.phoneInput} />
                <Button
                    onPress={phoneValidation}
                    title="Click me!"
                /> */}
                <PhoneInput />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Theme.colors.primary
    },
    container: {
        paddingVertical: 40,
        paddingHorizontal: 20,
    },
    logo: {
        alignSelf: "center",
        marginBottom: 30,
        width: 250,
        height: 250,
    },
    touchText: {
        top: 10,
        right: 10,
        bottom: 10,
        left: 10,
    },
    title: {
        alignSelf: "center",
        fontSize: 30,
    },
    phoneInput: {
        backgroundColor: "#ffffff",
        marginTop: 40,
        marginBottom: 15,
        height: 40,
        borderRadius: 2,
    },
    phoneButton: {
        marginTop: 20,
        borderRadius: 5,
    }
})