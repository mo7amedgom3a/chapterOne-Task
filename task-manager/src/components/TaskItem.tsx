import { View, Text, StyleSheet } from 'react-native';

type TaskItemProps = {
  title: string;
};

export default function TaskItem({ title }: TaskItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});
