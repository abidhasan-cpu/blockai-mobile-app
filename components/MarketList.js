import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { colors, spacing } from '../theme';

const formatPrice = (price) => {
  if (price >= 1000) return price.toFixed(2);
  if (price >= 1) return price.toFixed(4);
  if (price >= 0.0001) return price.toFixed(6);
  return price.toFixed(8);
};

const DEFAULT_PAIRS = [
  { symbol: 'BTC/USDT', price: 67234.5, change24h: 2.34 },
  { symbol: 'ETH/USDT', price: 3456.78, change24h: -1.12 },
  { symbol: 'BNB/USDT', price: 582.3, change24h: 0.85 },
  { symbol: 'SOL/USDT', price: 178.45, change24h: 5.67 },
  { symbol: 'XRP/USDT', price: 0.5234, change24h: -0.45 },
  { symbol: 'DOGE/USDT', price: 0.0892, change24h: 3.21 },
];

function MarketRow({ pair, onPress, isNarrow }) {
  const [base, quote] = pair.symbol.split('/');
  const isPositive = pair.change24h >= 0;
  const changeColor = isPositive ? colors.positive : colors.negative;
  const changeText = `${isPositive ? '+' : ''}${pair.change24h.toFixed(2)}%`;

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => onPress?.(pair)}
      activeOpacity={0.7}
    >
      <View style={styles.pairCell}>
        <Text style={styles.symbolBase}>{base}</Text>
        <Text style={styles.symbolQuote}>/{quote}</Text>
      </View>
      {!isNarrow && (
        <Text style={styles.price} numberOfLines={1}>
          {formatPrice(pair.price)}
        </Text>
      )}
      <View style={styles.changeCell}>
        {isNarrow && (
          <Text style={styles.priceSmall} numberOfLines={1}>
            {formatPrice(pair.price)}
          </Text>
        )}
        <Text style={[styles.change, { color: changeColor }]}>{changeText}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function MarketList({
  pairs = DEFAULT_PAIRS,
  onPairTap,
  maxHeight = 320,
}) {
  const { width } = useWindowDimensions();
  const isNarrow = width < 360;

  return (
    <View style={[styles.container, { maxHeight }]}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pair</Text>
        {!isNarrow && (
          <Text style={[styles.headerText, styles.headerRight]}>Last Price</Text>
        )}
        <Text style={[styles.headerText, styles.headerRight]}>
          {isNarrow ? 'Price' : '24h Change'}
        </Text>
      </View>
      <FlatList
        data={pairs}
        keyExtractor={(item) => item.symbol}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <MarketRow
            pair={item}
            onPress={onPairTap}
            isNarrow={isNarrow}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.divider,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: 'center',
  },
  headerText: {
    flex: 2,
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  headerRight: {
    flex: 1,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: 14,
    alignItems: 'center',
  },
  pairCell: {
    flex: 2,
  },
  symbolBase: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  symbolQuote: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  price: {
    flex: 1,
    fontSize: 14,
    color: colors.textPrimary,
    textAlign: 'right',
  },
  priceSmall: {
    fontSize: 12,
    color: colors.textPrimary,
    textAlign: 'right',
  },
  changeCell: {
    flex: 1,
    alignItems: 'flex-end',
  },
  change: {
    fontSize: 12,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: colors.divider,
    marginHorizontal: spacing.lg,
  },
});
