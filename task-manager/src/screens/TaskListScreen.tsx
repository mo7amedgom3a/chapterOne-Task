import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTasks } from '../state/useTasks';
import { Task } from '../types';
import { styles } from '../styles/TaskListScreenStyles';
import TopBar from '../components/TopBar';
import BottomNav from '../components/BottomNav';
import TaskCard from '../components/TaskCard';
import SectionLabel from '../components/SectionLabel';
import ProgressBar from '../components/ProgressBar';
import AddTaskSheet from '../components/AddTaskSheet';
import DeleteDialog from '../components/DeleteDialog';

// ─── Sub-views ────────────────────────────────────────────────────────────────

function EmptyStateView() {
  return (
    <ScrollView contentContainerStyle={styles.centerContent}>
      {/* Illustration */}
      <View style={styles.illustration}>
        <Text style={styles.illustrationIcon}>[ ]</Text>
      </View>

      <Text style={styles.emptyTitle}>No tasks yet!</Text>
      <Text style={styles.emptySubtitle}>Tap + below to add your first task</Text>
      <Text style={styles.emptySubtitle}>and start being productive!</Text>
      <Text style={styles.emptyHint}>↓  Tap + to add a task</Text>
    </ScrollView>
  );
}

interface TaskListViewProps {
  pending: Task[];
  completed: Task[];
  total: number;
  completedCount: number;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

function TaskListView({
  pending,
  completed,
  total,
  completedCount,
  onToggle,
  onDelete,
  onEdit,
}: TaskListViewProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    >
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

interface AllDoneViewProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

function AllDoneView({ tasks, onToggle, onDelete, onEdit }: AllDoneViewProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Celebration banner */}
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

// ─── Main Screen ──────────────────────────────────────────────────────────────

export default function TaskListScreen() {
  const {
    tasks,
    pendingTasks,
    completedTasks,
    allComplete,
    showAddSheet,
    setShowAddSheet,
    deleteTarget,
    addTask,
    toggleComplete,
    requestDelete,
    deleteTask,
    cancelDelete,
    editTarget,
    setEditTarget,
    editTask,
  } = useTasks();

  const currentView =
    tasks.length === 0 ? 'empty' : allComplete ? 'allDone' : 'list';

  const subtitle =
    tasks.length === 0
      ? 'Welcome! Start adding tasks'
      : allComplete
      ? 'All tasks completed!'
      : `${pendingTasks.length} pending  ·  ${completedTasks.length} done`;

  return (
    <SafeAreaView style={styles.root}>
      <TopBar title="My Tasks" subtitle={subtitle} />

      <View style={styles.body}>
        {currentView === 'empty' && <EmptyStateView />}

        {currentView === 'list' && (
          <TaskListView
            pending={pendingTasks}
            completed={completedTasks}
            total={tasks.length}
            completedCount={completedTasks.length}
            onToggle={toggleComplete}
            onDelete={requestDelete}
            onEdit={setEditTarget}
          />
        )}

        {currentView === 'allDone' && (
          <AllDoneView
            tasks={tasks}
            onToggle={toggleComplete}
            onDelete={requestDelete}
            onEdit={setEditTarget}
          />
        )}
      </View>

      <BottomNav
        active={allComplete ? 'done' : 'list'}
        onPressAdd={() => setShowAddSheet(true)}
        onPressList={() => {}}
        onPressDone={() => {}}
      />

      {/* Overlays */}
      <AddTaskSheet
        visible={showAddSheet || editTarget !== null}
        onClose={() => {
          setShowAddSheet(false);
          setEditTarget(null);
        }}
        onAdd={(text) => {
          if (editTarget) {
            editTask(editTarget, text);
          } else {
            addTask(text);
          }
        }}
        initialText={editTarget ? tasks.find(t => t.id === editTarget)?.text : undefined}
        title={editTarget ? 'Edit Task' : undefined}
      />

      <DeleteDialog
        visible={deleteTarget !== null}
        taskText={tasks.find((t) => t.id === deleteTarget)?.text ?? ''}
        onConfirm={() => deleteTask(deleteTarget!)}
        onCancel={cancelDelete}
      />
    </SafeAreaView>
  );
}


