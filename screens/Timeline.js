import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions } from 'react-native';

const timelineData = [
  {
    date: 'SA 1600',
    location: 'Mount Doom, Mordor',
    description: 'Sauron crafts the One Ring to rule all the other Rings of Power.',
  },
  {
    date: 'SA 1697',
    location: 'Rivendell',
    description: 'Elrond builds Rivendell after the destruction of Eregion in the War of the Elves and Sauron.',
  },
  {
    date: 'SA 2251',
    location: 'Middle-earth',
    description: 'The Nazgûl, also known as Ringwraiths, are first sighted.',
  },
  {
    date: 'SA 3209',
    location: 'Middle-earth',
    description: 'Isildur, future ring bearer and vanquisher of Sauron, is born.',
  },
  {
    date: 'SA 3441',
    location: 'Mount Doom, Mordor',
    description: 'Isildur cuts the One Ring from Sauron\'s hand, ending the Second Age.',
  },
  {
    date: 'TA 2',
    location: 'Anduin River',
    description: 'Isildur is killed by Orcs near the Anduin River, and the One Ring is lost.',
  },
  {
    date: 'TA 1000',
    location: 'Middle-earth',
    description: 'Five Wizards are sent to Middle-earth to counter Sauron\'s growing threat.',
  },
  {
    date: 'TA 1601',
    location: 'Eriador',
    description: 'The Shire is founded by Hobbits.',
  },
  {
    date: 'TA 2941',
    location: 'Mirkwood and Erebor',
    description: 'Bilbo Baggins finds the One Ring during the quest to reclaim Erebor from Smaug.',
  },
  {
    date: 'TA 3019',
    location: 'Mount Doom, Mordor',
    description: 'Frodo Baggins destroys the One Ring in the fires of Mount Doom, ending Sauron\'s reign.',
  }
];

export default function Timeline() {
  const renderItem = ({ item, index }) => (
    <View style={styles.eventContainer}>
      <View style={styles.timeline}>
        <View style={styles.timelineMarker} />
        {index < timelineData.length - 1 && <View style={styles.timelineLine} />}
      </View>
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
        data={timelineData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.timelineList}
      />
    </ImageBackground>
  );
}

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    textAlign: 'center',
    marginVertical: 20,
  },
  timelineList: {
    paddingVertical: 20,
  },
  eventContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  timeline: {
    alignItems: 'center',
  },
  timelineMarker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFD700',
    zIndex: 1,
  },
  timelineLine: {
    width: 2,
    height: height * 0.15, // Adjust the height based on your preference
    backgroundColor: '#FFD700',
    position: 'absolute',
    top: 10,
    zIndex: 0,
  },
  eventContent: {
    backgroundColor: '#4B4B4B',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginLeft: 20,
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
