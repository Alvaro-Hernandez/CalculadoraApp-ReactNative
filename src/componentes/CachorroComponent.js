import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Cachorro = () => {
  const [isHungry, setIsHungry] = useState(true);

  const handleFeed = () => {
    setIsHungry(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFeed} style={styles.button}>
        <Image
          source={{
            uri: isHungry
              ? 'https://images.pexels.com/photos/17043936/pexels-photo-17043936/free-photo-of-playa-vacaciones-arena-animal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              : 'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Cachorro;
