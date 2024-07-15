import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://the-one-api.dev/v2/character', {
      headers: { Authorization: 'Bearer TL4ebRRDh0iAP8Hremrc' } 
    }).then(response => {
      setCharacters(response.data.docs);
      setLoading(false);
    }).catch(error => {
      console.error(error);
      setLoading(false);
    });
  }, []);

  const renderCharacterItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/ss-logo.png')} // Adjust the path as per your logo image
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.charactersContainer}>
        <Text style={styles.title}>Character Names</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#ffffff" />
        ) : (
          <FlatList
            data={characters}
            keyExtractor={item => item._id}
            renderItem={renderCharacterItem}
            contentContainerStyle={styles.flatListContent}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingHorizontal: 16,
    paddingTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 16,
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: -60,
  },
  charactersContainer: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '300'
  },
  card: {
    backgroundColor: '#1f1f1f',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  item: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '200', // Adjusted fontWeight to 'normal'
  },
  description: {
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
  },
  flatListContent: {
    paddingBottom: 16,
  },
});
