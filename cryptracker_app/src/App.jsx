import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppBar from './components/AppBar';
import Home from './pages/Home';
const App = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Home />
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
