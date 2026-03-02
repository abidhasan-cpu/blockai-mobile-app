import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { colors, spacing } from '../theme';

const PROMO_ITEMS = [
  {
    id: '1',
    title: 'New User Bonus',
    subtitle: 'Get up to 3,000 USDT in rewards',
    colors: ['#F7A600', '#E88B00'],
  },
  {
    id: '2',
    title: 'Zero Fee Spot',
    subtitle: '0% maker fee for 30 days',
    colors: [colors.surfaceElevated, colors.surface],
  },
  {
    id: '3',
    title: 'Earn Up to 100% APY',
    subtitle: 'Stake and earn on your crypto',
    colors: ['#0ECB81', '#0A9B5C'],
  },
];

export default function PromoBanner({ onPromoTap }) {
  const { width } = useWindowDimensions();
  const cardWidth = Math.min(width - spacing.lg * 2 - 12, 320);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {PROMO_ITEMS.map((item, index) => (
        <View key={item.id} style={{ marginRight: index < PROMO_ITEMS.length - 1 ? 12 : 0 }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => onPromoTap?.(index)}
          style={[
            styles.card,
            {
              width: cardWidth,
              backgroundColor: item.colors[0],
            },
          ]}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: spacing.lg,
  },
  card: {
    padding: spacing.lg,
    borderRadius: 12,
    justifyContent: 'center',
    minHeight: 100,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  cardSubtitle: {
    fontSize: 12,
    color: colors.textPrimary,
    opacity: 0.9,
    marginTop: 4,
  },
});
