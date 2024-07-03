import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://the-one-api.dev/v2/character', {
      headers: { Authorization: 'Bearer TL4ebRRDh0iAP8Hremrc' } 
    }).then(response => {
      setCharacters(response.data.docs);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Characters</Text>
      <FlatList
        data={characters}
        keyExtractor={item => item._id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  item: {
    fontSize: 18,
    marginBottom: 8,
  },
});
