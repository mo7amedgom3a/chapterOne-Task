// components/BottomNav.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';
import { Shadow } from '../../theme/shadows';
import { styles } from './styles';

interface BottomNavProps {
  active: 'list' | 'add' | 'done';
  onPressAdd: () => void;
  onPressList: () => void;
  onPressDone: () => void;
}

const TABS = [
  { key: 'list' as const, icon: '≡', label: 'Tasks' },
  { key: 'add' as const, icon: '+', label: 'Add' },
  { key: 'done' as const, icon: '✓', label: 'Done' },
];

export default function BottomNav({
  active,
  onPressAdd,
  onPressList,
  onPressDone,
}: BottomNavProps) {
  const handlers: Record<string, () => void> = {
    list: onPressList,
    add: onPressAdd,
    done: onPressDone,
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.row}>
        {TABS.map((tab) => {
          const isAdd = tab.key === 'add';
          const isActive = active === tab.key;

          const circleStyle = [
            styles.circle,
            isAdd
              ? styles.circleAdd
              : isActive
              ? styles.circleActive
              : styles.circleInactive,
          ];

          const iconStyle = [
            styles.icon,
            isAdd ? styles.iconLarge : styles.iconNormal,
            { color: isAdd ? Colors.white : isActive ? Colors.primary : Colors.textSub },
          ];

          return (
            <Pressable
              key={tab.key}
              style={styles.tab}
              onPress={handlers[tab.key]}
            >
              <View style={[circleStyle, isAdd ? Shadow.button : undefined]}>
                <Text style={iconStyle}>{tab.icon}</Text>
              </View>
              <Text
                style={[
                  styles.label,
                  { color: isActive ? Colors.primary : Colors.textSub },
                ]}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

