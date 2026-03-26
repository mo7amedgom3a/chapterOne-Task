// components/DeleteDialog.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { styles } from '../styles/DeleteDialogStyles';
import { Shadow } from '../theme/shadows';

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
      <TouchableOpacity
        style={[StyleSheet.absoluteFill, styles.backdrop]}
        activeOpacity={1}
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
            <TouchableOpacity
              style={styles.keepBtn}
              onPress={onCancel}
              activeOpacity={0.7}
            >
              <Text style={styles.keepLabel}>Keep</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={onConfirm}
              activeOpacity={0.8}
            >
              <Text style={styles.deleteLabel}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}


