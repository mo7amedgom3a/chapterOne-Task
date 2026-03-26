import { View, Text } from 'react-native';
import { styles } from '../styles/TaskItemStyles';

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


