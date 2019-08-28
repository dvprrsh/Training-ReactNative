import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ColourCounter } from '../components/ColourCounter';

const CHANGE_VALUE = 10;

export const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <ColourCounter
        colour="Red"
        state={red}
        onIncrement={() => setRed(red + CHANGE_VALUE)}
        onDecrement={() => setRed(red - CHANGE_VALUE)}
      />
      <ColourCounter
        colour="Green"
        state={red}
        onIncrement={() => setGreen(green + CHANGE_VALUE)}
        onDecrement={() => setGreen(green - CHANGE_VALUE)}
      />
      <ColourCounter
        colour="Blue"
        state={red}
        onIncrement={() => setBlue(blue + CHANGE_VALUE)}
        onDecrement={() => setBlue(blue - CHANGE_VALUE)}
      />
      <View
        style={{
          margin: 10,
          alignItems: 'center',
          height: 100,
          width: 100,
          backgroundColor: `rgb( ${red}, ${green}, ${blue} )`
        }}
      >
        <Text style={{ paddingVertical: '50%', color: 'white' }}>
          {red}, {green}, {blue}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
