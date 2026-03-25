import { View, Text, StyleSheet } from 'react-native';
import TaskItem from '../../src/components/TaskItem';
import TaskInput from '../../src/components/TaskInput';

export default function TaskListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello World: Task Manager</Text>
      <TaskInput />
      <TaskItem title="First dummy task" />
      <TaskItem title="Second dummy task" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
