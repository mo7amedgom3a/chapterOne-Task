import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    marginHorizontal: Spacing.gutter,
    marginBottom: 4,
  },
  track: {
    width: '100%',
    height: 6,
    backgroundColor: Colors.primaryL,
    borderRadius: 3,
    overflow: 'hidden',
  },
  fill: {
    height: 6,
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  label: {
    fontFamily: Typography.fontFamily.regular,
    fontSize: Typography.size.sm,
    color: Colors.textSub,
    marginTop: 4,
  },
});
