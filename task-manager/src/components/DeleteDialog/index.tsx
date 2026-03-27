// components/DeleteDialog.tsx
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { styles } from './styles';
import { Shadow } from '../../theme/shadows';

interface DeleteDialogProps {
  visible: boolean;
  taskText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteDialog({
  visible,
  onConfirm,
  onCancel,
}: DeleteDialogProps) {
  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      {/* Backdrop */}
      <Pressable
        style={[StyleSheet.absoluteFill, styles.backdrop]}
        onPress={onCancel}
      />

      {/* Dialog card */}
      <View style={styles.cardWrapper} pointerEvents="box-none">
        <View style={[styles.card, Shadow.card]}>
          {/* Icon circle */}
          <View style={styles.iconCircle}>
            <Text style={styles.iconText}>✕</Text>
          </View>

          <Text style={styles.title}>Delete Task?</Text>
          <Text style={styles.body}>This cannot be undone.</Text>
          <Text style={styles.bodySmall}>The task will be permanently deleted.</Text>

          {/* Buttons */}
          <View style={styles.btnRow}>
            <Pressable
              style={styles.keepBtn}
              onPress={onCancel}
            >
              <Text style={styles.keepLabel}>Keep</Text>
            </Pressable>
            <Pressable
              style={styles.deleteBtn}
              onPress={onConfirm}
            >
              <Text style={styles.deleteLabel}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}


