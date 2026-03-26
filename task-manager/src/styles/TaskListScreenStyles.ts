import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Spacing, Radius } from '../theme/spacing';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  body: {
    flex: 1,
  },

  // Empty state
  centerContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 100,
  },
  illustration: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: Colors.primaryL,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
  },
  illustrationIcon: {
    fontSize: 40,
    color: Colors.primary,
    fontFamily: Typography.fontFamily.bold,
  },
  emptyTitle: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.size.hero,
    color: Colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.lg,
    color: Colors.textSub,
    textAlign: 'center',
    lineHeight: 22,
  },
  emptyHint: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.size.md,
    color: Colors.primary,
    marginTop: 48,
    textAlign: 'center',
  },

  // Task list
  listContent: {
    paddingTop: 4,
    paddingBottom: 100,
  },

  // All done banner
  banner: {
    marginHorizontal: Spacing.gutter,
    marginTop: 16,
    marginBottom: 8,
    backgroundColor: Colors.successL,
    borderRadius: Radius.xl,
    paddingVertical: 14,
    paddingHorizontal: 18,
  },
  bannerTitle: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.size.xl,
    color: Colors.success,
    marginBottom: 2,
  },
  bannerSub: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.base,
    color: Colors.success,
  },
});
