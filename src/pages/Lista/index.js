import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import Logo from '../../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';

export default function Lista({ route }) {
      const { listaMissoes } = route.params;

      const navigation = useNavigation();


      const handleCriar = () => { 
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
      {listaMissoes.map((missao, index) => (
                <View key={index} style={styles.missaoItem}>
                    <Text style={styles.missaoText}>{`Funcionário: ${missao.funcionario}`}</Text>
                    <Text style={styles.missaoText}>{`Função: ${missao.funcao}`}</Text>
                    <Text style={styles.missaoText}>{`Drone: ${missao.drone}`}</Text>
                    <Text style={styles.missaoText}>{`Missão: ${missao.missao}`}</Text>
                </View>
            ))}
      <TouchableOpacity style={styles.button} onPress={handleCriar}>
      <Text style={styles.text}>Ver Lista</Text>
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
      missaoItem: {
        position: 'absolute',
        width: 283,
        height: 124,
        left: 50,
        top: 297,
        backgroundColor: '#1D7373',
        borderRadius: 10,
        padding: 10,
    },
    missaoText: {
        color: '#FFFFFF',
    },

    button: {
      position: 'absolute',
      width: 218,
      height: 42,
      left: 79,
      top: 500,
      backgroundColor: '#0A3A40',
      borderColor: '#0A3A40',
      borderWidth: 1,
      borderRadius: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      width: 163,
      height: 18,
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: 15,
      lineHeight: 18,
      textAlign: 'center',
      letterSpacing: 0.67,
      color: '#FFFFFF',
    },

})