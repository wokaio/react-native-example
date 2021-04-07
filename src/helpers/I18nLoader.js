import { memoize } from 'lodash';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { I18nManager } from 'react-native';
import { StoreManager } from '@/helpers/StoreManager';
import AppConfig from '@/config/app';

const DEFAULT_SETTING_KEY = 'system.default.setting';
const TRANSLATE_DEFAULT_LOCALE_TAG = 'en-US';

export const LANGUAGE_TAGS = {
  EN: 'en-US',
  VN: 'vi-VN',
};

const translationGetters = {
  [LANGUAGE_TAGS.EN]: () => require('../locales/en.json'),
  [LANGUAGE_TAGS.VN]: () => require('../locales/vi.json'),
};

const getLocaleValue = (lng) => {
  let localLanguageTag = lng;
  if(
    (typeof(localLanguageTag) === 'undefined') ||
    (localLanguageTag === null)
  ) {
    localLanguageTag = Localization.locale; // get locale from device
  }

  if((localLanguageTag in translationGetters) === false) {
    localLanguageTag = TRANSLATE_DEFAULT_LOCALE_TAG;
  }
  
  return localLanguageTag;
}

// right-to-left
const getRTLValue = function(rtl) {
  let isRTL = rtl;

  if(
    typeof(rtl) !== 'boolean' ||
    typeof(rtl) === 'undefined' ||
    rtl === null
  ) {
    isRTL = Localization.isRTL;
  }

  return isRTL;
}

export const I18nLoader = memoize((key, config) => {
  return i18n.t(key, config).includes('missing') ? key : i18n.t(key, config);
}, (key, config) => {
  return config ? key + JSON.stringify(config) : key
});

const applyI18nLoader = (lng, rtl) => {
  const localeLanguageTag = getLocaleValue(lng);
  const isRTL = getRTLValue(rtl);

  I18nLoader.cache.clear();
  I18nManager.forceRTL(isRTL);

  i18n.fallbacks = true;
  i18n.defaultLocale = TRANSLATE_DEFAULT_LOCALE_TAG;
  i18n.translations = {
    [localeLanguageTag]: translationGetters[localeLanguageTag](),
  };
  i18n.locale = localeLanguageTag;
};

export const changeI18nLoader = (lng, rtl) => {
  const localeLanguageTag = getLocaleValue(lng);
  const isRTL = getRTLValue(rtl);

  StoreManager.save({
    key: DEFAULT_SETTING_KEY,
    data: {
      locale: localeLanguageTag,
      rtl: isRTL,
    },
    expires: null, // never expired
  });

  applyI18nLoader(localeLanguageTag, isRTL);
}

export const initI18nLoader = (lng, rtl) => {
  // Apply language JSON default
  changeI18nLoader(lng, rtl);

  // Change language JSON after check from storage
  StoreManager  
    .load({
      key: DEFAULT_SETTING_KEY,
      autoSync: true,
      syncInBackground: true,
    })
    .then(ret => {
      applyI18nLoader(ret.locale, ret.rtl);
    })
    .catch(error => {
      changeI18nLoader(lng, rtl);
      if(AppConfig.debug === true) {
        console.warn(error.message);
      }
    });
};
