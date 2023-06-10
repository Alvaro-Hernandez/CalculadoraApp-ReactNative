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

  return (
    <View>
      <View>
        <Text>{result}</Text>
      </View>
      <View>
        <View>
          <TouchableOpacity onPress={() => handleButtonPress('7')}>
            <Text> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('8')}>
            <Text> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('9')}>
            <Text> 9 </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleButtonPress('4')}>
            <Text> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('5')}>
            <Text> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('6')}>
            <Text> 6 </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleButtonPress('1')}>
            <Text> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('2')}>
            <Text> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('3')}>
            <Text> 3 </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleButtonPress('0')}>
            <Text> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('.')}>
            <Text> . </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={calcularResultado}>
            <Text> = </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleButtonPress('+')}>
            <Text> + </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('-')}>
            <Text> - </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleButtonPress('*')}>
            <Text> * </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleButtonPress('/')}>
            <Text> / </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={limpiarResultado}>
            <Text> C </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
