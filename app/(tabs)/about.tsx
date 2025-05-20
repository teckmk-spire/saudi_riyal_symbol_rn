import React, { useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SectionHeader } from '@/components/SectionHeader';
import { ExternalLink, Github } from 'lucide-react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

// Define theme colors
const COLORS = {
  primary: '#0D6B37', // Saudi green
  gold: '#D4AF37', // Gold
  white: '#FFFFFF',
  black: '#000000',
};

export default function AboutScreen() {
  // Animation for parallax effect
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 100],
        [1, 0.2],
        Extrapolation.CLAMP
      ),
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, 100],
            [0, -40],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <Animated.View style={[styles.headerContainer, headerAnimatedStyle]}>
          <Text style={styles.headerTitle}>About the Saudi Riyal Font</Text>
          <Text style={styles.headerSubtitle}>
            A specialized font designed for proper display of the Saudi Riyal
            currency symbol
          </Text>

          <TouchableOpacity
            style={styles.githubButton}
            onPress={() =>
              Linking.openURL(
                'https://github.com/emran-alhaddad/Saudi-Riyal-Font'
              )
            }
          >
            <Github size={20} color={COLORS.white} />
            <Text style={styles.githubButtonText}>View on GitHub</Text>
          </TouchableOpacity>
        </Animated.View>

        <SectionHeader title="Implementation" />

        <Text style={styles.paragraph}>
          Implementing the Saudi Riyal Font in your applications is
          straightforward. This demo app showcases how to load and use the font
          in a React Native environment using Expo's font system.
        </Text>

        <View style={styles.codeBlock}>
          <Text style={styles.codeTitle}>Font Loading with Expo</Text>
          <Text style={styles.code}>
            {`import { useFonts } from 'expo-font';
            
const [fontsLoaded] = useFonts({
    saudi_riyal: require('./assets/fonts/saudi_riyal.ttf'),
});

export default function MyScreen() {
   return (
      <Text style={{ fontFamily: 'saudi_riyal', fontSize: 32 }}>
        {'\\uE900'}
      </Text>
   )
}
`}
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            gap: 10,
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={styles.documentationButton}
            onPress={() =>
              Linking.openURL('https://docs.expo.dev/versions/latest/sdk/font/')
            }
          >
            <Text style={styles.documentationButtonText}>
              Expo Font Documentation
            </Text>
            <ExternalLink size={16} color={COLORS.primary} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.documentationButton}
            onPress={() =>
              Linking.openURL(
                'https://github.com/emran-alhaddad/Saudi-Riyal-Font/blob/main/fonts/saudi_riyal.ttf'
              )
            }
          >
            <Text style={styles.documentationButtonText}>
              Download Riyal Font
            </Text>
            <ExternalLink size={16} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <SectionHeader title="Source" />

        <Text style={styles.paragraph}>
          This demo application was created to provide an example of how to
          implement it in React Native applications.
        </Text>

        <TouchableOpacity
          style={styles.creditButton}
          onPress={() =>
            Linking.openURL(
              'https://github.com/teckmk-spire/saudi_riyal_symbol_rn'
            )
          }
        >
          <Text style={styles.creditButtonText}>Visit Source on GitHub</Text>
          <Github size={16} color="#333" />
        </TouchableOpacity>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  headerContainer: {
    marginTop: 24,
    marginBottom: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 22,
  },
  githubButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  githubButtonText: {
    color: COLORS.white,
    marginLeft: 8,
    fontWeight: '500',
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    marginBottom: 16,
    lineHeight: 24,
  },
  featureCard: {
    padding: 16,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.gold,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  codeBlock: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
  },
  codeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  documentationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    flex: 1,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 8,
    marginBottom: 24,
  },
  documentationButtonText: {
    color: COLORS.primary,
    fontWeight: '500',
    marginRight: 8,
  },
  creditButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginTop: 8,
  },
  creditButtonText: {
    color: '#333',
    fontWeight: '500',
    marginRight: 8,
  },
});
