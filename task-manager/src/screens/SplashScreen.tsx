// screens/SplashScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Shadow } from '../theme/shadows';
import { styles } from '../styles/SplashScreenStyles';

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
      <TouchableOpacity
        style={[styles.ctaBtn, Shadow.button]}
        onPress={() => router.replace('/(tabs)' as never)}
        activeOpacity={0.85}
      >
        <Text style={styles.ctaText}>Get Started  →</Text>
      </TouchableOpacity>

      {/* Sub-label */}
      <Text style={styles.subLabel}>Free · No sign-up required</Text>
    </LinearGradient>
  );
}


