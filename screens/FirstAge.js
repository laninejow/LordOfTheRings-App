import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const timelineData = [
  {
    year: '1',
    era: 'Years of the Sun',
    description: 'The Moon first rises, followed by the Sun. From now, the First Age is measured in the Years of the Sun. Awakening of Men in Hildórien. Despite heavy losses, Fingolfin and his followers cross the Helcaraxë into Dor Daedeloth, and reach the gates of Angband. Fingolfin and his host fight the Battle of the Lammoth and Argon is slain by Orcs.',
  },
  {
    year: '2',
    era: 'Years of the Sun',
    description: 'The host of Fingolfin camps beside Lake Mithrim, across from the House of Fëanor. Morgoth releases poisonous vapors from Angband, which darken the sky.',
  },
  {
    year: '5',
    era: 'Years of the Sun',
    description: 'Fingon rescues Maedhros from Thangorodrim.',
  },
  {
    year: '6',
    era: 'Years of the Sun',
    description: 'Thingol grants permission for the House of Finarfin to enter Doriath, and for the Noldor to occupy the Northlands.',
  },
  {
    year: '7',
    era: 'Years of the Sun',
    description: 'The Noldor hold a council. Maedhros relinquishes his claim to the throne. The Sons of Fëanor relocate to East Beleriand. Fingolfin becomes High King of the Noldor in Beleriand.',
  },
  {
    year: '20',
    era: 'Years of the Sun',
    description: 'The Feast of Mereth Aderthad. Mablung of the heavy hand and Daeron are sent from Doriath to attend.',
  },
  {
    year: '50',
    era: 'Years of the Sun',
    description: 'Ulmo grants visions of hidden places to Finrod and Turgon.',
  },
  {
    year: '52',
    era: 'Years of the Sun',
    description: 'Finrod discovers the Nulukkizdin and they begin to construct Nargothrond.',
  },
  {
    year: '53',
    era: 'Years of the Sun',
    description: 'Turgon discovers the hidden valley of Tumladen.',
  },
  {
    year: '60',
    era: 'Years of the Sun',
    description: 'The Dagor Aglareb ("The Glorious Battle") is fought and the Siege of Angband begins. Finrod constructs Minas Tirith.',
  },
  {
    year: '64',
    era: 'Years of the Sun',
    description: 'Turgon relocates his people from Nevrast to Tumladen. They begin to construct the city of Gondolin.',
  },
  {
    year: '65',
    era: 'Years of the Sun',
    description: '	Thingol learns of the Kinslaying at Alqualondë. Finarfins children are temporarily expelled from Doriath. Thingol forbids Quenya to be spoken in Beleriand.',
  },
  {
    year: '66',
    era: 'Years of the Sun',
    description: 'Thingol learns of the Silmarils from Galadriel.',
  },
  {
    year: '67',
    era: 'Years of the Sun',
    description: 'Thingol learns of the Kinslaying at Alqualondë. Finarfin children are temporarily expelled from Doriath. Thingol forbids Quenya to be spoken in Beleriand.',
  },
  {
    year: '150',
    era: 'Years of the Sun',
    description: 'The harbors of Brithombar and Eglarest constructed.',
  },
  {
    year: '155',
    era: 'Years of the Sun',
    description: 'The first Assault on Hithlum; Orcs attack from Lammoth but are defeated by Fingon. Morgoth realises that Orcs unaided are no match for the Noldor forces.',
  },
  {
    year: '260',
    era: 'Years of the Sun',
    description: 'Glaurung is defeated in Ard-galen. The Long Peace begins.',
  },
  {
    year: '310',
    era: 'Years of the Sun',
    description: 'Men of the House of Bëor enter Beleriand and are discovered by Finrod.Birth of Imlach.',
  },
  {
    year: '310',
    era: 'Years of the Sun',
    description: 'Men of the House of Bëor enter Beleriand and are discovered by Finrod.Birth of Imlach.',
  },
  {
    year: '311',
    era: 'Years of the Sun',
    description: 'Finrod returns to Nargothrond with Bëor. Baran leads the House of Bëor.',
  },
  {
    year: '310',
    era: 'Years of the Sun',
    description: 'Men of the House of Bëor enter Beleriand and are discovered by Finrod.Birth of Imlach.',
  },
  {
    year: '369',
    era: 'Years of the Sun',
    description: 'Bereg leads a thousand people southwards.',
  },
  {
    year: '375',
    era: 'Years of the Sun',
    description: 'The Battle of the Gelion-Ascar Stockade. Deaths of Haldad and Haldar.',
  },
  {
    year: '400',
    era: 'Years of the Sun',
    description: 'Aredhel and Maeglin return to Gondolin and are secretly followed by Eöl. Aredhel is killed and Eöl is then executed. Maeglin remains in Gondolin. Birth of Barahir.',
  },
  {
    year: '402',
    era: 'Years of the Sun',
    description: 'Battle of the Aglon Pass.',
  },
  {
    year: '416',
    era: 'Years of the Sun',
    description: 'The House of Hador is given the lands of Dor-lómin to dwell in.',
  },
  {
    year: '420',
    era: 'Years of the Sun',
    description: 'Death of Haleth. Births of Hareth and Baragund. Hador dwells in Hithlum.',
  },
  {
    year: '455',
    era: 'Years of the Sun',
    description: 'Morgoth breaks the Siege of Angband. The Dagor Bragollach ("Battle of Sudden Flame"). Deaths of Angrod, Aegnor, Hador, Gundor, and Bregolas. Fingolfin challenges Morgoth to single combat. Death of Fingolfin. Fingon becomes High King of the Noldor. Gil-galad is sent to the Falas.',
  },
  {
    year: '457',
    era: 'Years of the Sun',
    description: 'Sauron captures Minas Tirith. Barahir and his outlaws hide in Dorthonion. A company of Orcs defeated in the Forest of Brethil.',
  },
  {
    year: '460',
    era: 'Years of the Sun',
    description: 'Deaths of Barahir, Belegund, Baragund, and all the outlaws except Beren Erchamion.',
  },
  {
    year: '465',
    era: 'Years of the Sun',
    description: '	The Quest for the Silmaril. Death of Finrod. Birth of Brandir.',
  },
  {
    year: '463',
    era: 'Years of the Sun',
    description: 'The Easterlings swear false loyalty to Maedhros.',
  },
  {
    year: '466',
    era: 'Years of the Sun',
    description: 'Beren and Lúthien take one Silmaril from Morgoth. Beren loses his hand to Carcharoth. The Hunting of the Wolf. The first death of Beren Erchamion.',
  },
  {
    year: '467',
    era: 'Years of the Sun',
    description: 'The first death of Lúthien. Lúthien sings before Mandos, who releases both her and Beren from the Halls of Mandos.',
  },
  {
    year: '468',
    era: 'Years of the Sun',
    description: 'Thingol refuses to join the Union of Maedhros.',
  },
  {
    year: '469',
    era: 'Years of the Sun',
    description: 'Death of Urwen. Orcs driven from Beleriand. Beren and Lúthien return to Middle-earth.',
  },
  {
    year: '472',
    era: 'Years of the Sun',
    description: 'The Nirnaeth Arnoediad ("Battle of Unnumbered Tears"). Deaths of Fingon, Huor, Glóredhel, Azaghâl, Haldir, Hundar and Rían. Húrin is taken captive to Angband. Turgon becomes High King of the Noldor. The Year of Lamentation. Birth of Tuor.',
  },
  {
    year: '473',
    era: 'Years of the Sun',
    description: 'Birth of Nienor. Túrin sent to Doriath. Fall of the Falas. Brithombar and Eglarest ruined. Gil-galad and Círdan flee to the Isle of Balar. Havens of Sirion constructed.',
  },
  {
    year: '485',
    era: 'Years of the Sun',
    description: 'Túrin kills Forweg and becomes leader of the Gaurwaith.',
  },
  {
    year: '486',
    era: 'Years of the Sun',
    description: 'Túrin and the outlaws encounter Mîm and make their home on Amon Rûdh as the House of Ransom.',
  },
  {
    year: '489',
    era: 'Years of the Sun',
    description: 'Beleg joins Túrin on Amon Rûdh. Mîm betrays them to Orcs and Túrin is captured. Death of Beleg.',
  },
  {
    year: '490',
    era: 'Years of the Sun',
    description: 'Gwindor leads Túrin to Nargothrond. Túrin becomes captain of Nargothrond.',
  },
  {
    year: '495',
    era: 'Years of the Sun',
    description: 'Battle of the Crossings of the Taeglin. Battle of Tumhalad. Tuor comes to Nevrast. Sack of Nargothrond by Glaurung. Deaths of Finduilas, Orodreth, Gwindor, and Handir.',
  },
  {
    year: '496',
    era: 'Years of the Sun',
    description: 'Morwen Eledhwen and Nienor leave Doriath seeking Túrin. Nienor loses her memory, is found by the Men of Brethil, and given the name Níniel.',
  },
  {
    year: '499',
    era: 'Years of the Sun',
    description: 'Túrin defeats Glaurung. Deaths of Brandir, Hunthor, Nienor and Túrin.',
  },

  {
    year: '502',
    era: 'Years of the Sun',
    description: '	Húrin gives the Nauglamír to Thingol and Melian. Deaths of Húrin and Mîm. The Dwarves of Nogrod are commissioned to set the Silmaril in the Nauglamír. Tuor weds Idril in Gondolin.',
  },
  {
    year: '503',
    era: 'Years of the Sun',
    description: 'Births of Eärendil and Elwing. Death of Thingol. Melian returns to Valinor. The Battle of the Thousand Caves. The Battle of Sarn Athrad. Death of Mablung of the heavy hand. Lúthien wears the Silmaril. Dior and his family come to Menegroth. Final deaths of Beren and Lúthien.',
  },
  {
    year: '504',
    era: 'Years of the Sun',
    description: 'With the power of the Silmaril, King Dior finally restores the former glory of Doriath. He now publicly wears the Nauglamír and the Silmaril.',
  },
  {
    year: '506',
    era: 'Years of the Sun',
    description: 'The Second Kinslaying at Menegroth and the Ruin of Doriath. Deaths of Dior, Nimloth, Celegorm, Curufin, and Caranthir. Eluréd and Elurín are abandoned in the wintry forest to die.',
  },
  {
    year: '509',
    era: 'Years of the Sun',
    description: 'Maeglin captured and tortured by Morgoth.',
  },
  {
    year: '510',
    era: 'Years of the Sun',
    description: 'The Fall of Gondolin. Deaths of Turgon, Ecthelion, Glorfindel, Maeglin, and Gothmog.Ereinion Gil-galad becomes High King of the Noldor.',
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
      <Text style={styles.title}>The First Age</Text>
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
