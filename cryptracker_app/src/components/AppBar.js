import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Logo from '../assets/logoh.png';
const AppBar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    padding: 15,
  },
  logo: {
    width: 200,
    height: 45,
  },
});
export default AppBar;
