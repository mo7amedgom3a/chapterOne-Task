import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTasks } from '../../state/useTasks';
import { styles } from './styles';
import TopBar from '../../components/TopBar';
import BottomNav from '../../components/BottomNav';
import AddTaskSheet from '../../components/AddTaskSheet';
import DeleteDialog from '../../components/DeleteDialog';

import EmptyStateView from './components/EmptyStateView';
import TaskListView from './components/TaskListView';
import AllDoneView from './components/AllDoneView';



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


