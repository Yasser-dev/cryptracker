import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppBar from './components/AppBar';
const App = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text> Hello World </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020b08',
    alignItems: 'center',
  },
});
export default App;
