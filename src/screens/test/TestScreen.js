import { CartSelectors } from '@/store/CartReducer';
import { setCount, TestSelectors } from '@/store/TestReducer';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

const TestScreen = () => {
  const count = useSelector(TestSelectors.getCount);
  const totalQuantity = useSelector(CartSelectors.getTotalQuantity);
  const setCountAction = setCount(count + 1);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={ styles.container }>
      <Text h2>count: {count}</Text>
      <Text h2>totalQuantity: {totalQuantity}</Text>
      <Button
        title="Update count"
        containerStyle={{
          marginTop: 12,
        }}
        onPress={() => {
          dispatch(setCountAction)
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  }
});

export default TestScreen;