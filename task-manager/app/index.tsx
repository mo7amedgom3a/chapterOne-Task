import React from 'react';
import { Redirect } from 'expo-router';
import SplashScreen from '../src/screens/Splash';

export default function Index() {
  // We render our custom splash screen here
  // The CTA inside it uses router.replace('/(tabs)') instead of navigation.replace
  return <SplashScreen />;
}
