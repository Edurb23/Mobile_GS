import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import React, { useState, useEffect} from 'react';
import Logo from '../../../assets/logo.png';
import api from '../../api/api';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';


export default function index() {
    
    const [selectedFuncionario, setSelectedFuncionario] = useState('');
    const [selectedFuncao, setSelectedFuncao] = useState('');
    const [selectedDrone, setSelectedDrone] = useState('');
    const [selectedMissao, setSelectedMissao] = useState('');


    const [funcionarios, setFuncionarios] = useState([]);
    const [funcoes, setFuncoes] = useState([]);
    const [drones, setDrones] = useState([]);
    const [missoes, setMissoes] = useState([]);

    useEffect(() => {
        api.get('/funcionarios/missao')
            .then(response => setFuncionarios(response.data))
            .catch(error => console.log(error));

        api.get('/funcoes')
            .then(response => setFuncoes(response.data))
            .catch(error => console.log(error));

        api.get('/drones')
            .then(response => setDrones(response.data))
            .catch(error => console.log(error));

        api.get('/missoes')
            .then(response => setMissoes(response.data))
            .catch(error => console.log(error));
    }, []);


    const navigation = useNavigation();


    const handleCriar = () => {
        const novaMissao = {
            funcionario: selectedFuncionario,
            funcao: selectedFuncao,
            drone: selectedDrone,
            missao: selectedMissao
        };

        api.post('/add/missao', novaMissao)
            .then(response => {
                console.log(response.data.message);
                navigation.navigate('Lista', { listaMissoes: response.data.lista_missoes });
            })
            .catch(error => console.log(error));
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>J.A.R.V.I.S</Text>
            <Image
                style={styles.logo}
                source={Logo}
            />
            <View style={styles.line} />


            <View style={styles.dropdownContainerFuncionario}>
                <Picker
                    selectedValue={selectedFuncionario}
                    style={styles.dropdown}
                    onValueChange={(itemValue) => setSelectedFuncionario(itemValue)}
                >
                    {funcionarios.map((funcionario, index) => (
                        <Picker.Item key={index} label={funcionario} value={funcionario} />
                    ))}
                </Picker>
            </View>

            <View style={styles.dropdownContainerFuncao}>
                <Picker
                    selectedValue={selectedFuncao}
                    style={styles.dropdown}
                    onValueChange={(itemValue) => setSelectedFuncao(itemValue)}
                >
                    {funcoes.map((funcao, index) => (
                        <Picker.Item key={index} label={funcao} value={funcao} />
                    ))}
                </Picker>
            </View>

            <View style={styles.dropdownContainerDrone}>
                <Picker
                    selectedValue={selectedDrone}
                    style={styles.dropdown}
                    onValueChange={(itemValue) => setSelectedDrone(itemValue)}
                >
                    {drones.map((drone, index) => (
                        <Picker.Item key={index} label={drone} value={drone} />
                    ))}
                </Picker>
            </View>

            <View style={styles.dropdownContainerMissao}>
                <Picker
                    selectedValue={selectedMissao}
                    style={styles.dropdown}
                    onValueChange={(itemValue) => setSelectedMissao(itemValue)}
                >
                    {missoes.map((missao, index) => (
                        <Picker.Item key={index} label={missao} value={missao} />
                    ))}
                </Picker>
            </View>



            <TouchableOpacity onPress={handleCriar}>
                <View style={styles.button}>
                    <Text style={styles.label}>CRIAR</Text>
                </View>
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
    dropdownContainerFuncionario: {
        position: 'absolute',
        left: 44,
        top: 314,
        width: 293,
        height: 45,
      },
      labelFuncionario: {
        position: 'absolute',
        left: 125,
        top: -20,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: 0.67,
        color: '#000000',
      },
      dropdownContainerFuncao: {
        position: 'absolute',
        left: 44,
        top: 392,
        width: 293,
        height: 45,
      },
      labelFuncao: {
        position: 'absolute',
        left: 125,
        top: -20,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: 0.67,
        color: '#000000',
      },
      dropdownContainerDrone: {
        position: 'absolute',
        left: 44,
        top: 470,
        width: 293,
        height: 45,
      },
      labelDrone: {
        position: 'absolute',
        left: 125,
        top: -20,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: 0.67,
        color: '#000000',
      },
      dropdownContainerMissao: {
        position: 'absolute',
        left: 44,
        top: 548,
        width: 293,
        height: 45,
      },
      labelMissao: {
        position: 'absolute',
        left: 125,
        top: -20,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: 0.67,
        color: '#000000',
      },
      dropdown: {
        width: 293,
        height: 45,
        backgroundColor: '#FFFFFF',
        borderColor: '#0A3A40',
        borderWidth: 1,
        borderRadius: 12,
      },
    button: {
        position: 'absolute',
        left: 127,
        top: 630,
        width: 126,
        height: 42,
        backgroundColor: '#0A3A40',
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        letterSpacing: 0.67,
        color: '#FFFFFF',
    },

})