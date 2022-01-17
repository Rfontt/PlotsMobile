import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E2E2E',
    },

    installments: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        color: 'white',
    },
    
    valueInstallments: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginTop: 6,
    },

    totalSpendValue: {
        fontSize: 18,
        marginTop: 30,
        color: 'gray',
    },

    inputsView: {
        alignItems: 'center',
    },  

    inputsView: {
        margin: 50,
    },  

    input: {
        height: 50,
        width: 250,
        marginTop: 30,
        borderWidth: 1,
        borderColor: '#6EBE7B',
        borderRadius: 4,
        padding: 10,
        color: 'white',
    },

    button: {
        alignItems: "center",
        backgroundColor: "#6EBE7B",
        padding: 10,
        height: 50,
        marginTop: 30,
        borderRadius: 4
    }
});

export default styles;