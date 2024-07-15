import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Image, ActivityIndicator } from 'react-native';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const [isLoadingSignup, setIsLoadingSignup] = useState(false);

  const handleLogin = () => {
    // Start loading for login
    setIsLoadingLogin(true);

    // Simulate login logic (replace with actual login logic)
    setTimeout(() => {
      setIsLoadingLogin(false);
      navigation.replace('Main'); // Navigate to the main screen
    }, 2000); // Simulate a 2-second loading time
  };

  const handleSignup = () => {
    // Start loading for signup
    setIsLoadingSignup(true);

    // Simulate signup logic (replace with actual signup logic)
    setTimeout(() => {
      setIsLoadingSignup(false);
      navigation.navigate('Signup'); // Navigate to the signup screen
    }, 2000); // Simulate a 2-second loading time
  };

  return (
    <ImageBackground source={require('../assets/login-bg.webp')} style={styles.background}>
      <View style={styles.overlay}>
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
              placeholderTextColor="#fff" // Set placeholder text color
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#fff" // Set placeholder text color
            />
            <View style={styles.passwordOptions}>
              <View style={styles.rememberMeContainer}>
                <TouchableOpacity
                  style={styles.checkbox}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  {rememberMe && <View style={styles.checkedBox} />}
                </TouchableOpacity>
                <Text style={styles.rememberMeText}>Remember Me</Text>
              </View>
              <TouchableOpacity style={styles.forgotPasswordLink} onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={styles.forgotPasswordText}>Forgot My Password</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <View style={styles.buttonBackground} />
            {isLoadingLogin ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Login</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { handleSignup(); }} disabled={isLoadingSignup}>
            <Text style={styles.signupText}>
              <Text style={styles.thinText}>Don't have an account?</Text>{' '}
              {isLoadingSignup ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.boldText}>Sign Up</Text>
              )}
            </Text>
          </TouchableOpacity>
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
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.67)', // Black overlay with 67% opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: -150,
    width: '100%', // Ensure container takes full width
  },
  logo: {
    width: 360,
    height: 200,
    resizeMode: 'contain',
    marginTop: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 23.5, // Adjust font size as needed
    marginBottom: 24,
    fontWeight: '300', // Thin font weight
    color: '#FFFF',
    marginTop: -93,
  },
  inputContainer: {
    width: '92%', // Adjust the width as needed
    marginBottom: 16,
    marginTop: 50,
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
    backgroundColor: 'rgba(242, 242, 242, 0.2)', // Glassy transparent color
    color: '#fff', // Set text color to white
  },
  passwordOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#B1A99B',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    opacity: 0.9, 
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#FEDA4D',
    borderRadius: 2,
  },
  rememberMeText: {
    fontSize: 14, // Smaller font size
    color: '#FFF',
    opacity: 0.90, // 90% opacity
  },
  forgotPasswordLink: {
    opacity: 0.8, // 90% opacity
  },
  forgotPasswordText: {
    fontSize: 14, // Smaller font size
    color: '#FFF',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '30%', // Adjust the width as needed to make it smaller
    height: '4%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center', // Ensure the text is centered vertically
  },
  buttonBackground: {
    ...StyleSheet.absoluteFillObject, // Make this view fill the parent (loginButton)
    backgroundColor: '#FEDA4D',
    opacity: 0.5, // Add opacity to the button background
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    zIndex: 1, // Ensure the text is on top of the button background
  },
  signupText: {
    marginTop: 150,
    fontSize: 16,
    color: '#FFF',
  },
  thinText: {
    fontWeight: '300', // Thin font weight
  },
  boldText: {
    fontWeight: 'bold', // Bold font weight
  },
});
