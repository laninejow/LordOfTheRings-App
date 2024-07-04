import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 6000);
  }, [navigation]);

  return (
    <ImageBackground 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image source={require('../assets/ss-logo.png')} style={styles.logo} />
      </View>
      <Image source={require('../assets/ss-icon.png')} style={styles.icon} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262222',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 500, 
    height: 150, 
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  icon: {
    width: '100%',
    height: 100, 
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -1,
  },
});
