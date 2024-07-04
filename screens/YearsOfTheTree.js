import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const timelineData = [
  {
    year: '1',
    era: 'Year of The Trees',
    description: 'Yavanna creates the Two Trees amidst the hill of Ezellohar in Valinor. With Telperions first blooming the new Count of Time begins. Over the many centuries, Melkor sleeps in Utumno. Orome hunts throughout Middle-earth. Melkor raises the Hithaeglier to hinder his efforts.',
  },
  {     
    year: '1000',
    era: 'Year of The Trees',
    description: 'The Valar hold council, for Yavanna and Oromë report that Melkor might rise once more in power. They discuss the Children of Ilúvatar. Over the next fifty years, Varda fashions new stars and begins to organize them and those already wrought into constellations. Some time before the waking of the Elves, Aulë secretly creates the 7 Fathers of the Dwarves and their 6 spouses. Ilúvatar adopts them and they are put to sleep.',
  },
  {
    year: '1050',
    era: 'Year of The Trees',
    description: 'Varda forms the Valacirca. The first 144 Elves (Minyar, Tatyar, and Nelyar) awake in Cuiviénen. The First Age begins. Melian travels to Beleriand after ascending Taniquetil to see the stars.',
  },
  {
    year: '1080',
    era: 'Year of The Trees',
    description: 'Spies of Melkor discover the Elves and afflict them. It is possible through the torture of Melkor that Orcs are first created.',
  },
  {
    year: '1085',
    era: 'Year of The Trees',
    description: 'Oromë discovers the Elves, and calls them the Eldar. The Eldar are afraid of Oromë and blame him for Melkors work.',
  },
  {
    year: '1086',
    era: 'Year of The Trees',
    description: 'Oromë returns to Valinor and witnesses to his peers about the Children of Ilúvatar. Oromë returns to the Elves while the Valar consider his message.',
  },
  {
    year: '1090',
    era: 'Year of The Trees',
    description: 'The Valar make war on Melkor in the Battle of the Powers. The earth is shaken. The shores of Beleriand are formed and bays are created on the North. Over the next two years, Melkor is defeated and retreats into Utumno.',
  },
  {
    year: '1092',
    era: 'Year of The Trees',
    description: 'The siege of Utumno begins. The North is desolated and the Sea widened',
  },
  {
    year: '1099',
    era: 'Year of The Trees',
    description: 'The Battle of the Powers ends as the Valar storm the final defenses of Utumno. Tulkas captures Melkor and binds him with Angainor. Sauron evades capture.',
  },
  {
    year: '1100',
    era: 'Year of The Trees',
    description: 'Melkor is brought back to Valinor, judged and cast into the Halls of Mandos for three Ages of the Valar (300 Valian Years).',
  },
  {
    year: '1101',
    era: 'Year of The Trees',
    description: 'The Valar make council about the protection of the Children of Ilúvatar and decide to bring them to Valinor. Oromë extends this invitation to the Elves.',
  },
  {
    year: '1102',
    era: 'Year of The Trees',
    description: 'The Elves are unwilling to leave Cuiviénen. Oromë invites three Elven ambassadors, Ingwë, Finwë and Elwë to come to Valinor with the hope that they can convince their people to come as well..',
  },
  {
    year: '1104',
    era: 'Year of The Trees',
    description: 'The ambassadors return to Cuiviénen and invite the Elves to return with them to Valinor.',
  },
  {
    year: '1105',
    era: 'Year of The Trees',
    description: 'First Sundering of the Elves at Cuiviénen. The Vanyar led by Ingwë, the Noldor led by Finwë and the Teleri led by Elwë and Olwë. The Avari, led by Morwë and Nurwë, stay in Cuiviénen. The Eldar depart, pass Sea of Helcar and turn west. Some are terrified by the smokes of war and go back.',
  },
  {
    year: '1115',
    era: 'Year of The Trees',
    description: 'Second Sundering of the Elves: The Eldar host passes Greenwood the Great and comes to the River Anduin. Some Eldar, afterwards known as Lindar, wish to stay there. Terrified by the Hithaeglir, a part of them go south led by Lenwë.',
  },
  {
    year: '1125',
    era: 'Year of The Trees',
    description: 'The Vanyar and Noldor enter Beleriand; the foremost of them pass Sirion and reach the shores. Oromë goes to Aman for counsel.',
  },
  {
    year: '1128',
    era: 'Year of The Trees',
    description: 'The unwilling Teleri also come to Beleriand and dwell east of Gelion. Elwë keeps friendship with Finwë and the Noldor to the west.',
  },
  {
    year: '1130',
    era: 'Year of The Trees',
    description: 'Elwë, returning from a meeting with Finwë, meets Melian in Nan Elmoth. They fall into a trance.',
  },
  {
    year: '1132',
    era: 'Year of The Trees',
    description: 'Ulmo brings an island to the Bay of Balar. The Vanyar and Noldor forget their fear for the Sea and embark upon it while the Teleri stay in Beleriand to look for Elwë. While departing, the island breaks and leaves the Isle of Balar behind. After learning of the departure of the Vanyar and Noldor, Olwë leads some Teleri to the western shores where they meet Ossë and Uinen.',
  },
  {
    year: '1133',
    era: 'Year of The Trees',
    description: 'The Vanyar and Noldor enter Valinor and build Eldamar. The Valar open the rift Calacirya in Pelóri so that the Light of Valinor reaches Eldamar. The Elves begin the building of Tirion on the hill Túna inside Calacirya.',
  },
  {
    year: '1140',
    era: 'Year of The Trees',
    description: 'The Vanyar and Noldor found Tirion and Mindon Eldaliéva. Some Vanyar yearn for the Trees and move closer to Valinor.',
  },
  {
    year: '1142',
    era: 'Year of The Trees',
    description: 'Yavanna gives the Noldor the White Tree.',
  },
  {
    year: '1142',
    era: 'Year of The Trees',
    description: 'Yavanna gives the Noldor the White Tree.',
  },
  {
    year: '1142',
    era: 'Year of The Trees',
    description: 'Yavanna gives the Noldor the White Tree.',
  },
  {
    year: '1142',
    era: 'Year of The Trees',
    description: 'Yavanna gives the Noldor the White Tree.',
  },
  {
    year: '1142',
    era: 'Year of The Trees',
    description: 'Yavanna gives the Noldor the White Tree.',
  },
  {
    year: '1142',
    era: 'Year of The Trees',
    description: 'Yavanna gives the Noldor the White Tree.',
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
      <Text style={styles.title}>Year of The Trees</Text>
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
    backgroundColor: '#fffff',

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
