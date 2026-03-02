import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../theme';
import PromoBanner from '../components/PromoBanner';
import QuickActions from '../components/QuickActions';
import MarketList from '../components/MarketList';

export default function HomeScreen({ onSearchPress, onNotificationPress, onPairTap }) {
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header: search + notification */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.searchBar}
            onPress={onSearchPress}
            activeOpacity={0.8}
          >
            <Ionicons name="search" size={20} color={colors.textSecondary} />
            <Text style={styles.searchPlaceholder}>Search coins, pairs...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.notifButton}
            onPress={onNotificationPress}
            activeOpacity={0.8}
          >
            <Ionicons name="notifications-outline" size={24} color={colors.textPrimary} />
            <View style={styles.notifBadge} />
          </TouchableOpacity>
        </View>

        <View style={styles.spacer} />
        <PromoBanner />
        <View style={styles.spacerLg} />
        <QuickActions />
        <View style={styles.spacerLg} />

        {/* Markets section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Markets</Text>
          <TouchableOpacity hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.marketListWrap}>
          <MarketList onPairTap={onPairTap} maxHeight={320} />
        </View>
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: Platform.OS === 'android' ? 8 : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.divider,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  searchPlaceholder: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  notifButton: {
    padding: 10,
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.divider,
  },
  notifBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.negative,
  },
  spacer: { height: spacing.lg },
  spacerLg: { height: spacing.xl },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  seeAll: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.accentPrimary,
  },
  marketListWrap: {
    paddingHorizontal: spacing.lg,
  },
  bottomSpacer: { height: spacing.xxl },
});
