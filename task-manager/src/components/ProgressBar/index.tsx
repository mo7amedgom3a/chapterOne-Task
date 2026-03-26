// components/ProgressBar.tsx
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { styles } from './styles';

interface ProgressBarProps {
  total: number;
  completed: number;
}

export default function ProgressBar({ total, completed }: ProgressBarProps) {
  const widthAnim = useRef(new Animated.Value(0)).current;
  const progress = total > 0 ? completed / total : 0;
  const percent = Math.round(progress * 100);

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: progress,
      duration: 400,
      useNativeDriver: false, // width cannot use native driver
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      {/* Track */}
      <View style={styles.track}>
        {/* Fill */}
        <Animated.View
          style={[
            styles.fill,
            {
              width: widthAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      <Text style={styles.label}>{percent}% complete</Text>
    </View>
  );
}


