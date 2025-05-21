import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNSlider from '@react-native-community/slider';
import ColorPicker from '@/components/ColorPicker';

const COLOR_OPTIONS = ['#0D6B37', '#1D3557', '#E63946', '#F4A261', '#000000'];

export default function Index() {
  const [fontSize, setFontSize] = useState(48);
  const [color, setColor] = useState(COLOR_OPTIONS[0]);
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Saudi Riyal Font Demo</Text>
      </View>

      {/* Font Display */}
      <View style={styles.fontContainer}>
        <Text style={[styles.riyalText, { fontSize, color }]}>{'\uE900'}</Text>
      </View>

      {/* Controls */}
      <View style={styles.controls}>
        {/* Font Size */}
        <Text style={styles.label}>Font Size: {fontSize}px</Text>
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

        {/* Font Color */}
        <Text style={[styles.label, { marginTop: 16 }]}>Font Color</Text>
        <View style={styles.colorRow}>
          {COLOR_OPTIONS.map((c) => (
            <TouchableOpacity
              key={c}
              style={[
                styles.colorSwatch,
                {
                  backgroundColor: c,
                  borderColor: c === color ? '#333' : '#fff',
                },
              ]}
              onPress={() => setColor(c)}
            />
          ))}
          <TouchableOpacity
            onPress={() => setShowColorPicker(true)}
            style={[styles.colorSwatch, styles.customSwatch]}
          >
            <Text style={styles.customText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Custom Color Picker */}
      <Modal visible={showColorPicker} transparent={true} animationType="slide">
        <SafeAreaView style={{ flex: 1, margin: 8 }}>
          <ColorPicker
            onChange={(newColor) => {
              setColor(newColor);
            }}
            onSelect={(pickedColor) => {
              setColor(pickedColor);
              setShowColorPicker(false);
            }}
          />
        </SafeAreaView>
      </Modal>
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
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  colorSwatch: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
    borderWidth: 2,
  },
  customSwatch: {
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
  },
});
