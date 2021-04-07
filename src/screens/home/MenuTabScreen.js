import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SCREEN_NAME } from '@/navigation/screen';

const MenuTabScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>MenuTabView</Text>

      <Button 
        containerStyle={{ marginTop: 12, }}
        title="Move to Login screen"
        onPress={ () => navigation.navigate(SCREEN_NAME.LOGIN) }
      />

      <Button 
        containerStyle={{ marginTop: 12, }}
        title="Move to WebView screen"
        onPress={ () => navigation.navigate(SCREEN_NAME.WEB_VIEW) }
      />

      <Button 
        containerStyle={{ marginTop: 12, }}
        title="Move to TestScreen"
        onPress={ () => navigation.navigate(SCREEN_NAME.TEST) }
      />
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

export default MenuTabScreen;
