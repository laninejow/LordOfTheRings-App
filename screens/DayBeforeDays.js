import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const timelineData = [
  {
    year: '1',
    era: 'Valian Years',
    description: 'The First War and the Marring of Arda.',
  },
  {
    year: '1500',
    era: 'Valian Years',
    description: 'Tulkas enters Arda and Melkor flees.',
  },
  {
    year: '1900',
    era: 'Valian Years',
    description: 'The completion of Arda. The Valar create the Two Lamps and settle at Almaren. Beginning of the Spring of Arda.',
  },
  {
    year: '3400',
    era: 'Valian Years',
    description: 'Tulkas weds Nessa. Melkor secretly returns to Arda, raises the Iron Mountains and delves Utumno. This partially blights the Spring of Arda.',
  },
  {
    year: '3450',
    era: 'Valian Years',
    description: 'Melkor overthrows the Two Lamps, forming the Seas of Helcar and Ringil. Almaren is destroyed. In order to preserve life on the earth, Yavanna sets most living things into a long sleep. End of the Spring of Arda.',
  },
  {
    year: '3500',
    era: 'Valian Years',
    description: 'The Valar raise the Pelóri and settle in Aman. The Two Trees are grown in Valinor.',
  },
];

export default function DayBeforeDays({ navigation }) {
  const renderItem = ({ item, index }) => (
    <View style={styles.eventContainer}>
      <View style={styles.timeline}>
        <View style={styles.timelineMarker} />
        {index < timelineData.length - 1 && <View style={styles.timelineLine} />}
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventYear}>Year: {item.year}</Text>
        <Text style={styles.eventEra}>Era: {item.era}</Text>
        <Text style={styles.eventDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground 
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Timeline')} style={styles.backButton}>
          <Text style={styles.backButtonText}>&#x2190;</Text>
        </TouchableOpacity>
      <Text style={styles.title}>Days Before Days</Text>
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFD700',
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    textAlign: 'center',
    flex: 1,
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
    height: height * 0.9,
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
  eventYear: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 5,
  },
  eventEra: {
    color: '#FFD700',
    fontSize: 16,
    marginBottom: 5,
  },
  eventDescription: {
    color: '#cbcbcb',
    fontSize: 14,
  },
});
