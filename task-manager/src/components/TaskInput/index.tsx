import { View, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native';
import { styles } from './styles';

export default function TaskInput() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0} // adjust offset if needed
    >
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Add a new task..." />
        <Button title="Add" onPress={() => {}} />
      </View>
    </KeyboardAvoidingView>
  );
}


