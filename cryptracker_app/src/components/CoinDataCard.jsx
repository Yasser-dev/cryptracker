import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CoinDataCard = ({coin}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center'}}>
            <Image style={styles.image} source={{uri: coin.image}} />
          </View>
          <View>
            <View style={styles.firstRow}>
              <Text style={styles.name}>{coin.name}</Text>
              <Text style={styles.symbol}>({coin.symbol})</Text>
            </View>
            <View style={styles.secondRow}>
              <Text style={styles.price}>
                $
                {coin.current_price
                  ? coin.current_price >= 1000
                    ? coin.current_price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    : coin.current_price
                  : 0}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.change}>24h:</Text>
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
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#011413',
    borderRadius: 15,
    padding: 25,
    marginBottom: 20,
  },
  image: {
    height: '10%',
    width: '10%',
    padding: 20,
    marginRight: 20,
  },
  firstRow: {
    marginBottom: 10,

    height: '40%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondRow: {
    marginBottom: 10,

    height: '40%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#e2e2e2',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
  symbol: {
    color: '#d8d8d8',
    fontSize: 12,
  },
  price: {
    color: '#d1d1d1',
    fontSize: 17,
    fontWeight: 'bold',
  },
  change: {color: 'white', marginRight: 10, fontSize: 17, marginLeft: 25},
  nameRed: {
    color: 'red',
    fontSize: 17,
  },
  nameGreen: {
    color: 'green',
    fontSize: 17,
  },
});
export default CoinDataCard;
