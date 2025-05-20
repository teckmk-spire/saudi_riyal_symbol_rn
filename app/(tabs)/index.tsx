import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNSlider from '@react-native-community/slider';

export default function Index() {
  const [fontSize, setFontSize] = useState(48);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Saudi Riyal Font Demo</Text>
      </View>

      {/* Expandable Font Area */}
      <View style={styles.fontContainer}>
        <Text style={[styles.riyalText, { fontSize }]}>{'\uE900'}</Text>
      </View>

      {/* Slider Area */}
      <View style={styles.controls}>
        <Text style={styles.label}>Adjust Font Size</Text>
        <RNSlider
          style={styles.slider}
          minimumValue={20}
          maximumValue={400}
          step={1}
          value={fontSize}
          onValueChange={setFontSize}
          minimumTrackTintColor="#0D6B37"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#0D6B37"
        />
        <Text style={styles.fontSizeValue}>{fontSize}px</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0D6B37',
  },
  fontContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  riyalText: {
    fontFamily: 'saudi_riyal',
    color: '#222',
  },
  controls: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  label: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  fontSizeValue: {
    marginTop: 10,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});
