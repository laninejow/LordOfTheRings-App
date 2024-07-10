import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

const timelineData = [
 {
  year: '1',
  era: 'Third Age',
  description: 'The Third Age begins. Isildur plants a Sapling of the White Tree in Minas Anor. Death of Isildur and his sons Elendur, Aratan and Ciryon in the Disaster of the Gladden Fields. The One Ring is lost. Meneldil, son of Anárion, becomes the third King of Gondor and the first sole ruler of the kingdom.',
},
{
  year: '2',
  era: 'Third Age',
  description: 'Isildur plants a Sapling of the White Tree in Minas Anor. Death of Isildur and his sons Elendur, Aratan and Ciryon in the Disaster of the Gladden Fields. The One Ring is lost. Meneldil, son of Anárion, becomes the third King of Gondor and the first sole ruler of the kingdom.',
},
{
  year: '3',
  era: 'Third Age',
  description: 'Ohtar brings the Shards of Narsil to Imladris.',
},
{
  year: '10',
  era: 'Third Age',
  description: 'Valandil becomes the third King of Arnor.',
},
{
  year: '48',
  era: 'Third Age',
  description: 'Birth of Eärendil of Gondor.',
},
{
  year: '87',
  era: 'Third Age',
  description: 'Birth of Eldacar of Arnor.',
},
{
  year: '109',
  era: 'Third Age',
  description: 'Elrond and Celebrían wed.',
},
{
  year: '130',
  era: 'Third Age',
  description: 'Birth of Elladan and Elrohir, twin sons of Elrond and Celebrían.',
},
{
  year: '136',
  era: 'Third Age',
  description: 'Birth of Anardil of Gondor.',
},
{
  year: '158',
  era: 'Third Age',
  description: 'Death of King Meneldil. Cemendur becomes the fourth King of Gondor.',
},
{
  year: '185',
  era: 'Third Age',
  description: 'Birth of Arantar of Arnor.',
},
{
  year: '222',
  era: 'Third Age',
  description: 'Birth of Ostoher of Gondor.',
},
{
  year: '238',
  era: 'Third Age',
  description: 'Death of King Cemendur. Eärendil becomes the fifth King of Gondor.',
},
{
  year: '241',
  era: 'Third Age',
  description: 'Birth of Arwen Undómiel, daughter of Elrond and Celebrían.',
},
{
  year: '249',
  era: 'Third Age',
  description: 'Death of King Valandil. Eldacar becomes the fourth King of Arnor.',
},
{
  year: '280',
  era: 'Third Age',
  description: 'Birth of Tarcil of Arnor.',
},
{
  year: '310',
  era: 'Third Age',
  description: 'Birth of Tarostar (later Rómendacil I) of Gondor.',
},
{
  year: '324',
  era: 'Third Age',
  description: 'Death of King Eärendil. Anardil becomes the sixth King of Gondor.',
},
{
  year: '339',
  era: 'Third Age',
  description: 'Death of King Eldacar. Arantar becomes the fifth King of Arnor.',
},
{
  year: '372',
  era: 'Third Age',
  description: 'Birth of Tarondor of Arnor.',
},
{
  year: '397',
  era: 'Third Age',
  description: 'Birth of Turambar of Gondor.',
},
{
  year: '411',
  era: 'Third Age',
  description: 'Death of King Anardil. Ostoher becomes the seventh King of Gondor.',
},
{
  year: '420',
  era: 'Third Age',
  description: 'Ostoher rebuilds Minas Anor.',
},
{
  year: '435',
  era: 'Third Age',
  description: 'Death of King Arantar. Tarcil becomes the sixth King of Arnor.',
},
{
  year: '462',
  era: 'Third Age',
  description: 'Birth of Valandur of Arnor.',
},
{
  year: '480',
  era: 'Third Age',
  description: 'Birth of Atanatar I of Gondor.',
},
{
  year: '490',
  era: 'Third Age',
  description: 'First invasion of the Easterlings.',
},
{
  year: '492',
  era: 'Third Age',
  description: 'Death of King Ostoher. Tarostar (Rómendacil I) becomes the eighth King of Gondor.',
},
{
  year: '500',
  era: 'Third Age',
  description: 'Tarostar defeats the Easterlings and takes the name Rómendacil I, "East-victor", in token of this.',
},
{
  year: '515',
  era: 'Third Age',
  description: 'Death of King Tarcil. Tarondor becomes the seventh King of Arnor.',
},
{
  year: '541',
  era: 'Third Age',
  description: 'Death of King Rómendacil I. Turambar becomes the ninth King of Gondor.',
},
{
  year: '552',
  era: 'Third Age',
  description: 'Birth of Elendur of Arnor.',
},
{
  year: '570',
  era: 'Third Age',
  description: 'Birth of Siriondil of Gondor.',
},
{
  year: '602',
  era: 'Third Age',
  description: 'Death of King Tarondor. Valandur becomes the eighth King of Arnor.',
},
{
  year: '640',
  era: 'Third Age',
  description: 'Birth of Eärendur of Arnor.',
},
{
  year: '652',
  era: 'Third Age',
  description: 'Death of King Valandur. Elendur becomes the ninth King of Arnor.',
},
{
  year: '654',
  era: 'Third Age',
  description: 'Birth of Tarannon Falastur of Gondor.',
},
{
  year: '667',
  era: 'Third Age',
  description: 'Death of King Turambar. Atanatar I becomes the tenth King of Gondor.',
},
{
  year: '726',
  era: 'Third Age',
  description: 'Birth of Amlaith of Fornost.',
},
{
  year: '736',
  era: 'Third Age',
  description: 'Birth of Eärnil I of Gondor.',
},
{
  year: '748',
  era: 'Third Age',
  description: 'Death of King Atanatar I Siriondil becomes the eleventh King of Gondor.',
},
{
  year: '777',
  era: 'Third Age',
  description: 'Death of King Elendur. Eärendur becomes the tenth and last King of Arnor.',
},
{
  year: '811',
  era: 'Third Age',
  description: 'Birth of Beleg of Arthedain.',
},
{
  year: '820',
  era: 'Third Age',
  description: 'Birth of Ciryandil of Gondor.',
},
{
  year: '830',
  era: 'Third Age',
  description: 'Death of King Siriondil. Tarannon Falastur becomes the twelfth King of Gondor, beginning the line of Ship-kings.',
},
{
  year: '861',
  era: 'Third Age',
  description: 'Death of King Eärendur (King of Arnor) of Arnor. Division of Arnor into Arthedain, Rhudaur, and Cardolan. Eärendur\'s eldest son, Amlaith of Fornost, becomes the first King of Arthedain.',
},
{
  year: '895',
  era: 'Third Age',
  description: 'Birth of Mallor of Arthedain.',
},
{
  year: '899',
  era: 'Third Age',
  description: 'Birth of Ciryaher (later Hyarmedacil I) of Gondor.',
},
{
  year: '913',
  era: 'Third Age',
  description: 'Death of King Tarannon Falastur. Eärnil I becomes the thirteenth King of Gondor and second Ship-king.',
},
{
  year: '933',
  era: 'Third Age',
  description: 'Umbar seized by Eärnil I.',
},
{
  year: '936',
  era: 'Third Age',
  description: 'Drowning of King Eärnil I. Ciryandil becomes the fourteenth King of Gondor and third Ship-king.',
},
{
  year: '946',
  era: 'Third Age',
  description: 'Death of King Amlaith. Beleg becomes the second King of Arthedain.',
},
{
  year: '977',
  era: 'Third Age',
  description: 'Birth of Atanatar II of Gondor.',
},
{
  year: '979',
  era: 'Third Age',
  description: 'Birth of Celepharn of Arthedain.',
},
{
  year: '1000',
  era: 'Third Age',
  description: 'About this time the Istari first appear in Middle-earth.',
},
{
  year: '1015',
  era: 'Third Age',
  description: 'Death of King Ciryandil. Ciryaher (later Hyarmendacil I) becomes the fifteenth King of Gondor and last of its Ship-kings.',
},
{
  year: '1029',
  era: 'Third Age',
  description: 'Death of King Beleg. Mallor becomes the third King of Arthedain.',
},
{
  year: '1049',
  era: 'Third Age',
  description: 'Birth of Narmacil I of Gondor.',
},
{
  year: '1050',
  era: 'Third Age',
  description: 'Ciryaher conquers Harad and takes the name Hyarmendacil, "South-victor", in token of this. Gondor reaches the height of its power. About this time a shadow falls on Greenwood, and men begin to call it Mirkwood. The Periannath are first mentioned in records with the coming of the Harfoots to Eriador.',
},
{
  year: '1058',
  era: 'Third Age',
  description: 'Birth of Calmacil of Gondor.',
},
{
  year: '1062',
  era: 'Third Age',
  description: 'Birth of Celebrindor of Arthedain.',
},
{
  year: '1100',
  era: 'Third Age',
  description: 'The Wise (the Istari and chief Eldar) discover that an evil power has made a stronghold at Dol Guldur. It is thought to be one of the Nazgûl.',
},
{
  year: '1110',
  era: 'Third Age',
  description: 'Death of King Mallor. Celepharn becomes the fourth King of Arthedain.',
},
{
  year: '1126',
  era: 'Third Age',
  description: 'Birth of Minalcar (later Rómendacil II) of Gondor.',
},
{
  year: '1144',
  era: 'Third Age',
  description: 'Birth of Malvegil of Arthedain.',
},
{
  year: '1149',
  era: 'Third Age',
  description: 'Death of King Hyarmendacil I. Atanatar II Alcarin becomes the sixteenth King of Gondor.',
},
{
  year: '1150',
  era: 'Third Age',
  description: 'About this time, the Fallohides enter Eriador. The Stoors come over the Redhorn Pass and move either to the Angle or to Dunland.',
},
{
  year: '1191',
  era: 'Third Age',
  description: 'Death of King Celepharn. Celebrindor becomes the fifth King of Arthedain.',
},
{
  year: '1194',
  era: 'Third Age',
  description: 'Birth of Valacar of Gondor.',
},
{
  year: '1226',
  era: 'Third Age',
  description: 'Death of King Atanatar II Alcarin. Narmacil I becomes the seventeenth King of Gondor.',
},
{
  year: '1240',
  era: 'Third Age',
  description: 'Minalcar (later Rómendacil II) made Regent of Gondor by his uncle King Narmacil II.',
},
{
  year: '1248',
  era: 'Third Age',
  description: 'Minalcar defeats a large army of Easterlings. He takes the name Rómendacil. About this time, construction on the Argonath begins.',
},
{
  year: '1250',
  era: 'Third Age',
  description: 'Minalcar (Rómendacil II) sends his son, Valacar, as an ambassador to the self-styled King of Rhovanion, Vidugavia, prince of the Northmen, in order to better understand their customs.',
},
{
  year: '1255',
  era: 'Third Age',
  description: 'Birth of Vinitharya (Eldacar) of Gondor in Rhovanion.',
},
{
  year: '1259',
  era: 'Third Age',
  description: 'Birth of Castamir of Gondor.',
},
{
  year: '1260',
  era: 'Third Age',
  description: 'Valacar recalled from Rhovanion, by his father, to return to Gondor.',
},
{
  year: '1272',
  era: 'Third Age',
  description: 'Death of King Celebrindor. Malvegil becomes the sixth King of Arthedain.',
},
{
  year: '1294',
  era: 'Third Age',
  description: 'Death of King Narmacil I. Calmacil becomes the eighteenth King of Gondor.',
},
{
  year: '1300',
  era: 'Third Age',
  description: 'The Nazgûl reappear. The Witch-king founds the Kingdom of Angmar. Orcs increase in the Misty Mountains and attack the Dwarves. The Hobbits move westward and some settle in Bree.',
},
{
  year: '1304',
  era: 'Third Age',
  description: 'Death of King Calmacil. Rómendacil II becomes the nineteenth King of Gondor.',
},
{
  year: '1309',
  era: 'Third Age',
  description: 'Birth of Arveleg I of Arthedain.',
},
{
  year: '1330',
  era: 'Third Age',
  description: 'Birth of Aldamir of Gondor.',
},
{
  year: '1332',
  era: 'Third Age',
  description: 'Possible death of Vidumavi (Galadwen), wife of King Valacar and mother of Eldacar.[note 1]',
},
{
  year: '1344',
  era: 'Third Age',
  description: 'Possible death of Vidumavi (Galadwen), wife of King Valacar and mother of Eldacar.[note 1]',
},
{
  year: '1349',
  era: 'Third Age',
  description: 'Death of King Malvegil. Argeleb I becomes the seventh King of Arthedain.',
},
{
  year: '1356',
  era: 'Third Age',
  description: 'Death of King Argeleb I. Arveleg I becomes the eighth King of Arthedain. About this time, some Stoors return to the Gladden Fields.',
},
{
  year: '1366',
  era: 'Third Age',
  description: 'Death of King Rómendacil II. Valacar becomes the twentieth King of Gondor.',
},
{
  year: '1391',
  era: 'Third Age',
  description: 'Births of Araphor of Arnor and Vinyarion (Hyarmendacil II) of Gondor.',
},
{
  year: '1409',
  era: 'Third Age',
  description: 'The Witch-king of Angmar invades Arnor, destroys the Tower of Amon Sûl, occupies Rhudaur and ravages Cardolan, slaying its last prince.[2] Death of King Arveleg I. Araphor becomes the ninth King of Arthedain.',
},
{
  year: '1432',
  era: 'Third Age',
  description: 'Death of King Valacar. Eldacar (born Vinitharya) becomes the twenty-first King of Gondor. Start of the Kin-strife.',
},
{
  year: '1437',
  era: 'Third Age',
  description: 'King Eldacar deposed. Castamir "the Usurper" becomes the twenty-second King of Gondor. The Osgiliath-stone is lost in the Anduin.',
},
{
  year: '1447',
  era: 'Third Age',
  description: 'Battle of the Crossings of Erui and the Siege of Pelargir. Death of King Castamir. Eldacar regains the kingship of Gondor with the help of the Northmen and Dúnedain of Gondor. End of the Kin-Strife.',
},
{
  year: '1448',
  era: 'Third Age',
  description: 'Rebels of the sons of Castamir escape the Siege of Pelargir and seize the Haven of Umbar.',
},
{
  year: '1454',
  era: 'Third Age',
  description: 'Birth of Minardil of Gondor.',
},
{
  year: '1473',
  era: 'Third Age',
  description: 'Birth of Argeleb II of Arthedain.',
},
{
  year: '1490',
  era: 'Third Age',
  description: 'Death of King Eldacar. Aldamir becomes the twenty-third King of Gondor.',
},
{
  year: '1516',
  era: 'Third Age',
  description: 'Birth of Telemnar of Gondor.',
},
{
  year: '1540',
  era: 'Third Age',
  description: 'Death of King Aldamir. Vinyarion becomes the twenty-fourth King of Gondor.',
},
{
  year: '1551',
  era: 'Third Age',
  description: 'King Vinyarion defeats the Haradrim and assumes name Hyarmendacil II.',
},
{
  year: '1553',
  era: 'Third Age',
  description: 'Birth of Arvegil of Arthedain.',
},
{
  year: '1577',
  era: 'Third Age',
  description: 'Birth of Tarondor of Gondor.',
},
{
  year: '1589',
  era: 'Third Age',
  description: 'Death of King Araphor. Argeleb II becomes the tenth King of Arthedain.',
},
{
  year: '1601',
  era: 'Third Age',
  description: 'Creation of the Shire. The count of years in Shire Reckoning begins with year 1.',
},
{
  year: '1621',
  era: 'Third Age',
  description: 'Death of Hyarmendacil II. Minardil becomes the twenty-fifth King of Gondor.',
},
{
  year: '1630',
  era: 'Third Age',
  description: 'Stoors from Dunland settle in the Shire.',
},
{
  year: '1632',
  era: 'Third Age',
  description: 'Birth of Telumehtar.',
},
{
  year: '1633',
  era: 'Third Age',
  description: 'Birth of Arveleg II.',
},
{
  year: '1634',
  era: 'Third Age',
  description: 'Death of King Minardil. Telemnar becomes the twenty-sixth King of Gondor.',
},
{
  year: '1635',
  era: 'Third Age',
  description: 'The Great Plague hits Rhovanion.',
},
{
  year: '1636',
  era: 'Third Age',
  description: 'The Great Plague spreads to Gondor. Death of King Telemnar and all his children. The White Tree withers and dies. Osgiliath is left in ruins. Barrow-wights inhabit Tyrn Gorthad. Tarondor becomes the twenty-seventh King of Gondor.',
},
{
  year: '1637',
  era: 'Third Age',
  description: 'The Great Plague hits the Shire. The Periannath survive, but suffer great loss.',
},
{
  year: '1640',
  era: 'Third Age',
  description: 'The capital of Gondor is officially moved to Minas Anor. Mordor is left unguarded. King Tarondor plants the Seedling of the White Tree in Minas Anor.',
},
{
  year: '1670',
  era: 'Third Age',
  description: 'Death of Argeleb II. Arvegil becomes King of Arnor.',
},
{
  year: '1684',
  era: 'Third Age',
  description: 'Birth of Narmacil II.',
},
{
  year: '1711',
  era: 'Third Age',
  description: 'Birth of Araval.',
},
{
  year: '1731',
  era: 'Third Age',
  description: 'Birth of Durin VI.',
},
{
  year: '1736',
  era: 'Third Age',
  description: 'Birth of Calimehtar.',
},
{
  year: '1743',
  era: 'Third Age',
  description: 'Death of Arvegil. Arveleg II becomes King of Arnor.',
},
{
  year: '1787',
  era: 'Third Age',
  description: 'Birth of Ondoher.',
},
{
  year: '1789',
  era: 'Third Age',
  description: 'Birth of Araphant.',
},
{
  year: '1798',
  era: 'Third Age',
  description: 'Death of King Tarondor. Telumehtar becomes the twenty-eighth King of Gondor.',
},
{
  year: '1810',
  era: 'Third Age',
  description: 'Telumehtar conquers the Haven of Umbar and takes the name Umbardacil.',
},
{
  year: '1813',
  era: 'Third Age',
  description: 'Death of Arveleg II, Araval becomes King of Arnor.',
},
{
  year: '1832',
  era: 'Third Age',
  description: 'Birth of Náin I.',
},
{
  year: '1850',
  era: 'Third Age',
  description: 'Death of King Telumehtar. Narmacil II becomes the twenty-ninth King of Gondor.',
},
{
  year: '1851',
  era: 'Third Age',
  description: 'Angmar temporarily defeated. Easterlings attack Gondor.',
},
{
  year: '1856',
  era: 'Third Age',
  description: "Deaths of King Narmacil II and Marhari in the Battle of the Plains. Loss of eastern provinces of Gondor. Calimehtar becomes the thirtieth King of Gondor. Marhwini leads Northmen refugees out of Rhovanion to the Vales of Anduin, where they become the Éothéod.",
},
{
  year: '1864',
  era: 'Third Age',
  description: 'Birth of Arvedui.',
},
{
  year: '1879',
  era: 'Third Age',
  description: 'Birth of Pelendur.',
},
{
  year: '1883',
  era: 'Third Age',
  description: 'Birth of Eärnil II.',
},
{
  year: '1891',
  era: 'Third Age',
  description: 'Death of Araval. Araphant becomes King of Arnor.',
},
{
  year: '1896',
  era: 'Third Age',
  description: 'Birth of Fíriel.',
},
{
  year: '1899',
  era: 'Third Age',
  description: "Peace on Gondor's eastern front as the Easterlings are defeated.",
},
{
  year: '1900',
  era: 'Third Age',
  description: 'Calimehtar builds the White Tower in Minas Anor.',
},
{
  year: '1919',
  era: 'Third Age',
  description: 'Birth of Vorondil.',
},
{
  year: '1928',
  era: 'Third Age',
  description: 'Birth of Eärnur.',
},
{
  year: '1934',
  era: 'Third Age',
  description: 'Birth of Thráin I.',
},
{
  year: '1936',
  era: 'Third Age',
  description: 'Death of King Calimehtar. Ondoher becomes the thirty-first King of Gondor.',
},
{
  year: '1938',
  era: 'Third Age',
  description: 'Birth of Aranarth. Vorondil creates the Horn of Araw.',
},
{
  year: '1940',
  era: 'Third Age',
  description: 'Gondor and Arnor form an alliance. Arvedui weds Fíriel.',
},
{
  year: '1944',
  era: 'Third Age',
  description: "Wainrider attacks resume on Gondor's eastern front. Deaths of King Ondoher, Artamir, Faramir and Minohtar. Pelendur becomes interregnum Ruling Steward of Gondor. Arvedui makes claim on sceptre of Gondor but is rejected.",
},
{
  year: '1945',
  era: 'Third Age',
  description: 'Eärnil II is chosen thirty-second King of Gondor.',
},
{
  year: '1950',
  era: 'Third Age',
  description: 'Birth of Imrazôr.',
},
{
  year: '1960',
  era: 'Third Age',
  description: 'Birth of Mardil Voronwë.',
},
{
  year: '1964',
  era: 'Third Age',
  description: 'Death of Araphant. Arvedui becomes King of Arnor.',
},
{
  year: '1973',
  era: 'Third Age',
  description: "King Arvedui of Arthedain sends word to King Eärnil II of Gondor that they are struggling against the threat of Angmar. Eärnil sends a fleet north carrying his son Eärnur with an army.",
},
{
  year: '1974',
  era: 'Third Age',
  description: 'Destruction of the Kingdom of Arnor.',
},
{
  year: '1975',
  era: 'Third Age',
  description: 'Drowning of Arvedui with two palantíri. Angmar destroyed. Frumgar becomes Lord of the Éothéod.',
},
{
  year: '1976',
  era: 'Third Age',
  description: 'Aranarth becomes the first Chieftain of the Dúnedain.',
},
{
  year: '1977',
  era: 'Third Age',
  description: 'Frumgar drives remnant of Angmar army from the northern vales of Anduin.',
},
{
  year: '1979',
  era: 'Third Age',
  description: "Bucca of the Marish becomes first Thain of the Shire.",
},
{
  year: '1980',
  era: 'Third Age',
  description: 'Nazgûl gather in Mordor. Durins Bane awakes in Khazad-dûm. Death of Durin VI. Náin I becomes King of Durins folk.',
},
{
  year: '1981',
  era: 'Third Age',
  description: 'Death of Náin I. Dwarves flee Moria. Deaths of Amroth and Nimrodel. The Silvan Elves flee south. Galadriel and Celeborn return to Laurelindórenan.',
},
{
  year: '1998',
  era: 'Third Age',
  description: 'Death of Pelendur. Stewardship of Gondor becomes hereditary.',
},
{
  year: '1999',
  era: 'Third Age',
  description: 'Birth of Eradan. Erebor founded. The Arkenstone discovered.',
},
{
  year: '2000',
  era: 'Third Age',
  description: 'The Nazgûl issue from Mordor and besiege Minas Ithil.',
},
{
  year: '2002',
  era: 'Third Age',
  description: 'Capture of Minas Ithil and its palantír. Minas Anor renamed Minas Tirith.',
},
{
  year: '2004',
  era: 'Third Age',
  description: 'Births of Galador and Gilmith.',
},
{
  year: '2012',
  era: 'Third Age',
  description: 'Birth of Arahael. Death of Fram.',
},
{
  year: '2029',
  era: 'Third Age',
  description: 'Death of Vorondil.',
},
{
  year: '2035',
  era: 'Third Age',
  description: 'Birth of Thorin I.',
},
{
  year: '2037',
  era: 'Third Age',
  description: 'Birth of Herion.',
},
{
  year: '2043',
  era: 'Third Age',
  description: 'Death of King Eärnil II. Eärnur becomes the thirty-third, and incidentally the last, King of Gondor. The Witch-king issues a challenge to King Eärnur.',
},
{
  year: '2050',
  era: 'Third Age',
  description: 'The Witch-king issues a second challenge to King Eärnur. Death of King Eärnur. End of the line of the Kings of Gondor. The Reign of the Stewards begins. Mardil Voronwë becomes the first Ruling Steward of Gondor.',
},
{
  year: '2059',
  era: 'Third Age',
  description: 'Steward Mardil of Gondor adds two leap days.',
},
{
  year: '2060',
  era: 'Third Age',
  description: 'The Wise fear Sauron is active in Dol Guldur. Birth of the unnamed second Prince of Dol Amroth.',
},
{
  year: '2063',
  era: 'Third Age',
  description: 'Sauron flees Dol Guldur. The Watchful Peace begins.',
},
{
  year: '2074',
  era: 'Third Age',
  description: 'Birth of Belegorn.',
},
{
  year: '2076',
  era: 'Third Age',
  description: 'Death of Imrazôr.',
},
{
  year: '2080',
  era: 'Third Age',
  description: 'Death of Steward Mardil Voronwë. Eradan becomes the second Ruling Steward of Gondor.',
},
{
  year: '2084',
  era: 'Third Age',
  description: 'Birth of Aranuir.',
},
{
  year: '2106',
  era: 'Third Age',
  description: 'Death of Aranarth. Arahael becomes the second Chieftain of the Dúnedain.',
},
{
  year: '2116',
  era: 'Third Age',
  description: 'Death of Steward Eradan. Herion becomes the third Ruling Steward of Gondor.',
},
{
  year: '2120',
  era: 'Third Age',
  description: 'Birth of the unnamed third Prince of Dol Amroth.',
},
{
  year: '2124',
  era: 'Third Age',
  description: 'Birth of Húrin I.',
},
{
  year: '2129',
  era: 'Third Age',
  description: 'Death of Galador. Galador\'s unnamed son becomes the second Prince of Dol Amroth.',
},
{
  year: '2136',
  era: 'Third Age',
  description: 'Birth of Glóin.',
},
{
  year: '2148',
  era: 'Third Age',
  description: 'Death of Steward Herion. Belegorn becomes the fourth Ruling Steward of Gondor.',
},
{
  year: '2156',
  era: 'Third Age',
  description: 'Birth of Aravir.',
},
{
  year: '2165',
  era: 'Third Age',
  description: 'Birth of Túrin I.',
},
{
  year: '2172',
  era: 'Third Age',
  description: 'Birth of the unnamed fourth Prince of Dol Amroth.',
},
{
  year: '2177',
  era: 'Third Age',
  description: 'Death of Arahael. Aranuir becomes the third Chieftain of the Dúnedain.',
},
{
  year: '2190',
  era: 'Third Age',
  description: 'Death of Thráin I.',
},
{
  year: '2203',
  era: 'Third Age',
  description: 'Death of the unnamed second Prince of Dol Amroth. The second Prince\'s unnamed son becomes the third Prince of Dol Amroth.',
},
{
  year: '2204',
  era: 'Third Age',
  description: 'Death of Steward Belegorn. Húrin I becomes the fifth Ruling Steward of Gondor.',
},
{
  year: '2210',
  era: 'Third Age',
  description: 'Thorin I goes to the Grey Mountains.',
},
{
  year: '2225',
  era: 'Third Age',
  description: 'Birth of the unnamed fifth Prince of Dol Amroth.',
},
{
  year: '2227',
  era: 'Third Age',
  description: 'Birth of Aragorn I.',
},
{
  year: '2238',
  era: 'Third Age',
  description: 'Birth of Óin.',
},
{
  year: '2244',
  era: 'Third Age',
  description: 'Death of Steward Húrin I. Túrin I becomes the sixth Ruling Steward of Gondor.',
},
{
  year: '2245',
  era: 'Third Age',
  description: 'Birth of Hador.',
},
{
  year: '2247',
  era: 'Third Age',
  description: 'Death of Aranuir. Aravir becomes the fourth Chieftain of the Dúnedain.',
},
{
  year: '2254',
  era: 'Third Age',
  description: 'Death of the unnamed third Prince of Dol Amroth. The third Prince\'s unnamed son becomes the fourth Prince of Dol Amroth.',
},
{
  year: '2274',
  era: 'Third Age',
  description: 'Birth of the unnamed sixth Prince of Dol Amroth.',
},
{
  year: '2278',
  era: 'Third Age',
  description: 'Death of Steward Túrin I. Hador becomes the seventh Ruling Steward of Gondor.',
},
{
  year: '2289',
  era: 'Third Age',
  description: 'Death of Thorin I.',
},
{
  year: '2290',
  era: 'Third Age',
  description: 'Birth of Barahir.',
},
{
  year: '2296',
  era: 'Third Age',
  description: 'Birth of Araglas.',
},
{
  year: '2299',
  era: 'Third Age',
  description: 'Death of the unnamed fourth Prince of Dol Amroth. The fourth Prince\'s unnamed son becomes the fifth Prince of Dol Amroth.',
},
{
  year: '2319',
  era: 'Third Age',
  description: 'Death of Aravir. Aragorn I becomes the fifth Chieftain of the Dúnedain.',
},
{
  year: '2324',
  era: 'Third Age',
  description: 'Birth of the unnamed seventh Prince of Dol Amroth.',
},
{
  year: '2327',
  era: 'Third Age',
  description: 'Death of Aragorn I. Araglas becomes the sixth Chieftain of the Dúnedain.',
},
{
  year: '2328',
  era: 'Third Age',
  description: 'Birth of Dior.',
},
{
  year: '2338',
  era: 'Third Age',
  description: 'Birth of Náin II.',
},
{
  year: '2340',
  era: 'Third Age',
  description: 'Buckland is settled. Brandy Hall constructed.',
},
{
  year: '2348',
  era: 'Third Age',
  description: 'Death of the unnamed fifth Prince of Dol Amroth. The fifth Prince\'s unnamed son becomes the sixth Prince of Dol Amroth.',
},
{
  year: '2360',
  era: 'Third Age',
  description: 'Hador adds a day to this year to correct for the millennial deficit.',
},
{
  year: '2365',
  era: 'Third Age',
  description: 'Birth of Arahad I.',
},
{
  year: '2373',
  era: 'Third Age',
  description: 'Birth of the unnamed eighth Prince of Dol Amroth.',
},
{
  year: '2375',
  era: 'Third Age',
  description: 'Birth of Denethor I.',
},
{
  year: '2385',
  era: 'Third Age',
  description: 'Death of Glóin.',
},
{
  year: '2395',
  era: 'Third Age',
  description: 'Death of Steward Hador. Barahir becomes the eighth Ruling Steward of Gondor.',
},
{
  year: '2400',
  era: 'Third Age',
  description: 'Death of the unnamed sixth Prince of Dol Amroth. The sixth Prince\'s unnamed son becomes the seventh Prince of Dol Amroth.',
},
{
  year: '2410',
  era: 'Third Age',
  description: 'Birth of Boromir.',
},
{
  year: '2412',
  era: 'Third Age',
  description: 'Death of Steward Barahir. Dior becomes the ninth Ruling Steward of Gondor.',
},
{
  year: '2418',
  era: 'Third Age',
  description: 'Birth of the unnamed ninth Prince of Dol Amroth.',
},
{
  year: '2430',
  era: 'Third Age',
  description: 'About this time, Sméagol is born.',
},
{
  year: '2431',
  era: 'Third Age',
  description: 'Birth of Aragost.',
},
{
  year: '2435',
  era: 'Third Age',
  description: 'Death of Steward Dior. Denethor I becomes the tenth Ruling Steward of Gondor.',
},
{
  year: '2440',
  era: 'Third Age',
  description: 'Birth of Dáin I.',
},
{
  year: '2449',
  era: 'Third Age',
  description: 'Birth of Cirion.',
},
{
  year: '2450',
  era: 'Third Age',
  description: 'Birth of Borin.',
},
{
  year: '2455',
  era: 'Third Age',
  description: 'Death of Araglas. Arahad I becomes the seventh Chieftain of the Dúnedain.',
},
{
  year: '2458',
  era: 'Third Age',
  description: 'Death of the unnamed seventh Prince of Dol Amroth. The seventh Prince\'s unnamed son becomes the eighth Prince of Dol Amroth.',
},
{
  year: '2459',
  era: 'Third Age',
  description: 'Birth of Léod.',
},
{
  year: '2460',
  era: 'Third Age',
  description: 'Sauron returns to Dol Guldur. The Watchful Peace ends.',
},
{
  year: '2463',
  era: 'Third Age',
  description: 'Formation of the White Council. The One Ring discovered by Déagol who is slain by Sméagol. Birth of the unnamed tenth Prince of Dol Amroth.',
},
{
  year: '2470',
  era: 'Third Age',
  description: 'Sméagol hides in Goblin-town within the Misty Mountains.',
},
{
  year: '2475',
  era: 'Third Age',
  description: 'Boromir defends Osgiliath.',
},
{
  year: '2477',
  era: 'Third Age',
  description: 'Death of Steward Denethor I. Boromir becomes the eleventh Ruling Steward of Gondor.',
},
{
  year: '2480',
  era: 'Third Age',
  description: 'Birth of Hallas. Orcs make secret strongholds in the Misty Mountains. Sauron sends Orcs to Moria.',
},
{
  year: '2485',
  era: 'Third Age',
  description: 'Birth of Eorl.',
},
{
  year: '2488',
  era: 'Third Age',
  description: 'Death of Óin.',
},
{
  year: '2489',
  era: 'Third Age',
  description: 'Death of Steward Boromir. Cirion becomes the twelfth Ruling Steward of Gondor.',
},
{
  year: '2497',
  era: 'Third Age',
  description: 'Birth of Aravorn.',
},
{
  year: '2498',
  era: 'Third Age',
  description: 'Death of the unnamed eighth Prince of Dol Amroth. The eighth Prince\'s unnamed son becomes the ninth Prince of Dol Amroth.',
},
{
  year: '2501',
  era: 'Third Age',
  description: 'Death of Léod whilst trying to tame the horse Felaróf. Eorl becomes Lord of the Éothéod at age sixteen and tames Felaróf, first of the Mearas.',
},
{
  year: '2505',
  era: 'Third Age',
  description: 'Birth of the unnamed eleventh Prince of Dol Amroth.',
},
{
  year: '2509',
  era: 'Third Age',
  description: 'Celebrían poisoned by an Orc blade.',
},
{
  year: '2510',
  era: 'Third Age',
  description: 'Celebrían sails over the Sea. Battle of the Field of Celebrant. Oaths of Cirion and Eorl. Calenardhon ceded to Éothéod and Rohan is created. Eorl becomes the first King of Rohan. Cirion moves the Tomb of Elendil to Minas Tirith.',
},
{
  year: '2512',
  era: 'Third Age',
  description: 'Birth of Brego.',
},
{
  year: '2515',
  era: 'Third Age',
  description: 'Birth of Húrin II.',
},
{
  year: '2523',
  era: 'Third Age',
  description: 'Death of Arahad I. Aragost becomes the eighth Chieftain of the Dúnedain.',
},
{
  year: '2540',
  era: 'Third Age',
  description: 'Death of the unnamed ninth Prince of Dol Amroth. The ninth Prince\'s unnamed son becomes the tenth Prince of Dol Amroth.',
},
{
  year: '2542',
  era: 'Third Age',
  description: 'Birth of Thrór.',
},
{
  year: '2544',
  era: 'Third Age',
  description: 'Birth of Aldor.',
},
{
  year: '2545',
  era: 'Third Age',
  description: 'Death of King Eorl. Brego becomes the second King of Rohan Rohan. Birth of Belecthor I.',
},
{
  year: '2546',
  era: 'Third Age',
  description: 'Birth of the unnamed twelfth Prince of Dol Amroth.',
},
{
  year: '2552',
  era: 'Third Age',
  description: 'Birth of Frór.',
},
{
  year: '2560',
  era: 'Third Age',
  description: 'Birth of Farin.',
},
{
  year: '2563',
  era: 'Third Age',
  description: 'Births of Arahad II and Grór.',
},
{
  year: '2567',
  era: 'Third Age',
  description: 'Death of Steward Cirion. Hallas becomes the thirteenth Steward of Gondor.',
},
{
  year: '2569',
  era: 'Third Age',
  description: 'King Brego completes Meduseld.',
},
{
  year: '2570',
  era: 'Third Age',
  description: 'Baldor enters the Paths of the Dead. Death of King Brego. Aldor becomes the third King of Rohan. Birth of Fréa. Dragons reappear in Ered Mithrin.',
},
{
  year: '2576',
  era: 'Third Age',
  description: 'Birth of Orodreth.',
},
{
  year: '2582',
  era: 'Third Age',
  description: 'Death of the unnamed tenth Prince of Dol Amroth. The tenth Prince\'s unnamed son becomes the eleventh Prince of Dol Amroth.',
},
{
  year: '2585',
  era: 'Third Age',
  description: 'Death of Náin II.',
},
{
  year: '2588',
  era: 'Third Age',
  description: 'Death of Aragost. Aravorn becomes the ninth Chieftain of the Dúnedain. Birth of the unnamed thirteenth Prince of Dol Amroth.',
},
{
  year: '2589',
  era: 'Third Age',
  description: 'Deaths of Dáin I and Frór.',
},
{
  year: '2590',
  era: 'Third Age',
  description: 'Thrór returns to Erebor and becomes King under the Mountain. Grór goes to the Iron Hills.',
},
{
  year: '2594',
  era: 'Third Age',
  description: 'Birth of Fréawine.',
},
{
  year: '2600',
  era: 'Third Age',
  description: 'Birth of Ecthelion I.',
},
{
  year: '2605',
  era: 'Third Age',
  description: 'Death of Steward Hallas. Húrin II becomes the fourteenth Steward of Gondor.',
},
{
  year: '2619',
  era: 'Third Age',
  description: 'Birth of Goldwine.',
},
{
  year: '2620',
  era: 'Third Age',
  description: 'Birth of Isengrim Took II.',
},
{
  year: '2623',
  era: 'Third Age',
  description: 'Death of the unnamed eleventh Prince of Dol Amroth. The eleventh Prince\'s unnamed son becomes the twelfth Prince of Dol Amroth.',
},
{
  year: '2626',
  era: 'Third Age',
  description: 'Birth of Egalmoth.',
},
{
  year: '2627',
  era: 'Third Age',
  description: 'Birth of the unnamed fourteenth Prince of Dol Amroth.',
},
{
  year: '2628',
  era: 'Third Age',
  description: 'Birth of Arassuil. Death of Steward Húrin II. Belecthor I becomes the fifteenth Steward of Gondor.',
},
{
  year: '2644',
  era: 'Third Age',
  description: 'Thráin II born. Déor born.',
},
{
  year: '2645',
  era: 'Third Age',
  description: 'Death of King Aldor. Fréa becomes the fourth King of Rohan.',
},
{
  year: '2654',
  era: 'Third Age',
  description: 'Death of Aravorn. Arahad II becomes Chieftain of the Dúnedain.',
},
{
  year: '2655',
  era: 'Third Age',
  description: 'Death of Steward Belecthor I. Orodreth becomes the sixteenth Ruling Steward of Gondor. Birth of Beren.',
},
{
  year: '2659',
  era: 'Third Age',
  description: 'Death of King Fréa. Fréawine becomes the fifth King of Rohan.',
},
{
  year: '2660',
  era: 'Third Age',
  description: 'Death of the unnamed twelfth Prince of Dol Amroth. The twelfth Prince\'s unnamed son becomes the thirteenth Prince of Dol Amroth.',
},
{
  year: '2662',
  era: 'Third Age',
  description: 'Birth of Fundin.',
},
{
  year: '2665',
  era: 'Third Age',
  description: 'Birth of Náin.',
},
{
  year: '2666',
  era: 'Third Age',
  description: 'Birth of Isumbras Took III.',
},
{
  year: '2668',
  era: 'Third Age',
  description: 'Birth of Gram.',
},
{
  year: '2670',
  era: 'Third Age',
  description: 'Tobold Hornblower plants Pipe-weed.',
},
{
  year: '2671',
  era: 'Third Age',
  description: 'Birth of Gróin. Birth of the unnamed fifteenth Prince of Dol Amroth.',
},
{
  year: '2680',
  era: 'Third Age',
  description: 'Death of King Fréawine. Goldwine becomes the sixth King of Rohan.',
},
{
  year: '2683',
  era: 'Third Age',
  description: 'Great Smials constructed.',
},
{
  year: '2685',
  era: 'Third Age',
  description: 'Death of Steward Orodreth. Ecthelion I becomes the seventeenth Ruling Steward of Gondor.',
},
{
  year: '2691',
  era: 'Third Age',
  description: 'Birth of Helm.',
},
{
  year: '2693',
  era: 'Third Age',
  description: 'Birth of Arathorn I.',
},
{
  year: '2698',
  era: 'Third Age',
  description: 'Ecthelion I rebuilds the White Tower in Minas Tirith. Death of Steward Ecthelion I. Egalmoth becomes the eighteenth Ruling Steward of Gondor.',
},
{
  year: '2699',
  era: 'Third Age',
  description: 'Death of King Goldwine. Déor becomes the seventh King of Rohan.',
},
{
  year: '2700',
  era: 'Third Age',
  description: 'Birth of Beregond.',
},
{
  year: '2701',
  era: 'Third Age',
  description: 'Birth of Ferumbras Took II. Death of the unnamed thirteenth Prince of Dol Amroth. The thirteenth Prince\'s unnamed son becomes the fourteenth Prince of Dol Amroth.',
},
{
  year: '2704',
  era: 'Third Age',
  description: 'Birth of Bandobras Took.',
},
{
  year: '2709',
  era: 'Third Age',
  description: 'Birth of the unnamed sixteenth Prince of Dol Amroth.',
},
{
  year: '2710',
  era: 'Third Age',
  description: 'Dunlendings capture Isengard.',
},
{
  year: '2711',
  era: 'Third Age',
  description: 'Death of Borin.',
},
{
  year: '2718',
  era: 'Third Age',
  description: 'Death of King Déor. Gram becomes the eighth King of Rohan.',
},
{
  year: '2719',
  era: 'Third Age',
  description: 'Death of Arahad II. Arassuil becomes Chieftain of the Dúnedain.',
},
{
  year: '2722',
  era: 'Third Age',
  description: 'Death of Isengrim Took II. Isumbras Took III becomes Thain of the Shire.',
},
{
  year: '2726',
  era: 'Third Age',
  description: 'Birth of Fréaláf.',
},
{
  year: '2731',
  era: 'Third Age',
  description: 'Birth of Gundolpho Bolger.',
},
{
  year: '2733',
  era: 'Third Age',
  description: 'Death of the unnamed fourteenth Prince of Dol Amroth. The fourteenth Prince\'s unnamed son becomes the fifteenth Prince of Dol Amroth.',
},
{
  year: '2734',
  era: 'Third Age',
  description: 'Birth of Gormadoc Brandybuck.',
},
{
  year: '2740',
  era: 'Third Age',
  description: 'Orcs invade Eriador.',
},
{
  year: '2741',
  era: 'Third Age',
  description: 'Death of King Gram. Helm becomes the ninth King of Rohan.',
},
{
  year: '2743',
  era: 'Third Age',
  description: 'Death of Steward Egalmoth. Beren becomes the nineteenth Ruling Steward of Gondor.',
},
{
  year: '2745',
  era: 'Third Age',
  description: 'Birth of Fortinbras Took I. Birth of Thorin II Oakenshield. The unnamed fifteenth Prince of Dol Amroth is killed by the Corsairs of Umbar. The fifteenth Prince\'s unnamed son becomes the sixteenth Prince of Dol Amroth. Birth of the unnamed seventeenth Prince of Dol Amroth.',
},
{
  year: '2747',
  era: 'Third Age',
  description: 'Battle of Greenfields. Death of Golfimbul.',
},
{
  year: '2748',
  era: 'Third Age',
  description: 'Orcs driven from Eriador.',
},
{
  year: '2751',
  era: 'Third Age',
  description: 'Birth of Frerin.',
},
{
  year: '2752',
  era: 'Third Age',
  description: 'Births of Belecthor II and Brytta.',
},
{
  year: '2754',
  era: 'Third Age',
  description: 'Death of Freca.',
},
{
  year: '2757',
  era: 'Third Age',
  description: 'Birth of Argonui.',
},
{
  year: '2758',
  era: 'Third Age',
  description: 'Umbar attacks Gondor. Easterlings and Dunlendings invade Rohan. Edoras siezed. Gandalf aids the Shire. The Long Winter begins. Deaths of Haleth and Háma.',
},
{
  year: '2759',
  era: 'Third Age',
  description: 'Saruman gains the keys to Orthanc. Edoras recaptured. End of the Long Winter. Death of Isumbras Took III. Ferumbras Took II becomes Thain of the Shire. Death of King Helm Hammerhand. Fréaláf (son of Hild, sister of Helm) becomes the tenth King of Rohan.',
},
{
  year: '2760',
  era: 'Third Age',
  description: 'Births of Dís and Hamfast of Gamwich.',
},
{
  year: '2763',
  era: 'Third Age',
  description: 'Death of Steward Beren. Beregond becomes the twentieth Ruling Steward of Gondor. Birth of Balin.',
},
{
  year: '2767',
  era: 'Third Age',
  description: 'Births of Dáin II Ironfoot, Balbo Baggins, and Bosco Boffin.',
},
{
  year: '2769',
  era: 'Third Age',
  description: 'Birth of Basso Boffin.',
},
{
  year: '2770',
  era: 'Third Age',
  description: 'Destruction of Dale. Smaug takes Erebor. Birth of Briffo Boffin.',
},
{
  year: '2772',
  era: 'Third Age',
  description: 'Births of Dwalin and Berylla Boffin (Baggins).',
},
{
  year: '2774',
  era: 'Third Age',
  description: 'Births of Óin and Gundahar Bolger.',
},
{
  year: '2775',
  era: 'Third Age',
  description: 'Birth of Madoc Brandybuck.',
},
{
  year: '2778',
  era: 'Third Age',
  description: 'Birth of Rudolph Bolger.',
},
{
  year: '2779',
  era: 'Third Age',
  description: 'Birth of Sadoc Brandybuck.',
},
{
  year: '2780',
  era: 'Third Age',
  description: 'Births of Walda and Gundahad Bolger.',
},
{
  year: '2782',
  era: 'Third Age',
  description: 'Births of Thorondir and Marroc Brandybuck.',
},

{
  year: '2782',
  era: 'Third Age',
  description: 'Births of Thorondir and Marroc Brandybuck.',
},
{
  year: '2783',
  era: 'Third Age',
  description: 'Birth of Glóin.',
},
{
  year: '2784',
  era: 'Third Age',
  description: 'Death of Arassuil. Arathorn I becomes Chieftain of the Dúnedain.',
},
{
  year: '2785',
  era: 'Third Age',
  description: 'Birth of the unnamed eighteenth Prince of Dol Amroth.',
},
{
  year: '2788',
  era: 'Third Age',
  description: 'Birth of Roäc.',
},
{
  year: '2790',
  era: 'Third Age',
  description: 'Death of Thrór. Dwarves prepare for war. Gerontius Took born.',
},
{
  year: '2793',
  era: 'Third Age',
  description: 'The War of the Dwarves and Orcs begins.',
},
{
  year: '2795',
  era: 'Third Age',
  description: 'Basso Boffin leaves the Shire and supposedly goes to sea.',
},
{
  year: '2798',
  era: 'Third Age',
  description: 'Death of King Fréaláf Hildeson. Brytta becomes the eleventh King of Rohan.',
},
{
  year: '2799',
  era: 'Third Age',
  description: 'Battle of Nanduhirion. Deaths of Azog, Náin, Frerin and Fundin. War of the Dwarves and Orcs ends. The unnamed sixteenth Prince of Dol Amroth is slain in battle. The sixteenth Prince\'s unnamed son becomes the seventeenth Prince of Dol Amroth.',
},
{
  year: '2800',
  era: 'Third Age',
  description: 'Orcs invade Rohan. Wiseman Gamwich born.',
},
{
  year: '2801',
  era: 'Third Age',
  description: 'Death of Ferumbras Took II. Fortinbras Took I becomes Thain of the Shire.',
},
{
  year: '2802',
  era: 'Third Age',
  description: 'Thráin II and Thorin II Oakenshield come to Ered Luin.',
},
{
  year: '2803',
  era: 'Third Age',
  description: 'Death of Farin.',
},
{
  year: '2804',
  era: 'Third Age',
  description: 'Birth of Folca.',
},
{
  year: '2805',
  era: 'Third Age',
  description: 'Death of Grór.',
},
{
  year: '2806',
  era: 'Third Age',
  description: 'Death of Bandobras Took.',
},
{
  year: '2807',
  era: 'Third Age',
  description: 'Birth of Mungo Baggins.',
},
{
  year: '2810',
  era: 'Third Age',
  description: 'Birth of Fastolph Bolger.',
},
{
  year: '2811',
  era: 'Third Age',
  description: 'Death of Steward Beregond. Belecthor II becomes twenty-first Ruling Steward of Gondor.',
},
{
  year: '2812',
  era: 'Third Age',
  description: 'Births of Pansy Baggins (Bolger) and Otto Boffin.',
},
{
  year: '2814',
  era: 'Third Age',
  description: 'Birth of Laura Grubb.',
},
{
  year: '2815',
  era: 'Third Age',
  description: 'Births of Túrin II and Adalgar Bolger.',
},
{
  year: '2816',
  era: 'Third Age',
  description: 'Birth of Ponto Baggins I.',
},
{
  year: '2817',
  era: 'Third Age',
  description: 'Birth of Marmadoc Brandybuck.',
},
{
  year: '2818',
  era: 'Third Age',
  description: 'Birth of Adaldrida Bolger (Brandybuck).',
},
{
  year: '2820',
  era: 'Third Age',
  description: 'Births of Arador, Largo Baggins, and Cottar (sire of the Cottons).',
},
{
  year: '2822',
  era: 'Third Age',
  description: 'Births of Lily Baggins (Goodbody) and Gundabald Bolger.',
},
{
  year: '2826',
  era: 'Third Age',
  description: 'Birth of Salvia Brandybuck (Bolger).',
},
{
  year: '2827',
  era: 'Third Age',
  description: 'Birth of Aglahad.',
},
{
  year: '2830',
  era: 'Third Age',
  description: 'Birth of Folcwine. Death of Gundolpho Bolger.',
},
{
  year: '2832',
  era: 'Third Age',
  description: 'Birth of Isengrim Took III.',
},
{
  year: '2836',
  era: 'Third Age',
  description: 'Death of Gormadoc Brandybuck. Madoc Brandybuck becomes Master of Buckland.',
},
{
  year: '2838',
  era: 'Third Age',
  description: 'Birth of Isumbras Took IV.',
},
{
  year: '2840',
  era: 'Third Age',
  description: 'Birth of Hildigrim Took.',
},
{
  year: '2841',
  era: 'Third Age',
  description: 'Thráin II sets out to revisit Erebor.',
},
{
  year: '2842',
  era: 'Third Age',
  description: 'Birth of Isembold Took. Death of King Brytta. Walda becomes the twelfth King of Rohan.',
},
{
  year: '2844',
  era: 'Third Age',
  description: 'Birth of Hildifons Took.',
},
{
  year: '2845',
  era: 'Third Age',
  description: 'Thráin II captured and Ring of Durin taken. Gandalf enters Moria.',
},
{
  year: '2846',
  era: 'Third Age',
  description: 'Births of Bungo Baggins and Hob Gammidge.',
},
{
  year: '2847',
  era: 'Third Age',
  description: 'Birth of Isembard Took.',
},
{
  year: '2848',
  era: 'Third Age',
  description: 'Death of Arathorn I. Argonui becomes Chieftain of the Dúnedain. Death of Fortinbras Took I. Gerontius Took becomes Thain of the Shire.',
},
{
  year: '2849',
  era: 'Third Age',
  description: 'Births of Hildibrand Took and Rowan.',
},
{
  year: '2850',
  era: 'Third Age',
  description: 'Gandalf secretly enters Dol Guldur. Death of Thráin II.',
},
{
  year: '2851',
  era: 'Third Age',
  description: 'The White Council meets to discuss Dol Guldur. Saruman learns of Hobbits. Birth of Halfred Greenhand. Death of King Walda. Folca becomes the thirteenth King of Rohan.',
},
{
  year: '2852',
  era: 'Third Age',
  description: 'Birth of Belladonna Took (Baggins). Death of the White Tree of Gondor.',
},
{
  year: '2854',
  era: 'Third Age',
  description: 'Births of Erling and Hugo Boffin.',
},
{
  year: '2855',
  era: 'Third Age',
  description: 'Births of Turgon and Rudigar Bolger.',
},
{
  year: '2856',
  era: 'Third Age',
  description: 'Births of Belba Baggins (Bolger), Rosa Baggins (Took), and Donnamira Took (Boffin).',
},
{
  year: '2857',
  era: 'Third Age',
  description: 'Birth of Uffo Boffin.',
},
{
  year: '2858',
  era: 'Third Age',
  description: 'Birth of Folcred and Fastred. Death of Bosco Boffin.',
},
{
  year: '2859',
  era: 'Third Age',
  description: 'Births of Fíli and Hending. Death of the unnamed seventeenth Prince of Dol Amroth. The seventeenth Prince\'s unnamed son becomes the eighteenth Prince of Dol Amroth.',
},
{
  year: '2860',
  era: 'Third Age',
  description: 'Births of Longo Baggins, Mirabella Took (Brandybuck), Rollo Boffin, Gorbadoc Brandybuck, Cotman, and Rudibert Bolger.',
},
{
  year: '2861',
  era: 'Third Age',
  description: 'Birth of Theobald Bolger.',
},
{
  year: '2862',
  era: 'Third Age',
  description: 'Births of Linda Baggins (Proudfoot), Isengar Took, and Rose (Cotton).',
},
{
  year: '2863',
  era: 'Third Age',
  description: 'Birth of Carl Cotton.',
},
{
  year: '2864',
  era: 'Third Age',
  description: 'Orc raids in Rohan cease. Births of Kíli, Bingo Baggins, Ruby Bolger (Baggins), and Fosco Baggins. Death of King Folca. Folcwine becomes the fourteenth King of Rohan.',
},
{
  year: '2865',
  era: 'Third Age',
  description: 'Birth of Primrose Boffin (Bracegirdle).',
},
{
  year: '2866',
  era: 'Third Age',
  description: 'Births of Angelimir and Thorin III Stonehelm.',
},
{
  year: '2868',
  era: 'Third Age',
  description: 'Birth of Orgulas Brandybuck.',
},
{
  year: '2870',
  era: 'Third Age',
  description: 'Birth of Fengel.',
},
{
  year: '2872',
  era: 'Third Age',
  description: 'Death of Steward Belecthor II. Thorondir becomes the twenty-second Ruling Steward of Gondor.',
},
{
  year: '2873',
  era: 'Third Age',
  description: 'Birth of Arathorn II.',
},
{
  year: '2875',
  era: 'Third Age',
  description: 'Death of Gundahar Bolger.',
},
{
  year: '2877',
  era: 'Third Age',
  description: 'Death of Madoc Brandybuck. Marmadoc Brandybuck becomes Master of Buckland.',
},
{
  year: '2878',
  era: 'Third Age',
  description: 'Birth of Fortinbras Took II.',
},
{
  year: '2879',
  era: 'Third Age',
  description: 'Birth of Gimli.',
},
{
  year: '2880',
  era: 'Third Age',
  description: 'Birth of Adalgrim Took.',
},
{
  year: '2882',
  era: 'Third Age',
  description: 'Death of Steward Thorondir. Túrin II becomes the twenty-third Ruling Steward of Gondor.',
},
{
  year: '2883',
  era: 'Third Age',
  description: 'Birth of Lalia Clayhanger.',
},
{
  year: '2885',
  era: 'Third Age',
  description: 'Haradrim attack. Deaths of Folcred and Fastred. Birth of Hobson Gamgee.',
},
{
  year: '2886',
  era: 'Third Age',
  description: 'Birth of Ecthelion II.',
},
{
  year: '2887',
  era: 'Third Age',
  description: 'Birth of Flambard Took.',
},
{
  year: '2890',
  era: 'Third Age',
  description: 'Births of Bilbo Baggins and Sigismond Took.',
},
{
  year: '2892',
  era: 'Third Age',
  description: 'Birth of Holman Greenhand.',
},
{
  year: '2894',
  era: 'Third Age',
  description: 'Birth of Jago Boffin.',
},
{
  year: '2895',
  era: 'Third Age',
  description: 'Birth of Herugar Bolger.',
},
{
  year: '2897',
  era: 'Third Age',
  description: 'Birth of Jessamine Boffin (Bolger).',
},
{
  year: '2899',
  era: 'Third Age',
  description: 'Death of the unnamed eighteenth Prince of Dol Amroth. The eighteenth Prince\'s son, Aglahad, becomes the nineteenth Prince of Dol Amroth.',
},
{
  year: '2900',
  era: 'Third Age',
  description: 'Deaths of Mungo Baggins and Otto Boffin. Birth of Gruffo Boffin.',
},
{
  year: '2901',
  era: 'Third Age',
  description: 'Ithilien deserted. Henneth Annûn constructed. Birth of Adalbert Bolger.',
},
{
  year: '2902',
  era: 'Third Age',
  description: 'Births of Posco Baggins, Dora Baggins, Rorimac Brandybuck, and Holman Cotton.',
},
{
  year: '2903',
  era: 'Third Age',
  description: 'Birth of Falco Chubb-Baggins. Death of King Folcwine. Fengel becomes the fifteenth King of Rohan.',
},
{
  year: '2904',
  era: 'Third Age',
  description: 'Births of Odo Proudfoot, Amaranth Brandybuck, Wilibald Bolger, and Gerda Boffin (Bolger).',
},
{
  year: '2905',
  era: 'Third Age',
  description: 'Birth of Thengel.',
},
{
  year: '2906',
  era: 'Third Age',
  description: 'Birth of Prisca Baggins (Bolger).',
},
{
  year: '2907',
  era: 'Third Age',
  description: 'Birth of Gilraen.',
},
{
  year: '2908',
  era: 'Third Age',
  description: 'Births of Drogo Baggins, Saradas Brandybuck, and Gorbulas Brandybuck.',
},
{
  year: '2910',
  era: 'Third Age',
  description: 'Birth of Otho Sackville-Baggins. Death of Marmadoc Brandybuck. Gorbadoc Brandybuck becomes Master of Buckland.',
},
{
  year: '2911',
  era: 'Third Age',
  description: 'Births of Dudo Baggins and Dodinas Brandybuck. Death of Ponto Baggins I. The Fell Winter. Wolves invade Eriador.',
},
{
  year: '2912',
  era: 'Third Age',
  description: 'Devastating floods in Minhiriath and Enedwaith. Death of Argonui. Arador becomes Chieftain of the Dúnedain. Tharbad deserted. Deaths of Largo Baggins and Lily Baggins (Goodbody).',
},
{
  year: '2913',
  era: 'Third Age',
  description: 'Births of Asphodel Brandybuck (Burrows) and Bruno Bracegirdle.',
},
{
  year: '2914',
  era: 'Third Age',
  description: 'Death of Steward Túrin II. Turgon becomes the twenty-fourth Ruling Steward of Gondor. Death of Adalgar Bolger.',
},
{
  year: '2916',
  era: 'Third Age',
  description: 'Births of Ferumbras Took III and Dinodas Brandybuck. Death of Laura Grubb.',
},
{
  year: '2917',
  era: 'Third Age',
  description: 'Birth of Adrahil II.',
},
{
  year: '2918',
  era: 'Third Age',
  description: 'Birth of Lobelia Bracegirdle (Sackville-Baggins).',
},
{
  year: '2920',
  era: 'Third Age',
  description: 'Death of Gerontius Took. Isengrim Took III becomes Thain of the Shire. Birth of Primula Brandybuck (Baggins).',
},
{
  year: '2922',
  era: 'Third Age',
  description: 'Birth of Morwen.',
},
{
  year: '2923',
  era: 'Third Age',
  description: 'Death of Gróin. Birth of Andwise Roper.',
},
{
  year: '2926',
  era: 'Third Age',
  description: 'Birth of Hamfast Gamgee. Death of Bungo Baggins.',
},
{
  year: '2928',
  era: 'Third Age',
  description: 'Births of Adelard Took and May Gamgee.',
},
{
  year: '2929',
  era: 'Third Age',
  description: 'Arathorn II weds Gilraen.',
},
{
  year: '2930',
  era: 'Third Age',
  description: 'Death of Arador. Arathorn II becomes Chieftain of the Dúnedain. Birth of Denethor II. Death of Isengrim Took III. Isumbras Took IV becomes Thain of the Shire.',
},
{
  year: '2931',
  era: 'Third Age',
  description: 'Birth of Aragorn.',
},
{
  year: '2932',
  era: 'Third Age',
  description: 'Birth of Halfred of Overhill. Death of Aglahad. Angelimir becomes Prince of Dol Amroth.',
},
{
  year: '2933',
  era: 'Third Age',
  description: 'Death of Arathorn II. Aragorn becomes Chieftain of the Dúnedain. Birth of Paladin Took II.',
},
{
  year: '2934',
  era: 'Third Age',
  description: 'Deaths of Hildibrand Took and Belladonna Took (Baggins).',
},
{
  year: '2935',
  era: 'Third Age',
  description: 'Birth of Odovacar Bolger.',
},
{
  year: '2936',
  era: 'Third Age',
  description: 'Birth of Esmeralda Took (Brandybuck).',
},
{
  year: '2937',
  era: 'Third Age',
  description: 'Birth of Vigo Boffin.',
},
{
  year: '2938',
  era: 'Third Age',
  description: 'Birth of Rosamunda Took (Bolger).',
},
{
  year: '2939',
  era: 'Third Age',
  description: 'Saruman discovers Sauron is searching the Gladden Fields. Death of Isumbras Took IV. Fortinbras Took II becomes Thain of the Shire.',
},
{
  year: '2940',
  era: 'Third Age',
  description: 'Births of Ferdinand Took and Saradoc Brandybuck.',
},
{
  year: '2941',
  era: 'Third Age',
  description: 'Bilbo gains the One Ring. Sauron driven from Dol Guldur. Thorin II Oakenshield becomes King of Erebor. Battle of Five Armies. Deaths of Fíli, Kíli, Bolg, Smaug and Thorin II Oakenshield. Dáin II becomes King of Erebor. Birth of Tolman Cotton. Death of Hildigrim Took.',
},
{
  year: '2942',
  era: 'Third Age',
  description: 'Sauron returns to Mordor. Births of Merimac Brandybuck and Filibert Bolger.',
},
{
  year: '2943',
  era: 'Third Age',
  description: 'Birth of Marmadas Brandybuck. Thengel weds Morwen.',
},
{
  year: '2944',
  era: 'Third Age',
  description: 'Dale rebuilt. Gollum begins his hunt for the One Ring. Birth of Poppy Chubb-Baggins (Bolger) and Griffo Boffin.',
},
{
  year: '2945',
  era: 'Third Age',
  description: 'Death of Hugo Boffin.',
},
{
  year: '2946',
  era: 'Third Age',
  description: 'Births of Olo Proudfoot, Ponto Baggins II, and Wilcome Cotton I. Deaths of Isembold Took and Isembard Took.',
},
{
  year: '2947',
  era: 'Third Age',
  description: 'Births of Ivriniel, Milo Burrows, Wilimar Bolger.',
},
{
  year: '2948',
  era: 'Third Age',
  description: 'Births of Théoden, Porto Baggins, and Seredic Brandybuck. Deaths of Donnamira Took (Boffin) and Rudigar Bolger.',
},
{
  year: '2949',
  era: 'Third Age',
  description: 'Gandalf and Balin visit the Shire.',
},
{
  year: '2950',
  era: 'Third Age',
  description: 'Births of Finduilas, Peony Baggins (Burrows), Daisy Baggins, and Hugo Bracegirdle. Death of Longo Baggins.',
},
{
  year: '2951',
  era: 'Third Age',
  description: 'Sauron sends three Nazgûl to reoccupy Dol Guldur. Construction begins on Barad-dûr. Birth of Heribald Bolger.',
},
{
  year: '2952',
  era: 'Third Age',
  description: 'Elrond reveals to "Estel" his true name and ancestry. He gives Aragorn the Shards of Narsil. In the woods of Rivendell, Aragorn meets Arwen. Aragorn goes into the Wild.',
},
{
  year: '2953',
  era: 'Third Age',
  description: 'Last meeting of the White Council. Death of Steward Turgon. Ecthelion II becomes Ruling Steward of Gondor. Saruman begins to fortify Isengard. Death of King Fengel. Thengel becomes the sixteenth King of Rohan.',
},
{
  year: '2954',
  era: 'Third Age',
  description: 'Orodruin re-awakens. Birth of Hilda Bracegirdle (Brandybuck).',
},
{
  year: '2955',
  era: 'Third Age',
  description: 'Birth of Imrahil.',
},
{
  year: '2956',
  era: 'Third Age',
  description: 'Aragorn meets Gandalf. Deaths of Belba Baggins (Bolger) and Rosa Baggins (Took).',
},
{
  year: '2957',
  era: 'Third Age',
  description: 'Aragorn begins his great journeys as Thorongil.',
},
{
  year: '2960',
  era: 'Third Age',
  description: 'Deaths of Bingo Baggins, Fosco Baggins, Mirabella Took (Brandybuck), and Isengar Took. Birth of Nora Bolger.',
},
{
  year: '2961',
  era: 'Third Age',
  description: 'Birth of Anson Roper.',
},
{
  year: '2963',
  era: 'Third Age',
  description: 'Birth of Théodwyn. Deaths of Linda Baggins (Proudfoot) and Gorbadoc Brandybuck. Rorimac Brandybuck becomes Master of Buckland.',
},
{
  year: '2964',
  era: 'Third Age',
  description: 'Birth of Lotho Sackville-Baggins.',
},
{
  year: '2965',
  era: 'Third Age',
  description: 'Birth of Hamson Gamgee.',
},
{
  year: '2968',
  era: 'Third Age',
  description: 'Birth of Frodo Baggins.',
},
{
  year: '2969',
  era: 'Third Age',
  description: 'Births of Reginard Took and Halfred Gamgee.',
},
{
  year: '2972',
  era: 'Third Age',
  description: 'Birth of Daisy Gamgee.',
},
{
  year: '2975',
  era: 'Third Age',
  description: 'Birth of Pearl Took.',
},
{
  year: '2976',
  era: 'Third Age',
  description: 'Denethor II weds Finduilas. Birth of May Gamgee.',
},
{
  year: '2977',
  era: 'Third Age',
  description: 'Death of Bard I. Bain becomes King of Dale. Death of Angelimir. Adrahil II becomes Prince of Dol Amroth.',
},
{
  year: '2978',
  era: 'Third Age',
  description: 'Births of Boromir, Théodred, and Folco Boffin. Death of Elfhild.',
},
{
  year: '2979',
  era: 'Third Age',
  description: 'Birth of Pimpernel Took.',
},
{
  year: '2980',
  era: 'Third Age',
  description: 'Adventures of Thorongil end. Aragorn and Arwen are betrothed. Gollum meets Shelob. Deaths of King Thengel, Fortinbras Took II, Drogo Baggins, and Primula Brandybuck (Baggins). Théoden becomes the seventeenth King of Rohan. Births of Fredegar Bolger, Samwise Gamgee, Everard Took, Berilac Brandybuck, and Tolman Cotton Junior. Ferumbras Took III becomes Thain of the Shire.',
},
{
  year: '2981',
  era: 'Third Age',
  description: 'Births of Angelica Baggins and Merimas Brandybuck.',
},
{
  year: '2982',
  era: 'Third Age',
  description: 'Birth of Meriadoc Brandybuck. Death of Adalgrim Took.',
},
{
  year: '2983',
  era: 'Third Age',
  description: 'Births of Faramir, Ferdibrand Took, Mentha Brandybuck, and Marigold Gamgee (Cotton).',
},
{
  year: '2984',
  era: 'Third Age',
  description: 'Deaths of Steward Ecthelion II and Hobson Gamgee. Denethor becomes Ruling Steward of Gondor. Births of Rose Cotton (Gamgee) and Wilcome Cotton II. Denethor II begins to use the Anor-stone.',
},
{
  year: '2985',
  era: 'Third Age',
  description: 'Births of Pervinca Took, Estella Bolger (Brandybuck), and Melilot Brandybuck.',
},
{
  year: '2986',
  era: 'Third Age',
  description: 'Birth of Bowman Cotton. Death of Jago Boffin.',
},
{
  year: '2987',
  era: 'Third Age',
  description: 'Births of Elphir and Mosco Burrows.',
},
{
  year: '2988',
  era: 'Third Age',
  description: 'Death of Finduilas. Birth of Tosto Boffin.',
},
{
  year: '2989',
  era: 'Third Age',
  description: 'Death of Flambard Took. Births of Doderic Brandybuck and Carl "Nibs" Cotton. Éomund weds Théodwyn. Balin\'s expedition to Moria begins.',
},
{
  year: '2990',
  era: 'Third Age',
  description: 'Saruman begins breeding Orcs. Births of Erchirion, Sancho Proudfoot, and Peregrin Took. Death of Herugar Bolger.',
},
{
  year: '2991',
  era: 'Third Age',
  description: 'Births of Éomer, Moro Burrows, and Ilberic Brandybuck. Death of Sigismond Took.',
},
{
  year: '2993',
  era: 'Third Age',
  description: 'Birth of Myrtle Burrows.',
},
{
  year: '2994',
  era: 'Third Age',
  description: 'Destruction of Balin\'s colony in Moria. Deaths of Balin, Óin, Ori, Flói, Frár, Lóni, and Náli. Births of Amrothos and Celandine Brandybuck.',
},
{
  year: '2995',
  era: 'Third Age',
  description: 'Births of Éowyn and Diamond of Long Cleeve (Took).',
},
{
  year: '2996',
  era: 'Third Age',
  description: 'Birth of Minto Burrows.',
},
{
  year: '2997',
  era: 'Third Age',
  description: 'Death of Adalbert Bolger.',
},
{
  year: '2998',
  era: 'Third Age',
  description: 'Death of Amaranth Brandybuck.',
},
{
  year: '2999',
  era: 'Third Age',
  description: 'Birth of Lothíriel. Deaths of Falco Chubb-Baggins, Gruffo Boffin and Dodinas Brandybuck.',
},
{
  year: '3000',
  era: 'Third Age',
  description: 'Saruman ensnared by Sauron. Death of Wilibald Bolger.',
},
{
  year: '3001',
  era: 'Third Age',
  description: 'Gandalf begins to suspect the One Ring is in the Shire. Bilbo\'s birthday feast. Frodo Baggins comes in possession of the One Ring.',
},
{
  year: '3002',
  era: 'Third Age',
  description: 'Deaths of Éomund, Théodwyn, and Lalia Clayhanger. Bilbo comes to Imladris.',
},
{
  year: '3003',
  era: 'Third Age',
  description: 'Bilbo Baggins begins work on his Translations from the Elvish.',
},
{
  year: '3004',
  era: 'Third Age',
  description: 'Gandalf begins to visit the Shire on a regular basis. Death of Gerda Boffin (Bolger).',
},
{
  year: '3005',
  era: 'Third Age',
  description: 'Death of Odo Proudfoot.',
},
{
  year: '3006',
  era: 'Third Age',
  description: 'Death of Dora Baggins.',
},
{
  year: '3007',
  era: 'Third Age',
  description: 'Brand takes the sceptre of Dale after the death of his father Bain. Death of Gilraen and Saradas Brandybuck.',
},
{
  year: '3008',
  era: 'Third Age',
  description: 'Gandalf\'s regular visits to the Shire end. Death of Rorimac Brandybuck. Saradoc Brandybuck becomes Master of Buckland.',
},
{
  year: '3009',
  era: 'Third Age',
  description: 'Gandalf and Aragorn hunt for Gollum. Death of Dudo Baggins.',
},
{
  year: '3010',
  era: 'Third Age',
  description: 'Deaths of Adrahil II, Bruno Bracegirdle, and Dinodas Brandybuck. Imrahil becomes Prince of Dol Amroth.',
},
{
  year: '3012',
  era: 'Third Age',
  description: 'Deaths of Otho Sackville-Baggins and Asphodel Brandybuck (Burrows).',
},
{
  year: '3013',
  era: 'Third Age',
  description: 'Will Whitfoot is elected Mayor of Michel Delving.',
},
{
  year: '3014',
  era: 'Third Age',
  description: 'Gríma Wormtongue becomes chief counsellor for Théoden.',
},
{
  year: '3015',
  era: 'Third Age',
  description: 'Death of Ferumbras Took III. Paladin Took II becomes Thain of the Shire.',
},
{
  year: '3016',
  era: 'Third Age',
  description: 'Arwen returns to Imladris.',
},
{
  year: '3017',
  era: 'Third Age',
  description: 'Gollum captured and taken to Barad-dûr. Birth of Alphros. Éomer becomes Marshal. Gandalf reads the scroll of Isildur in Minas Tirith.',
},
{
  year: '3018',
  era: 'Third Age',
  description: 'The War of the Ring begins. Thranduil\'s kingdom in Mirkwood assailed by Orcs. Osgiliath taken and much land east of Anduin under Mordor control. Gollum hides in Moria. Gandalf learns of the treachery of Saruman. Frodo reaches Rivendell. The Council of Elrond is held and the Fellowship of the Ring formed.',
},
{
  year: '3019',
  era: 'Third Age',
  description: 'The Quest of the Ring. Gandalf falls at the hand of a Balrog in the Mines of Moria. Boromir dies defending Merry and Pippin from Saruman\'s Uruk-hai. The Breaking of the Fellowship. Gollum leads Frodo and Sam into Mordor. Gandalf returns as Gandalf the White and frees Théoden from the hold of Saruman. The Battle of Helm\'s Deep. The Ents fight the Battle of Isengard. Aragorn walks the Paths of the Dead. Simultaneous attacks on Thranduil, Lothlórien and Gondor. The Battle of Pelennor Fields. Deaths of Denethor II, Théoden and the Witch-king of Angmar. Assault upon Dale and Erebor. Deaths of Dáin II and Brand. The Battle of the Morannon. The One Ring destroyed. End of Sauron. Nazgûl destroyed. Death of Gollum. Bard II becomes King of Dale. Thorin III Stonehelm becomes King of Erebor. Éomer becomes the eighteenth King of Rohan. Aragorn takes the name Elessar and the Sceptre of the Reunited Kingdom, becoming the thirty-fourth King of Gondor and the first High King of the Reunited Kingdom. Mirkwood renamed Eryn Lasgalen. East Lórien founded. The Scouring of the Shire. Deaths of Lotho Sackville-Baggins, Saruman, and Gríma Wormtongue. End of the War of the Ring.',
},
{
  year: '3020',
  era: 'Third Age',
  description: 'Drúedain destroy remnant of Saruman\'s Orcs. Faramir and Éowyn wed. Samwise weds Rose Cotton. Death of Lobelia Bracegirdle (Sackville-Baggins).',
},
{
  year: '3021',
  era: 'Third Age',
  description: 'Birth of Elanor Gamgee. Éomer and Lothíriel wed. Elrond, Galadriel, Gandalf, Bilbo and Frodo pass over the Sea.',
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
      <Text style={styles.title}>Third Age</Text>
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
