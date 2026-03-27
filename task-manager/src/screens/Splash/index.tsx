// screens/SplashScreen.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Shadow } from '../../theme/shadows';
import { styles } from './styles';

const CHIPS = [
  '+ Add tasks instantly',
  '+ Mark tasks complete',
  '+ Delete with one tap',
];

export default function SplashScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#4363FE', '#141FB6']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Decorative background circle */}
      <View style={styles.decorCircle} />

      {/* Logo card */}
      <View style={[styles.logoCard, Shadow.card]}>
        <Text style={styles.logoIcon}>✓</Text>
      </View>

      {/* App name */}
      <Text style={styles.appName}>TaskFlow</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>Stay organised, get things done.</Text>

      {/* Feature chips */}
      <View style={styles.chipsContainer}>
        {CHIPS.map((chip) => (
          <View key={chip} style={styles.chip}>
            <Text style={styles.chipText}>{chip}</Text>
          </View>
        ))}
      </View>

      {/* CTA Button */}
      <Pressable
        style={[styles.ctaBtn, Shadow.button]}
        onPress={() => router.replace('/(tabs)' as never)}
      >
        <Text style={styles.ctaText}>Get Started  →</Text>
      </Pressable>

      {/* Sub-label */}
      <Text style={styles.subLabel}>Free · No sign-up required</Text>
    </LinearGradient>
  );
}


