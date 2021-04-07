import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const StoreManager = new Storage({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});