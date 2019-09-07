import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesome } from '@expo/vector-icons';
import { Context as authContext } from '../contexts/AuthContext';

export const AccountScreen = () => {
  const { signOut } = useContext(authContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <View style={styles.container}>
        <Text h4>Account</Text>
        <Button title="Log Out" onPress={signOut} />
      </View>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => ({
  header: true,
  tabBarIcon: <FontAwesome name="gear" size={20} />
});

const styles = StyleSheet.create({});
