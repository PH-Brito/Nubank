import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Cartoes() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>Gerencie seus cartões aqui.</Text>
                <Text style={styles.title}>Meus Cartões</Text>
            </View>
            <View style={styles.card}>
                <Image style={styles.icone} source={require('./img/card.png')}></Image>
                <Text style={styles.text}>Cartão físico</Text>
                <Text style={styles.texto}>Cartão de Crédito</Text>
                <Text style={styles.numero}>**** **** **** 1234</Text>
            </View> 
            <View style={styles.image}>

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
        padding: 20
    },
    title: {
        color: "white",
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        letterSpacing: 1
    },
    text: {
        color: "#AAA",
        fontSize: 16,
        marginBottom: 20
    },
    texto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: "#820AD1",
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 25,
        shadowColor: "#820AD1",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 }
    },
    buttonText:{ 
        color: "white", 
        fontSize: 18, 
        fontWeight: "bold" 
    },

    numero:{
        color: 'white',
        fontSize: 16,
        opacity: 0.7,
      },
      card: {
        backgroundColor: '#820AD1',
        textAlign:'center',
        borderRadius: 10,
        margin:20,
        padding:10,
      },
      icone:{
        width:40,
        height:40,
      },
});
