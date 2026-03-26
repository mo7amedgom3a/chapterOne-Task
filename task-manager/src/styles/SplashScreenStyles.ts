import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  decorCircle: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: -60,
    right: -80,
  },
  logoCard: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  logoIcon: {
    fontSize: 46,
    color: Colors.primary,
    fontFamily: Typography.fontFamily.bold,
  },
  appName: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.size.display,
    color: Colors.white,
    marginBottom: 10,
  },
  tagline: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.xl,
    color: 'rgba(255,255,255,0.80)',
    marginBottom: 32,
    textAlign: 'center',
  },
  chipsContainer: {
    alignItems: 'center',
    gap: 10,
    marginBottom: 40,
  },
  chip: {
    width: 240,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.size.md,
    color: Colors.white,
  },
  ctaBtn: {
    width: 290,
    height: 54,
    backgroundColor: Colors.white,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  ctaText: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.size.h3,
    color: Colors.primary,
  },
  subLabel: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.base,
    color: 'rgba(255,255,255,0.70)',
  },
});
