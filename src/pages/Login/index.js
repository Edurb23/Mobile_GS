import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import api from '../../api/api';
import Logo from '../../../assets/logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      console.log('Tentando logar com:', email, password);
      const response = await api.post('/login', {
        email: email,
        password: password,
      });

      console.log('Resposta da API:', response.data);

      if (response.data.token) {
        await AsyncStorage.setItem('token', response.data.token);
        ToastAndroid.show('Login Feito', ToastAndroid.SHORT);
        navigation.navigate('Home'); 
      } else {
        ToastAndroid.show('Falha no Login: Email ou senha inválidos', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error('Erro ao tentar logar:', error.response ? error.response.data : error.message);
      ToastAndroid.show(`Login Failed: ${error.message}`, ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>J.A.R.V.I.S</Text>
      <Image 
        source={Logo} 
        style={styles.logo} 
        resizeMode='cover'
      />
      <Text style={styles.label}>Digite seu email</Text>
      <TextInput
        style={styles.emailInputBox}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text style={styles.passwordLabel}>Digite sua senha</Text>
      <TextInput
        style={styles.passwordInputBox}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
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
    left: 30,
    top: 120,
    transform: [{ rotate: '18deg' }],
  },
  emailInputBox: {
    width: 293,
    height: 45,
    position: 'absolute',
    left: 41,
    top: 322,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0A3A40',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  label: {
    width: 123,
    height: 18,
    position: 'absolute',
    left: 52,
    top: 297,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.67,
    color: '#000000',
  },
  passwordInputBox: {
    width: 293,
    height: 45,
    position: 'absolute',
    left: 41,
    top: 417,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#0A3A40',
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  passwordLabel: {
    width: 128,
    height: 18,
    position: 'absolute',
    left: 49,
    top: 392,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.67,
    color: '#000000',
  },
  loginButton: {
    position: 'absolute',
    width: 126,
    height: 42,
    left: 125,
    top: 518,
    backgroundColor: '#0A3A40',
    borderWidth: 1,
    borderColor: '#0A3A40',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  loginButtonText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.67,
    color: '#F7F1F1',
  },
});
