import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginView</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;