import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

const logo = require('../assets/ss-logo.png'); // Replace with your actual logo path

const timelineData = [
  {
    year: '1',
    era: 'Fourth Age',
    description: 'The Fourth Age begins in the reckoning of the Shire. Birth of Eldarion, son of King Elessar and Queen Arwen.',
  },
  {
    year: '2',
    era: 'Fourth Age',
    description: 'Death of Adelard Took. Birth of Frodo Gardner.',
  },
  {
    year: '4',
    era: 'Fourth Age',
    description: 'Birth of Rose Gardner.',
  },
  {
    year: '6',
    era: 'Fourth Age',
    description: 'Will Whitfoot resigns and Samwise is elected Mayor. Merry Gardner born. Peregrin Took marries Diamond of Long Cleeve. King Elessar issues an edict for the protection of the Shire and Drúadan Forest.',
  },
  {
    year: '7',
    era: 'Fourth Age',
    description: 'Death of Gaffer Gamgee.',
  },
  {
    year: '8',
    era: 'Fourth Age',
    description: 'Birth of Pippin Gardner.',
  },
  {
    year: '9',
    era: 'Fourth Age',
    description: 'Birth of Faramir Took I son of Peregrin Took. Deaths of Merimac Brandybuck and Vigo Boffin.',
  },
  {
    year: '10',
    era: 'Fourth Age',
    description: 'Birth of Goldilocks Gardner. Death of Odovacar Bolger.',
  },
  {
    year: '11',
    era: 'Fourth Age',
    description: 'Death of Saradoc Brandybuck. Meriadoc becomes Master of Buckland. Birth of Hamfast Gardner.',
  },
  {
    year: '12',
    era: 'Fourth Age',
    description: 'Birth of Daisy Gardner.',
  },
  {
    year: '13',
    era: 'Fourth Age',
    description: 'Death of Paladin Took II. Peregrin Took becomes Thain. Samwise elected Mayor for the second time.',
  },
  {
    year: '14',
    era: 'Fourth Age',
    description: 'Death of Olo Proudfoot. Birth of Primrose Gardner.',
  },
  {
    year: '15',
    era: 'Fourth Age',
    description: 'King Elessar visits Annúminas and gives gifts. Death of Glóin. Birth of Bilbo Gardner.',
  },
  {
    year: '17',
    era: 'Fourth Age',
    description: 'Birth of Ruby Gardner.',
  },
  {
    year: '19',
    era: 'Fourth Age',
    description: 'Birth of Robin Gardner. Death of Farmer Cotton.',
  },
  {
    year: '20',
    era: 'Fourth Age',
    description: 'Samwise elected Mayor for the third time. Elves return to Ithilien under Legolas.',
  },
  {
    year: '21',
    era: 'Fourth Age',
    description: 'Samwise, Rose, and Elanor travel to Gondor. Birth of Tolman Gardner.',
  },
  {
    year: '22',
    era: 'Fourth Age',
    description: 'Samwise, Rose, and Elanor depart Gondor. Death of Filibert Bolger.',
  },
  {
    year: '27',
    era: 'Fourth Age',
    description: 'Samwise elected Mayor for the fourth time.',
  },
  {
    year: '30',
    era: 'Fourth Age',
    description: 'Elanor Gardner weds Fastred of Greenholm. The Westmarch is gifted to the Shire.',
  },
  {
    year: '31',
    era: 'Fourth Age',
    description: 'Birth of Elfstan Fairbairn son of Fastred and Elanor.',
  },
  {
    year: '33',
    era: 'Fourth Age',
    description: 'Death of Imrahil. Samwise elected Mayor for the fifth time.',
  },
  {
    year: '34',
    era: 'Fourth Age',
    description: 'Samwise elected Mayor for the sixth time. Faramir Took I weds Goldilocks Gardner.',
  },
  {
    year: '48',
    era: 'Fourth Age',
    description: 'Samwise becomes Mayor for seventh and final time.',
  },
  {
    year: '55',
    era: 'Fourth Age',
    description: 'Samwise Gamgee ends his last term as Mayor of Michel Delving.',
  },
  {
    year: '61',
    era: 'Fourth Age',
    description: 'Death of Rose Gamgee. Samwise departs Middle-earth.',
  },
  {
    year: '63',
    era: 'Fourth Age',
    description: 'Peregrin commissions a copy of the Red Book. Meriadoc and Peregrin depart the Shire.',
  },
  {
    year: '67',
    era: 'Fourth Age',
    description: 'Death of Prince Elphir. Alphros becomes Prince of Dol Amroth.',
  },
  {
    year: '80',
    era: 'Fourth Age',
    description: 'Birth of Harding Gardner, Samwise Gamgee\'s great-grandson.',
  },
  {
    year: '82',
    era: 'Fourth Age',
    description: 'Death of Faramir. Elboron becomes Prince of Ithilien and Steward of the Reunited Kingdom.',
  },
  {
    year: '91',
    era: 'Fourth Age',
    description: 'Death of Dwalin.',
  },
  {
    year: '95',
    era: 'Fourth Age',
    description: 'Death of Alphros.',
  },
  {
    year: '120',
    era: 'Fourth Age',
    description: '1 March: King Elessar dies. It is said that the beds of Meriadoc and Peregrin are set beside the bed of the great king. Eldarion becomes King of the Reunited Kingdom. Legolas builds a grey ship in Ithilien, and with Gimli sails down Anduin and so over the Sea. End in Middle-earth of the Fellowship of the Ring.',
  },
  {
    year: '121',
    era: 'Fourth Age',
    description: 'Death of Arwen Undómiel.',
  },
  {
    year: '171',
    era: 'Fourth Age',
    description: 'A copy of the Thains Book is completed in Minas Tirith by Findegil, the Kings Writer; probably commissioned by an unnamed great-grandson of Peregrin Took. The copy is sent to the Shire, where it is kept in the library at Great Smials.',
  },
  {
    year: 'After 171',
    era: 'Fourth Age',
    description: 'Durin VII is born, grows to adulthood, and retakes Khazad-dûm for the Dwarves of Durins Folk.',
  },
  {
    year: '185',
    era: 'Fourth Age',
    description: 'Death of Harding of the Hill.',
  },
  {
    year: '210',
    era: 'Fourth Age',
    description: 'Possible death date of Borlas\' wife.',
  },
  {
    year: '217',
    era: 'Fourth Age',
    description: 'Possible date when Berelach, Beregonds grandson, was given a high command, causing his visits to Pen-arduin to see his father to become short and not very often.',
  },
  {
    year: '220',
    era: 'Fourth Age',
    description: 'Possible date for when Herumors dark cult was active in Gondor; the mysterious disappearance of a few Shipmen and a small vessel of the Kings Ships; Berelachs April visit to Pen-arduin;  Borlas later discussion with Saelon about the nature of evil; the discovery and overthrow of Herumors dark cult. About this time, Eldarions reign as High King comes to an end.',
  },
  {
    year: 'Unknown',
    era: 'Fourth Age',
    description: 'Celeborn, Círdan, and any other Elves in Middle-earth who remember the First Age depart the Grey Havens on the Last Ship.',
  }
  
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
    <ImageBackground style={styles.background}>
      <View style={styles.centerContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Fourth Age</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Timeline')} style={styles.backButton}>
          <Text style={styles.backButtonText}>&#x2190;</Text>
        </TouchableOpacity>
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
    backgroundColor: '#251F1F',
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  logo: {
    width: 350, // Adjust width and height as needed
    height: 150,
    marginTop: -10,
  },
  title: {
    fontSize: 24,
    color: '#FFFF',
    marginVertical: 20,
    marginTop: -46,
  },
  backButton: {
    padding: 10,
    marginTop: -30,
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 24,
    color: '#FFFF',
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
    backgroundColor: '#584443',
    zIndex: 1,
  },
  timelineLine: {
    width: 2,
    height: height * 0.9,
    backgroundColor: '#3C312F',
    position: 'absolute',
    top: 10,
    zIndex: 0,
  },
  eventContent: {
    backgroundColor: '#584443',
    borderRadius: 10,
    padding: 15,
    flex: 1,
    marginLeft: 20,
    opacity: 0.8, // Adjust the opacity value as needed
  },
  eventYear: {
    color: '#FFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  eventEra: {
    color: '#FFFF',
    fontSize: 16,
    marginBottom: 5,
  },
  eventDescription: {
    color: '#cbcbcb',
    fontSize: 14,
  },
});