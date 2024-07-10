import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    navigation.replace('Main');
  };

  return (
    <ImageBackground source={require('../assets/ls-bg.png')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('../assets/ss-logo.png')} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
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
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: -150,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    fontWeight: 'bold',
    color: '#FEDA4D',
    marginTop: -40,
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
    borderColor: '#ccc',
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f2f2f2',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#FEDA4D',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  signupText: {
    marginTop: 16,
    fontSize: 16,
    color: '#FFF',
  },
});
