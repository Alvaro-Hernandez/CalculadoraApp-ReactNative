import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {create, all} from 'mathjs';

const math = create(all);

const Calculadora = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = value => {
    setResult(result + value);
  };

  const calcularResultado = () => {
    try {
      const evaluatedResult = math.evaluate(result);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult(error);
    }
  };

  const limpiarResultado = () => {
    setResult('');
  };
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: 300,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#800080',
    padding: 10,
    borderRadius: 5,
    margin: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Calculadora;
