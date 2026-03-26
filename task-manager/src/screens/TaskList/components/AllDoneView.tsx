import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Task } from '../../../types';
import { styles } from '../styles';
import SectionLabel from '../../../components/SectionLabel';
import TaskCard from '../../../components/TaskCard';

interface AllDoneViewProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function AllDoneView({ tasks, onToggle, onDelete, onEdit }: AllDoneViewProps) {
  return (
    <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>All tasks completed! 🎉</Text>
        <Text style={styles.bannerSub}>You're on a roll today. Keep it up!</Text>
      </View>

      <SectionLabel title="COMPLETED TODAY" count={tasks.length} />
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          text={task.text}
          isComplete={task.isComplete}
          onToggleComplete={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ScrollView>
  );
}
