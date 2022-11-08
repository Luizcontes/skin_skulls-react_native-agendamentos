import { StyleSheet, TextInput, Button, Alert } from "react-native";


const phoneValidation = () => {
    Alert.alert("I was clicked!!!");
}

export function PhoneInput() {
    return (
        <>
            <TextInput placeholder="Enter your phone number" style={styles.phoneInput} />
            <Button
                onPress={phoneValidation}
                title="Click me!"
            />
        </>
    );
}

const styles = StyleSheet.create({
    phoneInput: {
        backgroundColor: "#ffffff",
        marginTop: 40,
        marginBottom: 15,
        height: 40,
        borderRadius: 2,
    },
})