import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';

const ACTIONS = [
  { id: 'deposit', label: 'Deposit', icon: 'wallet-outline' },
  { id: 'buy', label: 'Buy Crypto', icon: 'add-circle-outline' },
  { id: 'rewards', label: 'Rewards', icon: 'gift-outline' },
  { id: 'more', label: 'More', icon: 'grid-outline' },
];

export default function QuickActions({ onDeposit, onBuyCrypto, onRewards, onMore }) {
  const { width } = useWindowDimensions();
  const isNarrow = width < 360;

  const handlers = {
    deposit: onDeposit,
    buy: onBuyCrypto,
    rewards: onRewards,
    more: onMore,
  };

  return (
    <View style={styles.container}>
      {ACTIONS.map((action) => (
        <TouchableOpacity
          key={action.id}
          style={styles.action}
          onPress={handlers[action.id]}
          activeOpacity={0.7}
        >
          <View style={styles.iconWrap}>
            <Ionicons
              name={action.icon}
              size={isNarrow ? 22 : 24}
              color={colors.accentPrimary}
            />
          </View>
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  action: {
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.divider,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: spacing.sm,
  },
});
