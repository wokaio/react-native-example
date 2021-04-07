import { LogBox } from 'react-native';
import AppConfig from '@/config/app';
import { initI18nLoader } from '@/helpers/I18nLoader';

export function disableConsole() {
  if(!AppConfig.console.debug) {
    console.warn = () => {};
  }
}

export function disableLogBox() {
  if(!AppConfig.logbox.debug) {
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
  }
}

export function startupLoader() {
  disableConsole();
  disableLogBox();
  initI18nLoader();
}