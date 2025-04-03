import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Extrato() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Extrato</Text>
            
            <View style={styles.item}>
                <Text style={styles.text}>Compra no Mercado</Text>
                <Text style={styles.value}>- R$ 50,00</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Depósito Recebido</Text>
                <Text style={styles.valuePositive}>+ R$ 200,00</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.text}>Pagamento de Conta</Text>
                <Text style={styles.value}>- R$ 80,00</Text>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/') }>
                <Text style={styles.buttonText}>Voltar para Início</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        padding: 20
    },
    title: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 20
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#333"
    },
    text: {
        color: "white",
        fontSize: 16
    },
    value: {
        color: "red",
        fontSize: 16
    },
    valuePositive: {
        color: "#00FF00",
        fontSize: 16
    },
    button: {
        marginTop: 30,
        backgroundColor: "#820AD1",
        paddingVertical: 14,
        borderRadius: 25,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
});