import { AssetImages } from '@/config/assets';
import { ColorPalette } from '@/config/theme';
import { SCREEN_NAME } from '@/navigation/screen';
import { CartSelectors } from '@/store/CartReducer';
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge, Button, Image } from 'react-native-elements';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigation = useNavigation();

  const cartTotalQuantity = useSelector(CartSelectors.getTotalQuantity);
  const cartTotalQuantityText = (cartTotalQuantity > 9)? '+9' : cartTotalQuantity;
  
  return (
    <View style={ styles.container }>
      <View style={ styles.leftCol }>
        <Image 
          source={ AssetImages.logo }
          style={ styles.logoImage }
        />
      </View>

      <Button 
        containerStyle={ styles.addLinkBtnContainer }
        onPress={ () => navigation.navigate(SCREEN_NAME.ADD_LINK) }
        buttonStyle={ styles.addLinkBtn }
        icon={
          <Image
            source={ AssetImages.addLinkIcon }
            containerStyle={ styles.addLinkBtnIconContainer }
          />
        }
      />

      <Button 
        onPress={ () => navigation.navigate(SCREEN_NAME.CART) }
        buttonStyle={ styles.openCartBtn }
        icon={
          <>
            <Image
              source={ AssetImages.openCartIcon }
              containerStyle={ styles.openCartBtnIconContainer }
            />

            { cartTotalQuantity > 0 && 
              <Badge 
                status="success"
                badgeStyle={ styles.cartIconBadge }
                containerStyle={ styles.cartIconBadgeContainer }
                textStyle={ styles.cartIconBadgeText }
                value={ cartTotalQuantityText }
              />
            }
          </>
        }
      />
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0,
    shadowColor: null,
  },
  leftCol: {
    flex: 1,
  },
  logoImage: {
    height: 32,
    width: 100,
    resizeMode: 'contain',
  },
  addLinkBtnContainer: {
    marginRight: 8,
  },
  addLinkBtn: {
    width: 32,
    height: 32,
    borderRadius: 40,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  addLinkBtnIconContainer: {
    width: 18,
    height: 18,
  },
  openCartBtn: {
    backgroundColor: 'transparent',
    width: 32,
    height: 36,
  },
  openCartBtnIconContainer: {
    width: 18,
    height: 18,
  },
  cartIconBadgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cartIconBadge: {
    backgroundColor: ColorPalette.warning.dark,
    borderWidth: 1,
    borderColor: ColorPalette.white,
    borderRadius: 100,
    width: 18,
    height: 18,
  },
  cartIconBadgeText: {
    fontSize: 8,
    color: ColorPalette.white,
  },
});

export default Header;