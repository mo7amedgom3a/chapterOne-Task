// components/AddTaskSheet.tsx
import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Colors } from '../theme/colors';
import { Shadow } from '../theme/shadows';
import { styles } from '../styles/AddTaskSheetStyles';

interface AddTaskSheetProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
  initialText?: string;
  title?: string;
}

export default function AddTaskSheet({ visible, onClose, onAdd, initialText, title }: AddTaskSheetProps) {
  const [inputText, setInputText] = useState('');
  const [hasError, setHasError] = useState(false);

  // Slide animation
  const translateY = useRef(new Animated.Value(500)).current;
  // Shake animation for empty submit
  const shakeX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      if (initialText) {
        setInputText(initialText);
      } else {
        setInputText('');
      }
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 80,
        friction: 10,
      }).start();
    }
  }, [visible, initialText]);

  const handleClose = () => {
    Animated.timing(translateY, {
      toValue: 500,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setInputText('');
      setHasError(false);
      onClose();
    });
  };

  const shakeInput = () => {
    setHasError(true);
    Animated.sequence([
      Animated.timing(shakeX, { toValue: -10, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeX, { toValue: 10, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeX, { toValue: -8, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeX, { toValue: 8, duration: 60, useNativeDriver: true }),
      Animated.timing(shakeX, { toValue: 0, duration: 60, useNativeDriver: true }),
    ]).start();
    setTimeout(() => setHasError(false), 1500);
  };

  const handleAdd = () => {
    if (!inputText.trim()) {
      shakeInput();
      return;
    }
    onAdd(inputText.trim());
    Animated.timing(translateY, {
      toValue: 500,
      duration: 250,
      useNativeDriver: true,
    }).start(() => {
      setInputText('');
      setHasError(false);
      onClose();
    });
  };

  if (!visible) return null;

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
      {/* Dimmed backdrop */}
      <TouchableOpacity
        style={[StyleSheet.absoluteFill, styles.backdrop]}
        activeOpacity={1}
        onPress={handleClose}
      />

      {/* Sheet */}
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
        style={styles.kvWrapper}
        pointerEvents="box-none"
      >
        <Animated.View
          style={[styles.sheet, { transform: [{ translateY }] }]}
        >
          {/* Handle */}
          <View style={styles.handle} />

          <Text style={styles.title}>{title || 'Add New Task'}</Text>
          <Text style={styles.subtitle}>What do you need to get done?</Text>

          {/* Input */}
          <Animated.View style={{ transform: [{ translateX: shakeX }] }}>
            <TextInput
              style={[
                styles.input,
                hasError && styles.inputError,
              ]}
              placeholder="e.g. Buy groceries..."
              placeholderTextColor={Colors.textSub}
              value={inputText}
              onChangeText={(t) => {
                setInputText(t);
                if (hasError) setHasError(false);
              }}
              maxLength={100}
              multiline
              autoFocus
            />
          </Animated.View>

          {/* Character counter */}
          <Text style={styles.charCount}>{inputText.length} / 100 characters</Text>

          {/* Buttons */}
          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={handleClose} activeOpacity={0.7}>
              <Text style={styles.cancelLabel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.addBtn, Shadow.button]}
              onPress={handleAdd}
              activeOpacity={0.8}
            >
              <Text style={styles.addLabel}>{title ? 'Save Task ✓' : 'Add Task ✓'}</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.tip}>Tip: Keep tasks short and actionable</Text>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  );
}


