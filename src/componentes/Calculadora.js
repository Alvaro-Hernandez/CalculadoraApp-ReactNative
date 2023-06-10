import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {create, all} from 'mathjs';

const math = create(all);

const Calculadora = () => {
  const [result, setResult] = useState('');
  const {
    container,
    textContainer,
    resultContainer,
    resultText,
    buttonContainer,
    row,
    button,
    buttonEliminar,
    buttonFuncion,
    buttonText,
    footerContainer,
    footerText,
  } = style;
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
    <View style={container}>
      <Text style={textContainer}>Calculadora</Text>
      <View style={resultContainer}>
        <Text style={resultText}>{result}</Text>
      </View>
      <View style={buttonContainer}>
        <View style={row}>
          <TouchableOpacity style={buttonEliminar} onPress={limpiarResultado}>
            <Text style={buttonText}> C </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonFuncion}
            onPress={() => handleButtonPress('/')}>
            <Text style={buttonText}> / </Text>
          </TouchableOpacity>
        </View>
        <View style={row}>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('7')}>
            <Text style={buttonText}> 7 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('8')}>
            <Text style={buttonText}> 8 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('9')}>
            <Text style={buttonText}> 9 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonFuncion}
            onPress={() => handleButtonPress('*')}>
            <Text style={buttonText}> * </Text>
          </TouchableOpacity>
        </View>
        <View style={row}>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('4')}>
            <Text style={buttonText}> 4 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('5')}>
            <Text style={buttonText}> 5 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('6')}>
            <Text style={buttonText}> 6 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonFuncion}
            onPress={() => handleButtonPress('-')}>
            <Text style={buttonText}> - </Text>
          </TouchableOpacity>
        </View>
        <View style={row}>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('1')}>
            <Text style={buttonText}> 1 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('2')}>
            <Text style={buttonText}> 2 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('3')}>
            <Text style={buttonText}> 3 </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttonFuncion}
            onPress={() => handleButtonPress('+')}>
            <Text style={buttonText}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={row}>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('.')}>
            <Text style={buttonText}> . </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button}
            onPress={() => handleButtonPress('0')}>
            <Text style={buttonText}> 0 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonFuncion} onPress={calcularResultado}>
            <Text style={buttonText}> = </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={footerContainer}>
        <Text style={footerText}>Created By Alvaro Hernandez</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  textContainer: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F7F7F7',
    marginBottom: 20,
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F7F7F7',
  },
  buttonContainer: {
    width: 350,
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
    backgroundColor: '#009BFF',
    padding: 10,
    borderRadius: 5,
    margin: 4,
  },
  buttonEliminar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
    margin: 4,
  },
  buttonFuncion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7C00',
    padding: 10,
    borderRadius: 5,
    margin: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F7F7F7',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 10,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F7F7F7',
  },
});
export default Calculadora;
