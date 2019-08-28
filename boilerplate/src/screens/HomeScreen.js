import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export const HomeScreen = ({ navigation }) => {
  const buttons = [
    { navigate: 'Components', text: 'To The Components Demo' },
    { navigate: 'Image', text: 'To The Images Demo' },
    { navigate: 'List', text: 'To The List Demo' },
    { navigate: 'Counter', text: 'To The Counter Demo' },
    { navigate: 'Colours', text: 'To The Colour Demo' },
    { navigate: 'Square', text: 'To The Square Demo' },
    { navigate: 'Text', text: 'To The Text Demo' },
    { navigate: 'Password', text: 'To The Password Demo' },
    { navigate: 'Box', text: 'To The Box Demo' }
  ];

  const renderButtons = (navigate, text) => (
    <TouchableOpacity
      key={navigate}
      style={styles.button}
      onPress={() => navigation.navigate(navigate)}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.text}>Hi</Text>
      {buttons.map(button => renderButtons(button.navigate, button.text))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10
  }
});
