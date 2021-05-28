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
    zIndex: 1,

    height: '10%',
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#020b08',
    alignItems: 'center',
  },
  logo: {
    width: '70%',
    height: '100%',
  },
});
export default AppBar;
