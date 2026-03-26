// components/SectionLabel.tsx
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { styles } from './styles';

interface SectionLabelProps {
  title: string;  // e.g. "PENDING"
  count: number;
}

export default function SectionLabel({ title, count }: SectionLabelProps) {
  return (
    <Text style={styles.text}>
      {title}  ({count})
    </Text>
  );
}


