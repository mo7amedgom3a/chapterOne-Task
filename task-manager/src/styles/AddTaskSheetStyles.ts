import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Spacing, Radius } from '../theme/spacing';

export const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: Colors.overlay,
  },
  kvWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  sheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: Spacing.gutter,
    paddingBottom: 32,
  },
  handle: {
    width: 44,
    height: 4,
    backgroundColor: Colors.border,
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 14,
    marginBottom: 6,
  },
  title: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.size.h2,
    color: Colors.text,
    marginTop: 22,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.md,
    color: Colors.textSub,
    marginBottom: 16,
  },
  input: {
    backgroundColor: Colors.bg,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: Radius.lg,
    padding: 16,
    fontSize: Typography.size.lg,
    fontFamily: Typography.fontFamily.regular,
    color: Colors.text,
    minHeight: 80,
    textAlignVertical: 'top',
  },
  inputError: {
    borderColor: Colors.danger,
  },
  charCount: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.sm,
    color: Colors.textSub,
    marginTop: 6,
    marginBottom: 16,
    textAlign: 'right',
  },
  btnRow: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  cancelBtn: {
    flex: 1,
    height: 48,
    backgroundColor: Colors.bg,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelLabel: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.size.lg,
    color: Colors.textSub,
  },
  addBtn: {
    flex: 1,
    height: 48,
    backgroundColor: Colors.primary,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addLabel: {
    fontFamily: Typography.fontFamily.bold,
    fontSize: Typography.size.lg,
    color: Colors.white,
  },
  tip: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.base,
    color: Colors.textSub,
    textAlign: 'center',
    marginTop: 14,
  },
});
