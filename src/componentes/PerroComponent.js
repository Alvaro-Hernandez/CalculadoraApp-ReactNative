import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Perro = ({nombre}) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        ¡Soy {nombre}, y estoy {isHungry ? 'Hambriento' : 'Lleno'}!
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={
          isHungry ? '¡Sirveme un poco de comida, por favor!' : '¡Gracias!'
        }
      />
      <Button
        onPress={() => {
          setIsHungry(true);
        }}
        disabled={isHungry}
        title={`Quieres darle comida a ${nombre}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#F5F5F5',
  },
  button: {
    marginVertical: 10,
    borderRadius: 10,
  },
});
export default Perro;
