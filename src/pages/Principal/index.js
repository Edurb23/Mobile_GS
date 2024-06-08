import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import Logo from '../../../assets/logo.png';
import User from '../../../assets/user.png';
import MissaoFoto from '../../../assets/missao.png';
import ListaFoto from '../../../assets/lista.png';
import { useNavigation } from '@react-navigation/native';


export default function Home( ) {

  const navigation = useNavigation();

    const handleLogout = () => { 
        navigation.navigate('login')
        ToastAndroid.show("Voce fez Logout!!", ToastAndroid.BOTTOM)
    }

    const Conta = () => { 
        navigation.navigate('Conta')
    }

    const Missao = () => {
      navigation.navigate('Missao')
      
    }

    const Lista = () => {
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
      
      <TouchableOpacity style={styles.ellipse24} onPress={Conta}>
        <Image style={styles.user} source={User} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.ellipse26} onPress={Missao} >
        <Image style={styles.podcastsLeft} source={MissaoFoto} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.ellipse27} onPress={Lista}>
        <Image style={styles.podcastsCenter} source={ListaFoto} />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.rectangle25} onPress={handleLogout}>
        <Text style={styles.sair}>SAIR</Text>
      </TouchableOpacity>
    </View>
  );
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
    fontSize: 25,
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
  ellipse24: {
    position: 'absolute',
    width: 86,
    height: 89,
    left: 32,
    top: 346,
    backgroundColor: '#FFFFFF',
    borderColor: '#0A3A40',
    borderWidth: 1,
    borderRadius: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    width: 58,
    height: 64,
  },
  ellipse26: {
    position: 'absolute',
    width: 86,
    height: 89,
    left: 261,
    top: 346,
    backgroundColor: '#FFFFFF',
    borderColor: '#0A3A40',
    borderWidth: 1,
    borderRadius: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podcastsLeft: {
    width: 65,
    height: 61,
  },
  ellipse27: {
    position: 'absolute',
    width: 86,
    height: 89,
    left: 147,
    top: 345,
    backgroundColor: '#FFFFFF',
    borderColor: '#0A3A40',
    borderWidth: 1,
    borderRadius: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  podcastsCenter: {
    width: 65,
    height: 61,
  },
  rectangle25: {
    position: 'absolute',
    width: 126,
    height: 42,
    left: 124,
    top: 496,
    backgroundColor: '#0A3A40',
    borderColor: '#0A3A40',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sair: {
    color: '#F7F1F1',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.67,
  },
});
