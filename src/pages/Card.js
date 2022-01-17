import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import styles from '../styles/utils';

export default function Card() {
    const [valueTotal, setValueTotal] = useState(0);
    const [porcentage, setPorcentage] = useState(0);
    const [resultInstallmentsValue, setResultInstallmentsValue] = useState(0);

    function calculateCard() {
        if (valueTotal !== '' && porcentage !== '') {
            const result = (parseInt(valueTotal) / (100 - parseInt(porcentage)) * 100).toFixed(2);

            setResultInstallmentsValue(result);
        } else {
            Alert.alert('Preencha todos os campos');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.installments}>
                <Text style={styles.title}>COM JUROS DE {porcentage}%, VALOR É:</Text>
                <Text style={styles.valueInstallments}>R$ {resultInstallmentsValue}</Text>

                <View style={styles.inputsView}>
                    <TextInput style={styles.input} 
                     placeholder="R$ 0.00"
                     placeholderTextColor="#6EBE7B"
                     value={valueTotal}
                     keyboardType="numeric"
                     onChangeText={value => setValueTotal(value)}/>

                    <TextInput style={styles.input} 
                     placeholder="0%"
                     placeholderTextColor="#6EBE7B"
                     keyboardType="numeric"
                     value={porcentage}
                     onChangeText={value => setPorcentage(value)}
                    />


                    <TouchableOpacity style={styles.button} onPress={calculateCard}>
                        <AntDesign name="check" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}