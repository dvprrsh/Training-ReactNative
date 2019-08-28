import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { ColourCounter } from '../components/ColourCounter';

const CHANGE_VALUE = 15;

const reducer = (state, action) => {
  const { red, green, blue } = state;
  const { payload } = action;
  switch (action.type) {
    case 'change_red':
      return red + payload <= 255 && red + payload >= 0 ? { ...state, red: red + payload } : state;

    case 'change_green':
      return green + payload <= 255 && green + payload >= 0
        ? { ...state, green: green + payload }
        : state;

    case 'change_blue':
      return blue + payload <= 255 && blue + payload >= 0
        ? { ...state, blue: blue + payload }
        : state;

    default:
      return state;
  }
};
export const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColourCounter
        colour="Red"
        onIncrement={() => dispatch({ type: 'change_red', payload: CHANGE_VALUE })}
        onDecrement={() => dispatch({ type: 'change_red', payload: -CHANGE_VALUE })}
      />
      <ColourCounter
        colour="Green"
        onIncrement={() => dispatch({ type: 'change_green', payload: CHANGE_VALUE })}
        onDecrement={() => dispatch({ type: 'change_green', payload: -CHANGE_VALUE })}
      />
      <ColourCounter
        colour="Blue"
        onIncrement={() => dispatch({ type: 'change_blue', payload: CHANGE_VALUE })}
        onDecrement={() => dispatch({ type: 'change_blue', payload: -CHANGE_VALUE })}
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
