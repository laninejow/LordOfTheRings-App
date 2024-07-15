import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, Platform, ActivityIndicator } from 'react-native';

export default function Signup({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false); // State for login loading

  const handleSignup = () => {
    setIsLoading(true);
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      navigation.replace('Main');
    }, 2000);
  };

  const handleLogin = () => {
    setIsLoggingIn(true); // Set logging in state to true
    // Simulate login process
    setTimeout(() => {
      setIsLoggingIn(false); // Set logging in state to false after delay
      navigation.navigate('Login'); // Navigate to login screen after login
    }, 2000); // Simulate login with a delay
  };

  return (
    <ImageBackground source={require('../assets/signup-bg.jpg')} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.overlay} />
        <Image source={require('../assets/ss-logo.png')} style={styles.logo} />
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#fff"
          />
          <TextInput
            style={[styles.input, { marginTop: 12 }]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#fff"
          />
          <TextInput
            style={[styles.input, { marginTop: 12 }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#fff"
          />
          <TextInput
            style={[styles.input, { marginTop: 12 }]}
            placeholder="Confirm Password"
            value={confirmation}
            onChangeText={setConfirmation}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#fff"
          />
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
        {/* Conditional rendering for login area */}
        <View style={styles.loginContainer}>
          {!isLoggingIn ? (
            <TouchableOpacity onPress={handleLogin}>
              <Text style={styles.loginText}>
                Already have an account?{' '}
                <Text style={{ fontWeight: 'bold' }}>Login</Text>
              </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size="small" color="#fff" />
            </View>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black overlay
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 340,
    height: 100,
    marginTop: 10,
    marginBottom: -25,
    zIndex: 1, // Ensure logo is above overlay
  },
  title: {
    fontSize: 24,
    marginBottom: 45,
    fontWeight: 'normal', // Use 'normal' for thin font weight
    color: '#FFF', // White color
    marginTop: 10,
    zIndex: 1, // Ensure title is above overlay
  },
  inputContainer: {
    width: '90%',
    marginBottom: 16,
    zIndex: 1, // Ensure inputs are above overlay
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12, // Adjust marginBottom for spacing between inputs
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: 'rgba(242, 242, 242, 0.1)', // Glassy transparent color
    zIndex: 1, // Ensure inputs are above overlay
    color: '#fff', // Ensure text color is white
  },
  signupButton: {
    width: '30%',
    backgroundColor: 'rgba(254, 218, 77, 0.5)', // Semi-transparent yellow
    padding: 7,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 5,
    zIndex: 1, // Ensure button is above overlay
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
  loginContainer: {
    marginTop: 10,
  },
  loginText: {
    fontSize: 16,
    color: '#FFF',
    zIndex: 1, // Ensure text is above overlay
    marginTop: 60,
  },
  spinnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
});
