import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Favorites({ route }) {
  const { favorites } = route.params || {};
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/ss-logo.png')} style={styles.logo} />
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backButtonText}>&#x2190;</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Favorite Characters</Text>
      {favorites && favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )}
          contentContainerStyle={styles.flatListContent}
        />
      ) : (
        <Text style={styles.info}>No favorite characters added yet.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#FFFF',
    textAlign: 'center',
    marginTop: -50,
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 4,
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFF',
  },
  title: {
    fontSize: 24,
    color: '#FFFF',
    textAlign: 'center',
    marginTop: -50,
    marginBottom: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFF',
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
    fontWeight: '200',
  },
  info: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  flatListContent: {
    paddingBottom: 16,
  },
});
