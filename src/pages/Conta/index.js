import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet,  } from 'react-native';
import Logo from '../../../assets/logo.png'; 
import User from '../../../assets/user.png';
import api from '../../api/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Conta() {
  const [funcionario, setFuncionario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await api.get('/funcionarios', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setFuncionario(response.data);
      } catch (error) {
        console.error('Failed to fetch employee data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFuncionario();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!funcionario) {
    return <Text>Failed to load employee data</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>J.A.R.V.I.S</Text>
      <Image style={styles.logo} source={Logo} />
      <View style={styles.ellipse24}>
        <Image style={styles.user} source={User} />
      </View>
      <View style={styles.rectangle31}>
        <Text style={styles.nome}>{funcionario.nome}</Text>
      </View>
      <View style={styles.rectangle25}>
        <Text style={styles.cpf}>{funcionario.cpf}</Text>
      </View>
      <View style={styles.rectangle26}>
        <Text style={styles.profession}>{funcionario.cargo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  ellipse24: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  user: {
    width: 50,
    height: 50,
  },
  rectangle31: {
    width: '80%',
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rectangle25: {
    width: '80%',
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
  },
  cpf: {
    fontSize: 18,
  },
  rectangle26: {
    width: '80%',
    padding: 10,
    backgroundColor: '#ccc',
    alignItems: 'center',
    marginBottom: 10,
  },
  profession: {
    fontSize: 18,
  },
});
