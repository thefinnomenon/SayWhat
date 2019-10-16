const getLocales = () => [
  { countryCode: 'US', languageTag: 'en-US', languageCode: 'en', isRTL: false },
];

type FindBestAvailableLanguage = {
  languageTag: string;
  isRTL: boolean;
} | void;

const findBestAvailableLanguage = (): FindBestAvailableLanguage => ({
  languageTag: 'en-US',
  isRTL: false,
});

const getNumberFormatSettings = () => ({
  decimalSeparator: '.',
  groupingSeparator: ',',
});

const getCalendar = () => 'gregorian';
const getCountry = () => 'US';
const getCurrencies = () => ['USD'];
const getTemperatureUnit = () => 'fahrenheit';
const getTimeZone = () => 'Europe/Paris';
const uses24HourClock = () => false;
const usesMetricSystem = () => false;

// eslint-disable-next-line no-undef
const addEventListener = jest.fn();
// eslint-disable-next-line no-undef
const removeEventListener = jest.fn();

export {
  findBestAvailableLanguage,
  getLocales,
  getNumberFormatSettings,
  getCalendar,
  getCountry,
  getCurrencies,
  getTemperatureUnit,
  getTimeZone,
  uses24HourClock,
  usesMetricSystem,
  addEventListener,
  removeEventListener,
};
