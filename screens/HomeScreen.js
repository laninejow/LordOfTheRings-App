import React, { useState, useRef, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions, Animated, Text, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Dummy data for carousel items
const carouselItems = [
  { image: require('../assets/g1-bg.jpg') },
  { image: require('../assets/g2-bg.jpg') },
  { image: require('../assets/g3-bg.jpg') },
];

const featureItems = [
  { 
    title: 'Rings of Power', 
    description: 'This epic drama is set thousands of years.. ', 
    image: require('../assets/f1-bg.jpg') 
  },
  { 
    title: 'LOTR BTS', 
    description: 'Behind the scenes of Lord of The Rings..', 
    image: require('../assets/f2-bg.jpg') 
  },
  { 
    title: 'Middle-Earth: Shadow Of War', 
    description: '2017 action-adventure video game.', 
    image: require('../assets/f3-bg.jpg') 
  },
  { 
    title: 'Which Character Are You?', 
    description: 'Find out which LOTR character ..', 
    image: require('../assets/f4-bg.jpg') 
  },
];

// Array of category buttons with titles and possibly icons
const categories = [
  { title: 'Movies', color: '#622626' },   // Red color
  { title: 'Games', color: '#1C395A' },    // Blue color
  { title: 'Facts', color: '#373D21' },    // Green color
  { title: 'Locations', color: '#E59D45' }, // Orange color
];

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      let nextIndex = (activeIndex + 1) % carouselItems.length;
      scrollViewRef.current.scrollTo({ x: nextIndex * windowWidth, animated: true });
    }, 2300); // Change the interval duration here (e.g., 2300 ms = 2.3 seconds)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [activeIndex]);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / windowWidth);
    setActiveIndex(currentIndex);
  };

  const renderFeatureCards = () => {
    return featureItems.map((item, index) => (
      <View key={index} style={styles.featureCard}>
        <Image
          source={item.image}
          style={styles.featureImage}
          resizeMode="cover"
        />
        <View style={styles.overlay} />
        <View style={styles.featureCardContent}>
          <Text style={styles.featureTitle}>{item.title}</Text>
          <Text style={styles.featureDescription}>{item.description}</Text>
        </View>
      </View>
    ));
  };

  const handleCategoryPress = (index) => {
    // Handle category button press here
    console.log('Category pressed:', categories[index].title);
    // Add navigation or other actions as needed
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <Image
          source={require('../assets/ss-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Category buttons */}
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.categoryButton, { backgroundColor: category.color }]}
              onPress={() => handleCategoryPress(index)}
            >
              <Text style={styles.categoryText}>{category.title}</Text>
              {/* Colored line below each button */}
              <View style={[styles.divider, { borderBottomColor: category.color }]} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.headerText}>Explore</Text>

        {/* New text under Explore header */}
        <View style={styles.exploreTextContainer}>
          <Text style={styles.exploreText}>Explore the world of Middle-earth through our featured content.</Text>
        </View>
        
        <View style={styles.carouselWrapper}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false, listener: handleScroll }
            )}
            style={styles.carouselContainer}
          >
            {carouselItems.map((item, index) => (
              <View style={styles.carouselItem} key={index}>
                <Image
                  source={item.image}
                  style={styles.carouselImage}
                  resizeMode="cover"
                />
              </View>
            ))}
          </ScrollView>
          <View style={styles.indicatorContainer}>
            {carouselItems.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  { opacity: index === activeIndex ? 1 : 0.5 }
                ]}
              />
            ))}
          </View>
        </View>

        {/* Feature Section */}
        <View style={styles.featureHeaderContainer}>
          <Text style={styles.featureHeaderText}>Feature</Text>
        </View>
        <View style={styles.featureContainer}>
          {renderFeatureCards()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: '90%',
    height: 180, // Increased height for a bigger logo
    marginTop: 20,
    marginBottom: -20,
  },
  headerText: {
    color: 'white',
    fontSize: 23,
    marginVertical: 20,
    marginRight: 280,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Space evenly
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  categoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5, // Adjust the padding as needed
    paddingHorizontal: 15, // Increased padding
    borderRadius: 20, // Rounded corners
    marginHorizontal: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center', // Center text horizontally
  },
  divider: {
    borderBottomWidth: 2, // Change the width as desired
    width: '100%', // Adjust the width as needed
  },
  carouselWrapper: {
    width: windowWidth,
    height: windowHeight * 0.30,
  },
  carouselContainer: {
    width: windowWidth,
    height: '100%',
  },
  carouselItem: {
    width: windowWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselImage: {
    width: '95%',
    height: '100%',
    borderRadius: 5, // Added borderRadius for rounded images
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    margin: 5,
  },
  exploreTextContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start', // Align text to the left
    marginLeft: -30,
    marginTop: -10,
    marginBottom: 20,
  },
  exploreText: {
    color: '#cbcbcb',
    fontSize: 16,
    paddingLeft: 3,
    textAlign: 'left', // Align text to the left
  },
  featureHeaderContainer: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 10,
  },
  featureHeaderText: {
    color: 'white',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 10,
  },
  featureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  featureCard: {
    width: '47%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  featureImage: {
    width: '100%',
    height: 150, // Adjust height of the feature image
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    borderRadius: 10, // Same as featureCard for rounded corners
  },
  featureCardContent: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 10,
  },
  featureTitle: {
    color: 'white',
    fontSize: 18,
    marginTop: 50,
    marginBottom: 5,
  },
  featureDescription: {
    color: '#cbcbcb',
    fontSize: 14,
  },
});

export default HomeScreen;