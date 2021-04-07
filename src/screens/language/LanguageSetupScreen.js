import { ColorPalette } from '@/config/theme';
import { changeI18nLoader, I18nLoader, LANGUAGE_TAGS } from '@/helpers/I18nLoader';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Divider, ListItem, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

const LanguageSetupScreen = () => {
  const [lang, setLang] = useState(null);

  return (
    <SafeAreaView style={ styles.container }>
      <StatusBar barStyle="dark-content" />
      <View style={ styles.setupContainer }>
        <Text style={styles.title}>{ I18nLoader('screens.languageSetup.selectLanaguageTitle') }</Text>

        <ListItem
          onPress={ () => {
            setLang(LANGUAGE_TAGS.EN);
            changeI18nLoader(LANGUAGE_TAGS.EN)
          } }
        >
          <ListItem.Content>
            <ListItem.Title>{ I18nLoader('language.en') }</ListItem.Title>
          </ListItem.Content>

          {lang === LANGUAGE_TAGS.EN && 
            <ListItem.Chevron 
              type="material"
              name="check-circle-outline"
              size={ 20 }
              color={ ColorPalette.primary.dark }
            />
          }
        </ListItem>

        <Divider />

        <ListItem
          onPress={ () => {
            setLang(LANGUAGE_TAGS.VN);
            changeI18nLoader(LANGUAGE_TAGS.VN)
          } }
        >
          <ListItem.Content>
            <ListItem.Title>{ I18nLoader('language.vn') }</ListItem.Title>
          </ListItem.Content>

          {lang === LANGUAGE_TAGS.VN && 
            <ListItem.Chevron 
              type="material"
              name="check-circle-outline"
              size={ 20 }
              color={ ColorPalette.primary.dark }
            />
          }
        </ListItem>

        <Button
          containerStyle={ styles.submitBtnContainer }
          title={ I18nLoader('submitLabel') }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: ColorPalette.white
  },
  setupContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: '700',
    marginBottom: 12,
    color: ColorPalette.info.dark,
    fontSize: 18,
  },
  submitBtnContainer: {
    marginTop: 16,
  }
});

export default LanguageSetupScreen;