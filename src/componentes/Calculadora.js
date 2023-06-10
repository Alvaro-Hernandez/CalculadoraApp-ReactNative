import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {create, all} from 'mathjs';

const math = create(all);

const Calculadora = () => {
  const [result, setResult] = useState('');

  const handleButtonPress = value => {
    setResult(result + value);
  };
};

export default Calculadora;
