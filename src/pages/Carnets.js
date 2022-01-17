import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/utils';
import { AntDesign } from '@expo/vector-icons'; 

export default function Carnets() {
    const [valueTotal, setValueTotal] = useState(0);
    const [installments, setInstallments] = useState(0); 
    const [porcentage, setPorcentage] = useState(0);
    const [resultInstallmentsValue, setResultInstallmentsValue] = useState(0);
    const [totalSpend, setTotalSpend] = useState('');

    function calculateCarnet() {
        if (valueTotal !== '' && installments !== '' && porcentage !== '') {
            if (parseInt(installments) !== 0) {
                const interestRate = (parseInt(valueTotal) * (parseInt(porcentage) / 100) * parseInt(installments)).toFixed(2);
                const result = ((parseInt(interestRate) + parseInt(valueTotal)) / parseInt(installments)).toFixed(2);
                const totalSpendValue = (parseInt(interestRate) + parseInt(valueTotal)).toFixed(2);

                setTotalSpend(totalSpendValue);
                setResultInstallmentsValue(result);
            } else {
                Alert.alert('O número de parcelas deve ser diferente de 0!');
                setResultInstallmentsValue(0);
            }
        } else {
            Alert.alert('Preencha todos os campos!');
        }
    }

    return (
        <View style={styles.container}>
           <View style={styles.installments}>
                <Text style={styles.title}>FICA {installments}X, COM PARCELAS DE:</Text>
                <Text style={styles.valueInstallments}>R$ {resultInstallmentsValue}</Text>

                {
                    totalSpend !== '' ? 
                        <Text style={styles.totalSpendValue}>VALOR FINAL TOTAL: R$ {totalSpend}</Text>
                    : null
                }

               <View style={styles.inputsView}>
                    <TextInput style={styles.input} 
                     placeholder="R$ 0.00"
                     placeholderTextColor="#6EBE7B"
                     value={valueTotal}
                     keyboardType="numeric"
                     onChangeText={value => setValueTotal(value)}/>

                     <TextInput style={styles.input} 
                     placeholder="Nº PARCELAS"
                     placeholderTextColor="#6EBE7B"
                     keyboardType="numeric"
                     value={installments} 
                     onChangeText={value => setInstallments(value)}/>

                    <TextInput style={styles.input} 
                     placeholder="0%"
                     placeholderTextColor="#6EBE7B"
                     keyboardType="numeric"
                     value={porcentage}
                     onChangeText={value => setPorcentage(value)}
                     />

                    <TouchableOpacity style={styles.button} onPress={calculateCarnet}>
                        <AntDesign name="check" size={24} color="black" />
                    </TouchableOpacity>
               </View>
            </View>
        </View>
    );
}