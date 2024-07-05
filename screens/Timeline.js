import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function Timeline({ navigation }) {
  return (
    <ImageBackground 

      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DaysBeforeDays')}>
          <Text style={styles.buttonText}>Days Before Days</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('YearsOfTheTree')}>
          <Text style={styles.buttonText}>Years of the Trees</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FirstAge')}>
          <Text style={styles.buttonText}>First Age</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SecondAge')}>
          <Text style={styles.buttonText}>Second Age</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ThirdAge')}>
          <Text style={styles.buttonText}>Third Age</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FourthAge')}>
          <Text style={styles.buttonText}>Fourth Age</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%', // Ensure the container has a fixed width
  },
  button: {
    backgroundColor: 'rgba(255, 215, 0, 0.7)', 
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    width: '100%', // Ensure all buttons have the same width as the container
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
