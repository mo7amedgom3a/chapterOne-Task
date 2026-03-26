// theme/shadows.ts
import { Platform } from 'react-native';

// Use on cards, sheets, buttons, bottom nav
export const Shadow = {
  card: Platform.select({
    ios: {
      shadowColor: '#1C1D27',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.10,
      shadowRadius: 16,
    },
    android: {
      elevation: 4,
    },
    default: {},
  }),
  button: Platform.select({
    ios: {
      shadowColor: '#4363FE',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 12,
    },
    android: {
      elevation: 6,
    },
    default: {},
  }),
};
