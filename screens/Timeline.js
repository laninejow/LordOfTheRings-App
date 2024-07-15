import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

const initialCards = [
  { title: 'Days Before Days', subtitle: 'The Beginning', periodText: 'V.Y. 1 – 3500', image: require('../assets/dbd-bg.webp'), route: 'DaysBeforeDays' },
  { title: 'Years of the Trees', subtitle: 'Age of the Trees', periodText: 'Y.T. 1 – 1500', image: require('../assets/yott-bg.webp'), route: 'YearsOfTheTree' },
  { title: 'First Age', subtitle: 'The First Age', periodText: 'Y.T. 1050 – Y.S. 590', image: require('../assets/fa-bg.webp'), route: 'FirstAge' },
  { title: 'Second Age', subtitle: 'The Second Age', periodText: 'S.A. 1 – 3441', image: require('../assets/sa-bg.webp'), route: 'SecondAge' },
  { title: 'Third Age', subtitle: 'The Third Age', periodText: 'T.A. 1 – 3021', image: require('../assets/ta-bg.jpg'), route: 'ThirdAge' },
  { title: 'Fourth Age', subtitle: 'The Fourth Age', periodText: 'F.A. 1 – c. 2500', image: require('../assets/foa-bg.webp'), route: 'FourthAge' },
];

const Timeline = ({ navigation }) => {
  useEffect(() => {
    const checkLoadMore = async () => {
      const hasScrolled = await AsyncStorage.getItem('hasScrolled');
      if (!hasScrolled) {
        AsyncStorage.setItem('hasScrolled', 'true');
      }
    };
    checkLoadMore();
  }, []);

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > height * 0.1) {
      AsyncStorage.setItem('hasScrolled', 'true');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/ss-logo.png')} style={styles.topImage} />
      <Text style={styles.topText}>Timeline</Text>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {initialCards.map((card, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(card.route)}
          >
            <ImageBackground source={card.image} style={styles.imageBackground}>
              <TouchableOpacity style={styles.overlay} activeOpacity={0.8} onPress={() => navigation.navigate(card.route)}>
                <View style={styles.textContainer}>
                  <Text style={styles.periodText}>{card.periodText}</Text>
                  <Text style={styles.title}>{card.title}</Text>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(card.route)}>
                    <Text style={styles.buttonText}>View full timeline</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Background color of the entire screen
  },
  topImage: {
    width: '90%',
    height: height * 0.10, // Adjust the height as needed
    resizeMode: 'cover',
    marginTop: 50,
    marginLeft: 15,
  },
  topText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'normal', // Changed to 'normal' to make it thinner
    textAlign: 'center',
    marginVertical: 10,
    marginTop: -5,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100, // Adjust padding bottom to leave space for the final spacer
  },
  card: {
    width: width * 1, // Adjusted width to better fit the screen
    aspectRatio: 5 / 3, // Aspect ratio for the cards (adjust as needed)
    marginBottom: 5,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 12,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  periodText: {
    fontSize: 14,
    color: 'white',
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default Timeline;
