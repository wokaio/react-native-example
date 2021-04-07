import { I18nLoader } from '@/helpers/I18nLoader';
import { AssetImages } from '@/config/assets';
import { ColorPalette } from '@/config/theme';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Image, SearchBar } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CartActions } from '@/store/CartReducer';
import { useDispatch } from 'react-redux';

const AddLinkScreen = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const styles = createStyle(insets);
  const navigation = useNavigation();
  const [inputVal, setInputVal] = useState('');

  // Fake add link to cart
  const onPressAddLinkBtn = async () => {
    const action = CartActions.addItemToCart();
    await dispatch(action);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button 
          buttonStyle={ styles.closeBtn }
          containerStyle={ styles.closeBtnContainer }
          icon={ () =>  
            <Icon 
              color={ ColorPalette.white }
              type="material"
              name="close"
              size={ 28 }
            />
          }
          onPress={ () => navigation.goBack() }
        />

        <SearchBar
          lightTheme
          round
          containerStyle={ styles.searchBarContainer }
          searchIcon={ styles.searchBarIcon }
          inputContainerStyle={ styles.searchBarInputContainer }
          inputStyle={ styles.searchBarInput }
          leftIconContainerStyle={ styles.searchBarInputLeftIconContainer }
          placeholder={ I18nLoader('screens.addProduct.searchInputPlaceholder') }
          placeholderTextColor={ ColorPalette.info.light }
          value={ inputVal }
          onChangeText={ (text) => setInputVal(text) }
        />

        <Button 
          containerStyle={ styles.addLinkBtnContainer }
          buttonStyle={ styles.addLinkBtn }
          icon={ 
            <Image
              source={ AssetImages.addLinkIcon }
              containerStyle={ styles.addLinkBtnIconContainer }
            />
          }
          onPress={onPressAddLinkBtn}
        />
      </View>
    </View>
  );
};

const createStyle = (insets) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
    header: {
      backgroundColor: ColorPalette.primary.dark,
      paddingTop: insets.top,
      height: 50 + insets.top,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    closeBtnContainer: {
      marginRight: 8,
    },
    closeBtn: {
      width: 32,
      height: 32,
      padding: 0,
      backgroundColor: 'transparent',
      fontSize: 50,
    },
    searchBarContainer: {
      flex: 1,
      backgroundColor: null,
      borderWidth: 0,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      height: 40,
      padding: 0,
    },
    searchBarIcon: {
      color: ColorPalette.white,
    },
    searchBarInputContainer: {
      backgroundColor: 'rgba(0,0,0,0.3)',
      height: 40,
      borderRadius: 30,
      borderBottomWidth: 0,
    },
    searchBarInput: {
      padding: 0,
      color: ColorPalette.white,
      fontSize: 16,
    },
    searchBarInputLeftIconContainer: {
      color: ColorPalette.white,
      marginLeft: 12,
      marginRight: -8,
    },
    addLinkBtnContainer: {
      marginLeft: 8,
    },
    addLinkBtn: {
      width: 32,
      height: 32,
      borderRadius: 40,
      backgroundColor: 'transparent'
    },
    addLinkBtnIconContainer: {
      width: 22,
      height: 22,
    },
  });
};

export default AddLinkScreen;
