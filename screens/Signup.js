import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Platform } from 'react-native';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform signup logic
    navigation.replace('Main');
  };

  return (
    <ImageBackground source={require('../assets/su-bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/ss-logo.png')} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: -20,
  },
  logo: {
    width: 300,
    height: 100,
    marginTop: -90,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#FEDA4D',
    marginTop: 10,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f2f2f2',
  },
  signupButton: {
    width: '100%',
    backgroundColor: '#FEDA4D',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  loginText: {
    marginTop: 16,
    fontSize: 16,
    color: '#FFF',
  },
});
