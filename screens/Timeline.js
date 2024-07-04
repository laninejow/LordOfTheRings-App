import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';
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

  const renderItem = ({ item }) => (
    <View style={styles.eventContainer}>
      <View style={styles.timelineMarker} />
      <View style={styles.eventContent}>
        <Text style={styles.eventDate}>Date: {item.date}</Text>
        <Text style={styles.eventLocation}>Location: {item.location}</Text>
        <Text style={styles.eventDescription}>Description: {item.description}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground 
      style={styles.background}
    >
      <Text style={styles.title}>The Lord of The Rings Timeline</Text>
      <FlatList
        data={events}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        contentContainerStyle={styles.timeline}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 16,
    backgroundColor: ' ',
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    textAlign: 'center',
    marginVertical: 20,
  },
  timeline: {
    paddingVertical: 20,
  },
  eventContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  timelineMarker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFD700',
    marginRight: 20,
    marginTop: 10,
  },
  eventContent: {
    backgroundColor: '#4B4B4B',
    borderRadius: 10,
    padding: 15,
    flex: 1,
  },
  eventDate: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 5,
  },
  eventLocation: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 5,
  },
  eventDescription: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});
