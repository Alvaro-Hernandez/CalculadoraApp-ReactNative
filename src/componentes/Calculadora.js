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
};

export default Calculadora;
