import { Tabs } from 'expo-router';
import { LucideInfo } from 'lucide-react-native';
import { Text } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Saudi Riyal Font',
          tabBarIcon: ({ color, size }) => (
            <Text style={{ fontFamily: 'saudi_riyal', fontSize: size, color }}>
              {'\uE900'}
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => (
            <LucideInfo color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
