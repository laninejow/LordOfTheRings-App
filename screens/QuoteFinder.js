import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import axios from 'axios';

export default function QuoteFinder() {
  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');

  const fetchQuote = () => {
    axios.get(`https://the-one-api.dev/v2/quote?character=${character}`, {
      headers: { Authorization: 'Bearer TL4ebRRDh0iAP8Hremrc' } 
    }).then(response => {
      setQuote(response.data.docs[0]?.dialog || 'No quotes found');
    }).catch(error => {
      console.error(error);
    });
  };

  return (
    <ImageBackground
      source={require('../assets/quote-bg.gif')} // Adjust the path as per your background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/ss-logo.png')} // Adjust the path as per your logo image
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>Quote Finder</Text>
        <TextInput
          style={styles.input}
          placeholder="Character ID"
          placeholderTextColor="#ffffff"
          value={character}
          onChangeText={setCharacter}
        />
        <Button
          title="Find Quote"
          onPress={fetchQuote}
          color="#f5c518" // Yellow background color for the button
          titleStyle={styles.buttonText} // Custom style for button text
        />
        <Text style={styles.quote}>{quote}</Text>
        <Image
          source={require('../assets/ring-bg.gif')} // Adjust the path as per your image
          style={styles.underQuoteImage}
          resizeMode="contain"
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -70,
  },
  logo: {
    width: 300,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#ffffff',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: '#ffffff',
  },
  quote: {
    fontSize: 18,
    color: '#ffffff',
    marginTop: 20,
    textAlign: 'center',
  },
  buttonText: {
    color: '#000000',
  },
  underQuoteImage: {
    width: 200, // Adjust width as needed
    height: 100, // Adjust height as needed
    marginTop: 20, // Adjust spacing from quote text
  },
});
