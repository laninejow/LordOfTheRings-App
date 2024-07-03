import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.title}>Quote Finder</Text>
      <TextInput
        style={styles.input}
        placeholder="Character ID"
        value={character}
        onChangeText={setCharacter}
      />
      <Button title="Find Quote" onPress={fetchQuote} />
      <Text style={styles.quote}>{quote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  quote: {
    marginTop: 16,
    fontSize: 18,
    fontStyle: 'italic',
  },
});
