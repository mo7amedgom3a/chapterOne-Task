// components/TaskCard.tsx
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import { Colors } from '../theme/colors';
import { Typography } from '../theme/typography';
import { Shadow } from '../theme/shadows';
import { styles } from '../styles/TaskCardStyles';

interface TaskCardProps {
  id: string;
  text: string;
  isComplete: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export default function TaskCard({
  id,
  text,
  isComplete,
  onToggleComplete,
  onDelete,
  onEdit,
}: TaskCardProps) {
  // Fade in on mount
  const opacity = useRef(new Animated.Value(0)).current;
  // Checkbox scale pulse
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleToggle = () => {
    // Scale pulse animation
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.3,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
    onToggleComplete(id);
  };

  return (
    <Animated.View style={[styles.card, { opacity }, Shadow.card]}>
      {/* Left accent bar */}
      <View
        style={[
          styles.accentBar,
          { backgroundColor: isComplete ? Colors.success : Colors.primary },
        ]}
      />

      {/* Checkbox */}
      <TouchableOpacity onPress={handleToggle} activeOpacity={0.7}>
        <Animated.View
          style={[
            styles.checkbox,
            isComplete ? styles.checkboxDone : styles.checkboxTodo,
            { transform: [{ scale }] },
          ]}
        >
          {isComplete && <Text style={styles.checkmark}>✓</Text>}
        </Animated.View>
      </TouchableOpacity>

      {/* Task text */}
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => onEdit(id)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            styles.taskText,
            isComplete && styles.taskTextDone,
          ]}
          numberOfLines={2}
        >
          {text}
        </Text>
      </TouchableOpacity>

      {/* Delete button */}
      <TouchableOpacity
        style={styles.deleteBtn}
        onPress={() => onDelete(id)}
        activeOpacity={0.7}
      >
        <Text style={styles.deleteIcon}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}


