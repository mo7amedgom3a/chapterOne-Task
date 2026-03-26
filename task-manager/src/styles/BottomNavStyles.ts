import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: 80,
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    width: '100%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleAdd: {
    backgroundColor: Colors.primary,
  },
  circleActive: {
    backgroundColor: Colors.primaryL,
  },
  circleInactive: {
    backgroundColor: Colors.white,
  },
  icon: {
    fontFamily: Typography.fontFamily.bold,
  },
  iconLarge: {
    fontSize: 22,
  },
  iconNormal: {
    fontSize: 16,
  },
  label: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.size.xs,
    marginTop: 2,
  },
});
