import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../styles';

export default function EmptyStateView() {
  return (
    <ScrollView contentContainerStyle={styles.centerContent}>
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
