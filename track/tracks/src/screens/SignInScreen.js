import React from 'react';
import { LogInForm } from '../components';

export const SignInScreen = ({ navigation }) => (
  <LogInForm textToDisplay="Sign In" navigationCallback={() => navigation.navigate('SignUp')} />
);

SignInScreen.navigationOptions = () => ({
  header: null
});
