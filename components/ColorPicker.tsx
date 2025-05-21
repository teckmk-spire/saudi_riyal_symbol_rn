import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import RNSlider from '@react-native-community/slider';

export default function RGBColorPicker({
  onChange,
  onSelect,
}: {
  onChange: (color: string) => void;
  onSelect: (color: string) => void;
}) {
  const [r, setR] = useState(13);
  const [g, setG] = useState(107);
  const [b, setB] = useState(55);

  const toHex = (val: number) => val.toString(16).padStart(2, '0');
  const colorHex = `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  const rgbColor = `rgb(${r}, ${g}, ${b})`;

  const updateColor = (newR: number, newG: number, newB: number) => {
    const color = `rgb(${newR}, ${newG}, ${newB})`;
    onChange(color);
  };

  const handleSelect = () => {
    onSelect(rgbColor);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>🎨 Custom Color</Text>

      {[
        { label: 'Red', value: r, setValue: setR, tint: 'red' },
        { label: 'Green', value: g, setValue: setG, tint: 'green' },
        { label: 'Blue', value: b, setValue: setB, tint: 'blue' },
      ].map(({ label, value, setValue, tint }) => (
        <View key={label} style={styles.sliderRow}>
          <Text style={[styles.sliderLabel, { color: tint }]}>{label}</Text>
          <RNSlider
            style={styles.slider}
            minimumValue={0}
            maximumValue={255}
            step={1}
            value={value}
            onValueChange={(val) => {
              setValue(val);
              updateColor(
                label === 'Red' ? val : r,
                label === 'Green' ? val : g,
                label === 'Blue' ? val : b
              );
            }}
            minimumTrackTintColor={tint}
            maximumTrackTintColor="#ddd"
            thumbTintColor={tint}
          />
          <Text style={styles.sliderValue}>{value}</Text>
        </View>
      ))}

      <View style={styles.previewRow}>
        <View style={[styles.colorPreview, { backgroundColor: rgbColor }]}>
          <Text style={styles.colorCode}>{colorHex}</Text>
        </View>
        <Pressable onPress={handleSelect} style={styles.selectButton}>
          <Text style={styles.selectText}>Select</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sliderLabel: {
    width: 48,
    fontSize: 14,
    fontWeight: '500',
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  sliderValue: {
    width: 36,
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
  previewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  colorPreview: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  colorCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  selectButton: {
    backgroundColor: 'white',
    borderColor: '#555',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginLeft: 12,
  },
  selectText: {
    color: '#555',
    fontWeight: '600',
    fontSize: 14,
  },
});
