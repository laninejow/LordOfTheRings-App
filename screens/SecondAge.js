import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const timelineData = [
  {
    year: '1',
    era: 'Second Age',
    description: 'Foundation of the Grey Havens, and of Lindon.',
  },
  {
    year: '32',
    era: 'Second Age',
    description: 'The Edain, and a few Drúedain, reach Númenor. Elros Tar-Minyatur becomes the first King of Númenor.',
  },
  {
    year: 'c. 40',
    era: 'Second Age',
    description: 'Dwarves of the Firebeards and Broadbeams clans migrate to Khazad-dûm from the Blue Mountains.',
  },
  {
    year: '61',
    era: 'Second Age',
    description: 'Birth of Vardamir Nólimon, second King of Númenor.',
  },
  {
    year: 'c. 82',
    era: 'Second Age',
    description: 'The emigration of the Edain to Númenor ends.',
  },
  {
    year: '192',
    era: 'Second Age',
    description: 'Birth of Amandil, third King of Númenor.',
  },
  {
    year: '203',
    era: 'Second Age',
    description: 'Birth of Vardilmë.',
  },
  {
    year: '213',
    era: 'Second Age',
    description: 'Birth of Aulendil.',
  },
  {
    year: '222',
    era: 'Second Age',
    description: 'Birth of Nolondil.',
  },
  {
    year: '300',
    era: 'Second Age',
    description: 'Probable birth of Celebrían, daughter of Galadriel and Celeborn.[1]',
  },
  {
    year: '350',
    era: 'Second Age',
    description: 'Birth of Elendil, fourth King of Númenor.',
  },
  {
    year: '361',
    era: 'Second Age',
    description: 'Birth of Eärendur (son of Amandil).',
  },
  {
    year: '371',
    era: 'Second Age',
    description: 'Birth of Yávien.',
  },
  {
    year: '377',
    era: 'Second Age',
    description: 'Birth of Mairen.',
  },
  {
    year: '382',
    era: 'Second Age',
    description: 'Birth of Oromendil.',
  },
  {
    year: '395',
    era: 'Second Age',
    description: 'Birth of Axantur.',
  },
  {
    year: '442',
    era: 'Second Age',
    description: 'Death of King Elros Tar-Minyatur. Vardamir Nólimon inherits the Sceptre to become the second King of Númenor but immediately abdicates. Tar-Amandil becomes the third King of Númenor.',
  },
  {
    year: '443',
    era: 'Second Age',
    description: 'The notional end of Vardamir Nólimon\'s reign.',
  },
  {
    year: '451',
    era: 'Second Age',
    description: 'Birth of Vëantur.',
  },
  {
    year: '471',
    era: 'Second Age',
    description: 'Death of Vardamir Nólimon, second King of Númenor.',
  },
  {
    year: 'c. 500',
    era: 'Second Age',
    description: 'Sauron returns to Middle-earth in the East.',
  },
  {
    year: '512',
    era: 'Second Age',
    description: 'Birth of Caliondo.',
  },
  {
    year: '521',
    era: 'Second Age',
    description: 'Birth of Silmariën.',
  },
  {
    year: '532',
    era: 'Second Age',
    description: 'Birth of Isilmë.',
  },
  {
    year: '543',
    era: 'Second Age',
    description: 'Birth of Meneldur, fifth King of Númenor.',
  },
  {
    year: '551',
    era: 'Second Age',
    description: 'Birth of Lindissë.',
  },
  {
    year: '562',
    era: 'Second Age',
    description: 'Birth of Ardamir (son of Axantur).',
  },
  {
    year: '575',
    era: 'Second Age',
    description: 'Birth of Cemendur (son of Axantur).',
  },
  {
    year: '590',
    era: 'Second Age',
    description: 'Tar-Amandil surrenders the Sceptre. Tar-Elendil becomes the fourth King of Númenor.',
  },
  {
    year: '600',
    era: 'Second Age',
    description: 'The Captain of the King\'s Ships, Vëantur, makes the first Númenórean voyage back to Middle-earth. The Númenóreans meet Men of Eriador at the Tower Hills.',
  },
  {
    year: '601',
    era: 'Second Age',
    description: 'Vëantur returns from his voyage to Mithlond.',
  },
  {
    year: '603',
    era: 'Second Age',
    description: 'Death of Tar-Amandil, third King of Númenor.',
  },
  {
    year: '630',
    era: 'Second Age',
    description: 'Birth of Valandil, first Lord of Andúnië.',
  },
  {
    year: '670',
    era: 'Second Age',
    description: 'Birth of Malantur.',
  },
  {
    year: '700',
    era: 'Second Age',
    description: 'Birth of Aldarion, sixth King of Númenor.',
  },
  {
    year: '700',
    era: 'Second Age',
    description: 'Birth of Írildë.',
  },
  {
    year: '711',
    era: 'Second Age',
    description: 'Birth of Hallatan.',
  },
  {
    year: '712',
    era: 'Second Age',
    description: 'Birth of Ailinel.',
  },
  {
    year: '725',
    era: 'Second Age',
    description: 'Aldarion makes his first journey to Mithlond in the ship Númerrámar captained by Vëantur.',
  },
  {
    year: '727',
    era: 'Second Age',
    description: 'Aldarion and Vëantur return to Númenor.',
  },
  {
    year: '729',
    era: 'Second Age',
    description: 'Birth of Almiel.',
  },
  {
    year: '730',
    era: 'Second Age',
    description: 'Aldarion makes his second journey to Mithlond.',
  },
  {
    year: '733',
    era: 'Second Age',
    description: 'Aldarion returns to Númenor.',
  },
  {
    year: '735',
    era: 'Second Age',
    description: 'Aldarion makes his third journey to Middle-earth, visiting the coasts as far south as the Bay of Belfalas.',
  },
  {
    year: '739',
    era: 'Second Age',
    description: 'Aldarion returns to Númenor, bearing gifts from Gil-galad to his father Meneldur.',
  },
  {
    year: '740',
    era: 'Second Age',
    description: 'Tar-Elendil surrenders the Sceptre. Tar-Meneldur becomes the fifth King of Númenor.',
  },
  {
    year: '750',
    era: 'Second Age',
    description: 'Eregion is founded and construction on Ost-in-Edhil begins. Aldarion founds the Guild of Venturers.',
  },
  {
    year: '751',
    era: 'Second Age',
    description: 'Death of Tar-Elendil, fourth King of Númenor.',
  },
  {
    year: '771',
    era: 'Second Age',
    description: 'Birth of Erendis.',
  },
  {
    year: '799',
    era: 'Second Age',
    description: 'Birth of Soronto.',
  },
  {
    year: '800',
    era: 'Second Age',
    description: 'Aldarion proclaimed the King\'s Heir.',
  },
  {
    year: '806',
    era: 'Second Age',
    description: 'Aldarion\'s seven-year voyage.',
  },
  {
    year: '813',
    era: 'Second Age',
    description: 'Aldarion returns to Númenor.',
  },
  {
    year: '816',
    era: 'Second Age',
    description: 'Palarran completed. Aldarion\'s four-year voyage.',
  },
  {
    year: '820',
    era: 'Second Age',
    description: 'Aldarion returns to Númenor. Tar-Meneldur rescinds Aldarion\'s authority.',
  },
  {
    year: '824',
    era: 'Second Age',
    description: 'Aldarion\'s five-year voyage.',
  },
  {
    year: '829',
    era: 'Second Age',
    description: 'Aldarion returns and immediately sets out upon his fourteen-year voyage.',
  },
  {
    year: '840',
    era: 'Second Age',
    description: 'Birth of Nessanië.',
  },
  {
    year: '843',
    era: 'Second Age',
    description: 'Aldarion returns to Númenor. Tar-Meneldur restores authority.',
  },
  {
    year: '850',
    era: 'Second Age',
    description: 'Aldarion and Erendis sail to Andúnië.',
  },
  {
    year: '852',
    era: 'Second Age',
    description: 'Birth of Hallacar.',
  },
  {
    year: '858',
    era: 'Second Age',
    description: 'Aldarion is betrothed to Erendis.',
  },
  {
    year: '861',
    era: 'Second Age',
    description: 'Aldarion and Erendis forswear wedding until his return.',
  },
  {
    year: '863',
    era: 'Second Age',
    description: 'Aldarion\'s six-year voyage.',
  },
  {
    year: '869',
    era: 'Second Age',
    description: 'Aldarion returns to Númenor. The first shadow appears on sailing to Middle-earth.',
  },
  {
    year: '870',
    era: 'Second Age',
    description: 'Wedding of Aldarion and Erendis.',
  },
  {
    year: '873',
    era: 'Second Age',
    description: 'Birth of Ancalimë.',
  },
  {
    year: '877',
    era: 'Second Age',
    description: 'Hirilondë completed. Aldarion\'s second five-year voyage.',
  },
  {
    year: '880',
    era: 'Second Age',
    description: 'Ancalimë learns her father is Lord Aldarion.',
  },
  {
    year: '882',
    era: 'Second Age',
    description: 'Aldarion returns. Separation of Aldarion and Erendis.',
  },
  {
    year: '883',
    era: 'Second Age',
    description: 'Tar-Aldarion takes the Sceptre.',
  },
  {
    year: '892',
    era: 'Second Age',
    description: 'Ancalimë proclaimed King\'s Heir and changes law of marriage.',
  },
  {
    year: '900',
    era: 'Second Age',
    description: 'Death of Caliondo.',
  },
  {
    year: '942',
    era: 'Second Age',
    description: 'Death of Meneldur.',
  },
  {
    year: '985',
    era: 'Second Age',
    description: 'Drowning of Erendis.',
  },
  {
    year: '1000',
    era: 'Second Age',
    description: 'Sauron begins construction on Barad-dûr; Ancalimë weds Hallacar.',
  },
  {
    year: '1003',
    era: 'Second Age',
    description: 'Birth of Anárion.',
  },
  {
    year: '1075',
    era: 'Second Age',
    description: 'Tar-Ancalimë takes the Sceptre.',
  },
  {
    year: '1098',
    era: 'Second Age',
    description: 'Death of Tar-Aldarion.',
  },
  {
    year: '1174',
    era: 'Second Age',
    description: 'Birth of Súrion.',
  },
  {
    year: '1200',
    era: 'Second Age',
    description: 'Annatar comes to Lindon and Ereinion Gil-galad turn him away. Númenóreans begin to construct permanent havens.',
  },
  {
    year: '1211',
    era: 'Second Age',
    description: 'Death of Hallacar.',
  },
  {
    year: '1280',
    era: 'Second Age',
    description: 'Tar-Anárion takes the Sceptre.',
  },
  {
    year: '1285',
    era: 'Second Age',
    description: 'Death of Ancalimë.',
  },
  {
    year: '1320',
    era: 'Second Age',
    description: 'Birth of Telperiën.',
  },
  {
    year: '1350',
    era: 'Second Age',
    description: 'Galadriel and Celeborn leave Eregion and go to Lothlórien.',
  },
  {
    year: '1394',
    era: 'Second Age',
    description: 'Tar-Súrion takes the Sceptre.',
  },
  {
    year: '1404',
    era: 'Second Age',
    description: 'Death of Tar-Anárion.',
  },
  {
    year: '1474',
    era: 'Second Age',
    description: 'Birth of Minastir.',
  },
  {
    year: '1500',
    era: 'Second Age',
    description: 'The Rings of Power are forged; Annatar departs Eregion as Sauron.',
  },
  {
    year: '1556',
    era: 'Second Age',
    description: 'Tar-Telperiën takes the Sceptre.',
  },
  {
    year: '1574',
    era: 'Second Age',
    description: 'Death of Tar-Súrion.',
  },
  {
    year: '1590',
    era: 'Second Age',
    description: 'The Three Rings are forged.',
  },
  {
    year: '1600',
    era: 'Second Age',
    description: 'The One Ring is forged; Barad-dûr completed; Sauron openly proclaims himself. Glorfindel, Rómestámo, and Morinehtar come to Middle-earth.',
  },
  {
    year: '1605',
    era: 'Second Age',
    description: 'Sauron begins to gather and prepare armies in the East to invade Eriador, but this is opposed by the two Wizards[2] in the East.[3]',
  },
  {
    year: '1634',
    era: 'Second Age',
    description: 'Birth of Ciryatan.',
  },
  {
    year: '1693',
    era: 'Second Age',
    description: 'The Three Rings are hidden. War of the Elves and Sauron begins.',
  },
  {
    year: '1695',
    era: 'Second Age',
    description: 'Sauron invades Eriador.',
  },
  {
    year: '1697',
    era: 'Second Age',
    description: 'Sack of Eregion. Death of Celebrimbor. Rivendell founded. Dwarves assail Sauron from behind. Khazad-dûm closes.',
  },
  {
    year: '1700',
    era: 'Second Age',
    description: 'Defeat of Sauron by the Númenóreans under King\'s Heir Minastir.',
  },
  {
    year: '1701',
    era: 'Second Age',
    description: 'Sauron driven from Eriador and flees to Mordor. First White Council held. Galadriel and Celeborn depart for Belfalas.',
  },
  {
    year: '1731',
    era: 'Second Age',
    description: 'Death of Tar-Telperiën. Tar-Minastir takes the Sceptre.',
  },
  {
    year: '1800',
    era: 'Second Age',
    description: 'Birth of Atanamir; Lond Daer Enedh constructed.',
  },
  {
    year: '1869',
    era: 'Second Age',
    description: 'Tar-Ciryatan takes the Sceptre.',
  },
  {
    year: '1873',
    era: 'Second Age',
    description: 'Death of Tar-Minastir.',
  },
  {
    year: '1986',
    era: 'Second Age',
    description: 'Birth Tar-Ancalimon.',
  },
  {
    year: '2029',
    era: 'Second Age',
    description: 'Tar-Atanamir takes the Sceptre.',
  },
  {
    year: '2035',
    era: 'Second Age',
    description: 'Death of Tar-Ciryatan.',
  },
  {
    year: '2136',
    era: 'Second Age',
    description: 'Birth of Telemmaitë.',
  },
  {
    year: '2221',
    era: 'Second Age',
    description: 'Death of Tar-Atanamir. Tar-Ancalimon takes the Sceptre.',
  },
  {
    year: '2251',
    era: 'Second Age',
    description: 'Elven tongue is forsworn in Númenor by the King\'s Men. The Nazgûl appear.',
  },
  {
    year: '2277',
    era: 'Second Age',
    description: 'Birth of Vanimeldë.',
  },
  {
    year: '2280',
    era: 'Second Age',
    description: 'Umbar turned into a great fortress of Númenor.',
  },
  {
    year: '2286',
    era: 'Second Age',
    description: 'Birth of Herucalmo.',
  },
  {
    year: '2350',
    era: 'Second Age',
    description: 'Pelargir is built. It becomes the chief haven of the Faithful Númenóreans.',
  },
  {
    year: '2386',
    era: 'Second Age',
    description: 'Death of Tar-Ancalimon. Tar-Telemmaitë takes the Sceptre.',
  },
  {
    year: '2406',
    era: 'Second Age',
    description: 'Birth of Alcarin.',
  },
  {
    year: '2516',
    era: 'Second Age',
    description: 'Birth of Calmacil.',
  },
  {
    year: '2526',
    era: 'Second Age',
    description: 'Death of Tar-Telemmaitë. Tar-Vanimeldë takes the Sceptre.',
  },
  {
    year: '2618',
    era: 'Second Age',
    description: 'Birth of Ardamin.',
  },
  {
    year: '2630',
    era: 'Second Age',
    description: 'Birth of Gimilzagar.',
  },
  {
    year: '2637',
    era: 'Second Age',
    description: 'Death of Tar-Vanimeldë. Herucalmo as Tar-Anducal seizes the Sceptre.',
  },
  {
    year: '2657',
    era: 'Second Age',
    description: 'Death of Tar-Anducal. Tar-Alcarin takes the Sceptre.',
  },
  {
    year: '2709',
    era: 'Second Age',
    description: 'Birth of Adûnakhôr.',
  },
  {
    year: '2737',
    era: 'Second Age',
    description: 'Death of Tar-Alcarin. Ar-Belzagar takes the Sceptre.',
  },
  {
    year: '2798',
    era: 'Second Age',
    description: 'Birth of Zimrathôn. Sauron withdraws from the shores.',
  },
  {
    year: '2825',
    era: 'Second Age',
    description: 'Death of Ar-Belzagar. Ardamin as Ar-Abattârik takes the Sceptre.',
  },
  {
    year: '2876',
    era: 'Second Age',
    description: 'Birth of Sakalthôr.',
  },
  {
    year: '2899',
    era: 'Second Age',
    description: 'Death of Ar-Abattârik. Ar-Adûnakhôr takes the Sceptre.',
  },
  {
    year: '2960',
    era: 'Second Age',
    description: 'Birth of Gimilzôr. Elven tongue abandoned in Númenor.',
  },
  {
    year: '2962',
    era: 'Second Age',
    description: 'Death of Ar-Adûnakhôr. Ar-Zimrathôn takes the Sceptre.',
  },
  {
    year: '3033',
    era: 'Second Age',
    description: 'Death of Ar-Zimrathôn. Ar-Sakalthôr takes the Sceptre.',
  },
  {
    year: '3035',
    era: 'Second Age',
    description: 'Birth of Inziladûn.',
  },
  {
    year: '3044',
    era: 'Second Age',
    description: 'Birth of Gimilkhâd.',
  },
  {
    year: '3102',
    era: 'Second Age',
    description: 'Death of Ar-Sakalthôr. Ar-Gimilzôr takes the Sceptre.',
  },
  {
    year: '3117',
    era: 'Second Age',
    description: 'Birth of Míriel. Elves no longer permitted entrance to Númenor. Elven tongue forbidden in Númenor.',
  },
  {
    year: '3118',
    era: 'Second Age',
    description: 'Birth of Pharazôn.',
  },
  {
    year: '3119',
    era: 'Second Age',
    description: 'Birth of Elendil.',
  },
  {
    year: '3175',
    era: 'Second Age',
    description: 'Repentance of Tar-Palantir (according to the Tale of Years).',
  },
  {
    year: '3177',
    era: 'Second Age',
    description: 'Death of Ar-Gimilzôr. Tar-Palantir takes the Sceptre. Civil War in Númenor. Prophecy of the White Tree given.',
  },
  {
    year: '3209',
    era: 'Second Age',
    description: 'Birth of Isildur.',
  },
  {
    year: '3219',
    era: 'Second Age',
    description: 'Birth of Anárion.',
  },
  {
    year: '3243',
    era: 'Second Age',
    description: 'Death of Gimilkhâd.',
  },
  {
    year: '3255',
    era: 'Second Age',
    description: 'Death of Tar-Palantir. Ar-Pharazôn seizes the Sceptre.',
  },
  {
    year: '3261',
    era: 'Second Age',
    description: 'Ar-Pharazôn lands at the Haven of Umbar.',
  },
  {
    year: '3262',
    era: 'Second Age',
    description: 'Sauron taken to Númenor as a prisoner.',
  },
  {
    year: '3299',
    era: 'Second Age',
    description: 'Birth of Elendur.',
  },
  {
    year: '3310',
    era: 'Second Age',
    description: 'The Great Armament begins construction.',
  },
  {
    year: '3316',
    era: 'Second Age',
    description: 'Amandil sails to Aman.',
  },
  {
    year: '3318',
    era: 'Second Age',
    description: 'Birth of Meneldil.',
  },
  {
    year: '3319',
    era: 'Second Age',
    description: 'Downfall of Númenor. Changing of the World. Deaths of Ar-Pharazôn and Míriel. Sauron flees back to Middle-earth.',
  },
  {
    year: '3320',
    era: 'Second Age',
    description: 'Arnor and Gondor founded.',
  },
  {
    year: '3339',
    era: 'Second Age',
    description: 'Birth of Aratan.',
  },
  {
    year: '3379',
    era: 'Second Age',
    description: 'Birth of Ciryon.',
  },
  {
    year: '3399',
    era: 'Second Age',
    description: 'Birth of Cemendur.',
  },
  {
    year: '3429',
    era: 'Second Age',
    description: 'Sauron takes Minas Ithil.',
  },
  {
    year: '3430',
    era: 'Second Age',
    description: 'Last Alliance formed. Birth of Valandil.',
  },
  {
    year: '3431',
    era: 'Second Age',
    description: 'Last Alliance marches to Imladris.',
  },
  {
    year: '3434',
    era: 'Second Age',
    description: 'Last Alliance march to Mordor. Battle of Dagorlad. Siege of Barad-dûr. Deaths of Amdír and Oropher.',
  },
  {
    year: '3440',
    era: 'Second Age',
    description: 'Death of Anárion.',
  },
  {
    year: '3441',
    era: 'Second Age',
    description: 'Deaths of Ereinion Gil-galad and Elendil. Defeat of Sauron. Isildur takes The One Ring.',
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
      <Text style={styles.title}>Second Age</Text>
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
