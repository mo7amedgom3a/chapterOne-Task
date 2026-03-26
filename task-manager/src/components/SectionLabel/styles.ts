import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  text: {
    fontFamily: Typography.fontFamily.semiBold,
    fontSize: Typography.size.sm,
    color: Colors.textSub,
    marginHorizontal: 24,
    marginTop: 20,
    marginBottom: 8,
    letterSpacing: 0.5,
  },
});
