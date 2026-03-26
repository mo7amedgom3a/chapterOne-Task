// components/TopBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

interface TopBarProps {
  title: string;
  subtitle?: string;
}

export default function TopBar({ title, subtitle }: TopBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.textGroup}>
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>M</Text>
      </View>
    </View>
  );
}


