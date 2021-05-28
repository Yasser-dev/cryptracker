import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CoinDataCard = ({coin}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <Text style={styles.name}>{coin.name}</Text>
        <Text style={styles.name}>{coin.symbol}</Text>
        <Text style={styles.name}>
          $
          {coin.current_price
            ? coin.current_price >= 1000
              ? coin.current_price.toLocaleString()
              : coin.current_price
            : 0}
        </Text>

        {coin.price_change_percentage_24h < 0 ? (
          <Text style={styles.nameRed}>
            {coin.price_change_percentage_24h
              ? coin.price_change_percentage_24h?.toFixed(2)
              : 0}
            %
          </Text>
        ) : (
          <Text style={styles.nameGreen}>
            +
            {coin.price_change_percentage_24h
              ? coin.price_change_percentage_24h?.toFixed(2)
              : 0}
            %
          </Text>
        )}

        <Text style={styles.name}>{coin.symbol}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#011413',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  name: {
    color: '#e2e2e2',
  },
  nameRed: {
    color: 'red',
  },
  nameGreen: {
    color: 'green',
  },
});
export default CoinDataCard;
