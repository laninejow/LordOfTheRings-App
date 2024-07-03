import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export default function Timeline() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://the-one-api.dev/v2/movie', {
      headers: { Authorization: 'Bearer TL4ebRRDh0iAP8Hremrc' }
    }).then(response => {
      setEvents(response.data.docs);
    }).catch(error => {
      console.error(error);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timeline</Text>
      <FlatList
        data={events}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.runtimeInMinutes} minutes</Text>
          </View>
        )}
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
    padding: 8,
    marginBottom: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 16,
  },
});
