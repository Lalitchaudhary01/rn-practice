import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      {/* Center container */}
      <View style={styles.center}>
        {/* Card */}
        <View style={styles.card}>
          {/* Title */}
          <Text style={styles.title}>Login</Text>

          {/* Fake Input */}
          <View style={styles.input}>
            <Text style={styles.inputText}>Username</Text>
          </View>

          {/* Fake Input */}
          <View style={styles.input}>
            <Text style={styles.inputText}>Password</Text>
          </View>

          {/* Button */}
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  /* Full screen */
  screen: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },

  /* Center everything */
  center: {
    flex: 1,
    justifyContent: 'center', // vertical
    alignItems: 'center', // horizontal
  },

  /* Card */
  card: {
    width: '85%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
  },

  /* Title */
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#111',
  },

  /* Input box */
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },

  inputText: {
    color: '#777',
  },

  /* Button */
  button: {
    height: 45,
    backgroundColor: '#111',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
