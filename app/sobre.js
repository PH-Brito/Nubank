import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <View style={styles.boxIconesCabecalho}>
          <View style={styles.circulo}>
            <Image style={styles.icone} source={require('./img/user.png')} />
          </View>

          <View style={styles.itensIcones}>
            <Image style={styles.icone} source={require('./img/view.png')} />
            <Image style={styles.icone} source={require('./img/question.png')} />
            <Image style={styles.icone} source={require('./img/email.png')} />
          </View>
        </View>

        <View style={styles.boxTextUsuario}>
          <Text style={styles.textUsuario}>Olá, Gabriela</Text>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.mainText}>
          <Text style={styles.mainText}>Conta</Text>
          <Image style={styles.icone} source={require('./img/seta.png')} />
        </View>
        <Text style={styles.mainText2}>R$72,60</Text>
        <Text style={styles.mainBank}>R$0,02 em outro banco</Text>

        <View style={styles.mainImageContainer}>
          <View style={styles.mainImage}>
            <View style={styles.circulo2}>
              <Image style={styles.icone2} source={require('./img/dollar.png')} />
            </View>
            <View style={styles.circulo2}>
              <Image style={styles.icone2} source={require('./img/barcode.png')} />
            </View>
            <View style={styles.circulo2}>
              <Image style={styles.icone2} source={require('./img/money.png')} />
            </View>
          </View>
        </View>

        <View style={styles.mainTextIcons}>
          <Text style={styles.mainTextIcons}>Pix</Text>
          <Text style={styles.mainTextIcons}>Pagar</Text>
          <Text style={styles.mainTextIcons}>Empréstimo</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image style={styles.icone3} source={require('./img/card.png')} />
            <Text style={styles.mainTextCard}>Meus Cartões</Text>
          </View>
        </View>

        <View style={styles.mensagem}>
          <View style={styles.mensagem2}>
            <Text style={styles.mainText2}>
              Convide todo mundo para o NU, coisa boa a gente compartilha
            </Text>
            <Image style={styles.icone2} source={require('./img/money.png')} />
          </View>
        </View>

        <View style={styles.nav}>
          <Button title="Ir para Index" onPress={() => router.navigate('/')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'black',
  },
  cabecalho: {
    backgroundColor: '#490C74',
    width: '100%',
    height: 90,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  icone: {
    width: 20,
    height: 20,
  },
  icone2: {
    width: 50,
    height: 50,
  },
  icone3: {
    width: 30,
    height: 30,
  },
  circulo: {
    width: 40,
    height: 40,
    backgroundColor: '#9603E8',
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  circulo2: {
    backgroundColor: 'grey',
    borderRadius: 15, 
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxIconesCabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itensIcones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 15,
  },
  boxTextUsuario: {
    marginTop: 10,
  },
  textUsuario: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  mainText: {
    color: 'white',
    fontSize: 20,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  mainText2: {
    color: 'white',
    fontSize: 20,
    paddingTop: 10,
    marginHorizontal: 20,
  },
  mainBank: {
    color: 'white',
    opacity: 0.5,
    marginStart: 20,
    paddingTop: 10,
  },
  mainImage: {
    flexDirection: 'row',
    gap: 40,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  mainTextIcons: {
    color: 'white',
    fontSize: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginHorizontal: 20,
  },
  cardContainer: {
    padding: 20,
    paddingTop: 30,
  },
  card: {
    backgroundColor: 'grey',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    padding: 10,
  },
  mainTextCard: {
    color: 'white',
    fontSize: 20,
  },
  mensagem: {
    paddingTop: 20,
  },
  mensagem2: {
    backgroundColor: 'grey',
    alignItems: 'center',
    borderRadius: 30,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  nav: {
    alignItems: 'center',
    paddingTop: 10,
  },
});
