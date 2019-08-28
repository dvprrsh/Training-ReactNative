import React, { useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'increment' })}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'decrement' })}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10
  },
  text: {
    textAlign: 'center'
  }
});
