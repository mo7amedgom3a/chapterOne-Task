import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Radius } from '../theme/spacing';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Radius.lg,
    height: 64,
    marginHorizontal: 24,
    marginBottom: 12,
    paddingHorizontal: 12,
    overflow: 'hidden',
  },
  accentBar: {
    width: 4,
    height: 36,
    borderRadius: 2,
    marginRight: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxTodo: {
    backgroundColor: Colors.white,
    borderWidth: 1.5,
    borderColor: Colors.border,
  },
  checkboxDone: {
    backgroundColor: Colors.success,
  },
  checkmark: {
    color: Colors.white,
    fontSize: 12,
    fontFamily: Typography.fontFamily.bold,
  },
  textContainer: {
    flex: 1,
    paddingVertical: 8,
  },
  taskText: {
    fontFamily: Typography.fontFamily.medium,
    fontSize: Typography.size.md,
    color: Colors.text,
  },
  taskTextDone: {
    fontFamily: Typography.fontFamily.regular,
    color: Colors.textSub,
    textDecorationLine: 'line-through',
  },
  deleteBtn: {
    width: 30,
    height: 30,
    backgroundColor: Colors.dangerL,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  deleteIcon: {
    fontSize: 11,
    color: Colors.danger,
    fontFamily: Typography.fontFamily.bold,
  },
});
