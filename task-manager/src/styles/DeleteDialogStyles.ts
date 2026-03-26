import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Spacing, Radius } from '../theme/spacing';

export const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: Colors.overlay,
  },
  cardWrapper: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 310,
    backgroundColor: Colors.white,
    borderRadius: 24,
    padding: Spacing.xl,
    alignItems: 'center',
  },
  iconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.dangerL,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  iconText: {
    fontSize: 24,
    color: Colors.danger,
    fontFamily: Typography.fontFamily.bold,
  },
  title: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: 17,
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  body: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.md,
    color: Colors.textSub,
    textAlign: 'center',
  },
  bodySmall: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.sm,
    color: Colors.textSub,
    textAlign: 'center',
    marginTop: 2,
    marginBottom: 20,
  },
  btnRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    width: '100%',
  },
  keepBtn: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.bg,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  keepLabel: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.size.lg,
    color: Colors.textSub,
  },
  deleteBtn: {
    flex: 1,
    height: 44,
    backgroundColor: Colors.danger,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteLabel: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.size.lg,
    color: Colors.white,
  },
});
