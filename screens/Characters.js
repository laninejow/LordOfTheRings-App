import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Characters({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

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

  const handleFavorite = (character) => {
    Alert.alert(
      "Add to Favorites",
      "Do you want to add this character to your favorites?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
            setFavorites((prevFavorites) => [...prevFavorites, character]);
            Alert.alert("Added to Favorites", `${character.name} has been added to your favorites.`);
          }
        }
      ]
    );
  };

  const renderCharacterItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.item}>{item.name}</Text>
      <TouchableOpacity onPress={() => handleFavorite(item)}>
        <Icon name="heart" size={24} color="#FFD700" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/ss-logo.png')}
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
        <TouchableOpacity onPress={() => navigation.navigate('Favorites', { favorites })} style={styles.favoritesButton}>
          <Text style={styles.favoritesButtonText}>Go to Favorites</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: '200',
    textAlign: 'left',
    flex: 1,
  },
  description: {
    fontSize: 14,
    color: '#cccccc',
    textAlign: 'center',
  },
  flatListContent: {
    paddingBottom: 16,
  },
  favoritesButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  favoritesButtonText: {
    color: '#000000',
    fontSize: 18,
  },
});
