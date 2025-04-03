import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Perfil() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Perfil</Text>
            </View>

            <View style={styles.profileContainer}>
                <Image style={styles.profileImage} source={require("./img/user.png")} />
                <Text style={styles.userName}>Gabriela</Text>
            </View>

            <View style={styles.optionsContainer}>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Segurança</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.optionText}>Sair</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => router.navigate('./sobre')}>
                <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        alignItems: "center",
        paddingTop: 50,
    },
    header: {
        width: "100%",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
    },
    profileContainer: {
        
        marginBottom: 30,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#820AD1",
        marginBottom: 10,
    },
    userName: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    optionsContainer: {
        width: "90%",
        marginBottom: 20,
    },
    option: {
        backgroundColor: "#1E1E1E",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
    },
    optionText: {
        color: "white",
        fontSize: 18,
    },
    button: {
        backgroundColor: "#820AD1",
        paddingVertical: 10,
        paddingHorizontal: 175,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        
    },
});
