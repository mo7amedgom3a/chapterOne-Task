import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function TaskInput() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Add a new task..." />
      <Button title="Add" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
});
