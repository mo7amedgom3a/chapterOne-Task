import React from 'react';
import { ScrollView } from 'react-native';
import { Task } from '../../../types';
import { styles } from '../styles';
import ProgressBar from '../../../components/ProgressBar';
import SectionLabel from '../../../components/SectionLabel';
import TaskCard from '../../../components/TaskCard';

interface TaskListViewProps {
  pending: Task[];
  completed: Task[];
  total: number;
  completedCount: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function TaskListView({
  pending,
  completed,
  total,
  completedCount,
  onToggle,
  onDelete,
  onEdit,
}: TaskListViewProps) {
  return (
    <ScrollView contentContainerStyle={styles.listContent} showsVerticalScrollIndicator={false}>
      <ProgressBar total={total} completed={completedCount} />

      {pending.length > 0 && (
        <>
          <SectionLabel title="PENDING" count={pending.length} />
          {pending.map((task) => (
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
        </>
      )}

      {completed.length > 0 && (
        <>
          <SectionLabel title="COMPLETED" count={completed.length} />
          {completed.map((task) => (
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
        </>
      )}
    </ScrollView>
  );
}
