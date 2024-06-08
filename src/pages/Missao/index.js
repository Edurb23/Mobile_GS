import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Logo from '../../../assets/logo.png';

export default function Missao({ navigation }) {


    const CriarMissao = () => { 
        navigation.navigate('CriaMissao')
    }

    const ListaMissao = () => { 
        navigation.navigate('ListaMissao')
    }
 
 
    return (
    <View style={styles.container}>
      <Text style={styles.title}>J.A.R.V.I.S</Text>
      <Image 
        style={styles.logo} 
        source={Logo} 
      />
      <View style={styles.line} />
      <TouchableOpacity style={styles.rectangle26} onPress={CriarMissao}>
        <Text style={styles.textCriarMissao}>CRIAR UMA MISSÃO</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.rectangle27} onPress={ListaMissao} >
        <Text style={styles.textListaMissoes}>LISTA DE MISSÕES</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        position: 'relative',
      },
      title: {
        position: 'absolute',
        width: 164,
        height: 33,
        left: 118,
        top: 145,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 27,
        lineHeight: 33,
        textAlign: 'center',
        letterSpacing: 3.67,
        color: '#0A3A40',
      },
      logo: {
        position: 'absolute',
        width: 137,
        height: 106,
        left: 40,
        top: 120,
        transform: [{ rotate: '18deg' }],
      },
      line: {
        position: 'absolute',
        width: 317,
        height: 0,
        left: 31,
        top: 253,
        borderWidth: 1,
        borderColor: '#000000',
        transform: [{ rotate: '-0.18deg' }],
      },
      rectangle26: {
        position: 'absolute',
        width: 208,
        height: 42,
        left: 84,
        top: 370,
        backgroundColor: '#0A3A40',
        borderColor: '#0A3A40',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      rectangle27: {
        position: 'absolute',
        width: 208,
        height: 42,
        left: 88,
        top: 450,
        backgroundColor: '#0A3A40',
        borderColor: '#0A3A40',
        borderWidth: 1,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textCriarMissao: {
        position: 'absolute',
        width: 155,
        height: 18,
        left: 112 - 84, 
        top: 382 - 370, 
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: 0.67,
        color: '#FFFFFF',
      },
      textListaMissoes: {
        position: 'absolute',
        width: 146,
        height: 18,
        left: 118 - 88, 
        top: 462 - 450, 
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: 0.67,
        color: '#FFFFFF',
      },
})