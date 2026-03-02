import React from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import { colors } from './theme';

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ title }) {
  return (
    <View style={styles.placeholder}>
      <Text style={styles.placeholderText}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.backgroundPrimary} />
      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: colors.accentPrimary,
            background: colors.backgroundPrimary,
            card: colors.backgroundSecondary,
            text: colors.textPrimary,
            border: colors.divider,
          },
        }}
      >
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.backgroundPrimary,
              borderBottomColor: colors.divider,
              borderBottomWidth: 1,
            },
            headerTitleStyle: {
              color: colors.textPrimary,
              fontSize: 18,
              fontWeight: '600',
            },
            tabBarStyle: {
              backgroundColor: colors.backgroundSecondary,
              borderTopColor: colors.divider,
              borderTopWidth: 1,
            },
            tabBarActiveTintColor: colors.accentPrimary,
            tabBarInactiveTintColor: colors.textSecondary,
            tabBarLabelStyle: { fontSize: 11 },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerTitle: 'Block AI',
              headerTitleStyle: [styles.headerTitle, { color: colors.accentPrimary }],
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Markets"
            component={() => <PlaceholderScreen title="Markets" />}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons name="bar-chart-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Derivatives"
            component={() => <PlaceholderScreen title="Derivatives" />}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons name="trending-up-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Trade"
            component={() => <PlaceholderScreen title="Trade" />}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons name="swap-horizontal-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Assets"
            component={() => <PlaceholderScreen title="Assets" />}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons name="wallet-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  placeholder: {
    flex: 1,
    backgroundColor: colors.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: colors.textSecondary,
  },
});
