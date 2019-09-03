import React from 'react';
import { LogInForm } from '../components';

export const SignUpScreen = ({ navigation }) => (
  <LogInForm textToDisplay="Sign Up" navigationCallback={() => navigation.navigate('SignIn')} />
);

SignUpScreen.navigationOptions = () => ({
  header: null
});
