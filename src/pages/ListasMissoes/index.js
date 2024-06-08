import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import Logo from '../../../assets/logo.png';

export default function listaMissoes() {
    
    const [missoes, setMissoes] = useState([]);


    useEffect(() => {
        api.get('/todas_missoes')
            .then(response => setMissoes(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>J.A.R.V.I.S</Text>
            <Image
                style={styles.logo}
                source={Logo}
            />
            <View style={styles.line} />
            <ScrollView style={styles.missaoItem}>
                {missoes.map((missao, index) => (
                    <View key={index} >
                        <Text style={styles.missaoText}>{`Funcionário: ${missao.funcionario}`}</Text>
                        <Text style={styles.missaoText}>{`Função: ${missao.funcao}`}</Text>
                        <Text style={styles.missaoText}>{`Drone: ${missao.drone}`}</Text>
                        <Text style={styles.missaoText}>{`Missão: ${missao.missao}`}</Text>
                    </View>
                ))}
            </ScrollView>

            
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
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
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
        marginBottom: 5,
    },

    button: {
        position: 'absolute',
        width: 218,
        height: 42,
        left: 79,
        top: 665,
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
});