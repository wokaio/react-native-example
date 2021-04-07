import { SCREEN_NAME } from '@/navigation/screen';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

const FavoriteTabScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>FavoriteTabView</Text>
      <Button 
        containerStyle={{ marginTop: 12, }}
        title="Test move to AddLinkView"
        onPress={ () => navigation.navigate(SCREEN_NAME.ADD_LINK) }
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

export default FavoriteTabScreen;
