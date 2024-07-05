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
    year: '1149',
    era: 'Year of The Trees',
    description: 'Finwë prays to Ulmo to bring the Teleri to Valinor. However, Ossë is grieved to lose the Teleri and persuades some to stay with him in Beleriand. These are called the Falathrim afterwards. Círdan of the Falathrim establishes the havens of Brithombar and Eglarest. Ossë teaches them shipcraft.',
  },
  {
    year: '1150',
    era: 'Year of The Trees',
    description: 'Olwë and the most part of the Teleri leave Beleriand on Tol Eressëa. The rest of the Teleri remain to search for Elwë and are named the Eglath.',
  },
  {
    year: '1151',
    era: 'Year of The Trees',
    description: 'Ossë convinces Ulmo to halt Tol Eressëa outside the Bay of Eldamar. The Teleri who choose to remain on the island are afterwards named the Falmari.',
  },
  {
    year: '1152',
    era: 'Year of The Trees',
    description: 'Elwë and Melian awaken from their trance. Elwë, now silver-haired, becomes the King of the Elves in Beleriand.',
  },
  {
    year: '1161',
    era: 'Year of The Trees',
    description: 'Ossë teaches the Teleri how to build ships. They leave Tol Eressëa and come to Valinor.',
  },
  {
    year: '1162',
    era: 'Year of The Trees',
    description: 'The Teleri found Alqualondë with the help of Finwë.',
  },
  {
    year: '1165',
    era: 'Year of The Trees',
    description: 'The Vanyar depart from Tirion to live in Taniquetil with the Valar. The Noldor and Teleri remain in Tirion and the surrounding areas.',
  },
  {
    year: '1169',
    era: 'Year of The Trees',
    description: 'Birth of Fëanor, son of Finwë and Míriel. Aulë teaches the Noldor smithying and mining. Rúmil of Tirion makes the Sarati and possibly writes the Ainulindalë.',
  },
  {
    year: '1170',
    era: 'Year of The Trees',
    description: 'Death of Míriel Serindë.',
  },
  {
    year: '1182',
    era: 'Year of The Trees',
    description: 'The Doom of Manwë is proclaimed. Finwë is allowed to marry again.',
  },
  {
    year: '1185',
    era: 'Year of The Trees',
    description: 'Finwë weds Indis of the Vanyar.',
  },
  {
    year: '1190',
    era: 'Year of The Trees',
    description: 'Birth of Fingolfin in Valinor.',
  },
  {
    year: '1200',
    era: 'Year of The Trees',
    description: 'Second Age of the Chaining of Melkor. Birth of Lúthien in Neldoreth.',
  },
  {
    year: '1230',
    era: 'Year of The Trees',
    description: 'Birth of Finarfin in Valinor.',
  },
  {
    year: '1250',
    era: 'Year of The Trees',
    description: 'Fëanor creates the Tengwar. Dwarves, known to the Elves as Naugrim, enter Beleriand and meet the Sindar.',
  },
  {
    year: '1250',
    era: 'Year of The Trees',
    description: 'Fëanor creates the Tengwar. Dwarves, known to the Elves as Naugrim, enter Beleriand and meet the Sindar.',
  },
  {
    year: '1280',
    era: 'Year of The Trees',
    description: 'Finarfin weds Eärwen.',
  },
  {
    year: '1300',
    era: 'Year of The Trees',
    description: 'Third Age of the Chaining of Melkor. The births of Turgon and Finrod in Valinor. The Dwarves of Belegost and the Sindar begin the building of Menegroth in Doriath. The Dwarves are paid with knowledge from Melian and with many pearls, including Nimphelos. Daeron creates the Certhas Daeron.',
  },
  {
    year: '1330',
    era: 'Year of The Trees',
    description: 'Orcs are first seen in Beleriand. The Dwarves make weapons for the Sindar.',
  },
  {
    year: '1350',
    era: 'Year of The Trees',
    description: 'Denethor leads some of the Nandor west into Beleriand and befriends Thingol. They settle in Ossiriand. Daeron betters the Cirth, which are adopted by the Dwarves and made known east of the Blue Mountains.',
  },
  {
    year: '1362',
    era: 'Year of The Trees',
    description: 'Births of Galadriel and Aredhel in Valinor.',
  },
  {
    year: '1400',
    era: 'Year of The Trees',
    description: 'Melkor is released from bondage.',
  },
  {
    year: '1410',
    era: 'Year of The Trees',
    description: 'Melkor befriends the Noldor.',
  },
  {
    year: '1449',
    era: 'Year of The Trees',
    description: 'Fëanor, having invented the substance Silima, begins constructing the Silmarils,',
  },
  {
    year: '1450',
    era: 'Year of The Trees',
    description: 'Fëanor completes the Silmarils. He puts the Light of the Trees in them and Varda hallows them. For the next 20 years, Melkor begins spreading strife and urging the need for weapons. Fëanor expresses his desire to reject the Valar and return to Middle Earth.',
  },
  {
    year: '1490',
    era: 'Year of The Trees',
    description: 'Finwë summons Fëanor to a council meeting, where he threatens Fingolfin with his sword. The Valar then exile Fëanor to Formenos for 12 years. He takes his seven sons and Finwë follows him as well.',
  },
  {
    year: '1492',
    era: 'Year of The Trees',
    description: 'Melkor visits Fëanor in Formenos, but he repels him. Finwë then warns the Valar, who pursue Melkor. Melkor flees and finds Ungoliant in Avathar.',
  },
  {
    year: '1495',
    era: 'Year of The Trees',
    description: 'Fëanor is summoned by Manwë to Taniquetil where he and Fingolfin reconcile. Ungoliant destroys the Two Trees. Melkor kills Finwë in Formenos and steals the Silmarils. Fëanor names him Morgoth. He and his sons swear the Oath of Fëanor. They begin a rebellion of the Noldor against the Valar and go to Alqualondë where they slay the Teleri and steal their swanships. This begins the Flight of the Noldor. Melkor and Ungoliant flee to Beleriand where Ungoliant threatens him. Melkor calls Balrogs to his aid and they drive Ungoliant away. Melkor, now known as Morgoth, stays in Angband and raises the peaks of Thangorodrim.',
  },
  {
    year: '1496',
    era: 'Year of The Trees',
    description: 'Mandos appears before the Noldor and speaks the Doom of Mandos. Finarfin and some of his people repent and return to Valinor. Finrod, son of Finarfin, becomes the leader of his fathers remaining people and they follow Fëanor.',
  },
  {
    year: '1497',
    era: 'Year of The Trees',
    description: 'The First Battle of Beleriand. Death of Denethor. Besiegement of the Havens of the Falas. Thingol withdraws his people and Melian sets the Girdle of Melian around Doriath. The Laiquendi become hidden and take no other king. The Noldor arrive at the Helcaraxë. Fëanor and his people betray Fingolfin and sail to Beleriand. Burning of the ships at Losgar. The Dagor-nuin-Giliath ("Battle-under-Stars"). Gothmog mortally wounds Fëanor, who is rescued by his sons before dying near Thangorodrim. Maedhros meets with Morgoth under a false truce and is captured.',
  },
  {
    year: '1498',
    era: 'Year of The Trees',
    description: 'Maedhros is chained to the Thangorodrim. The Noldor make a great camp at Mithrim.',
  },
  {
    year: '1500',
    era: 'Year of The Trees',
    description: '',
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
    backgroundColor: '#000',

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
