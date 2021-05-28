import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  View,
  Button,
} from 'react-native';
import CoinDataCard from '../components/CoinDataCard';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  let flatList;
  const loadData = useCallback(async () => {
    try {
      let coinsResponse = await axios.get(
        'https://api.coingecko.com/api/v3/coins/list?include_platform=false',
      );

      setCoins(coinsResponse.data);
      let dataResponse = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`,
      );

      setCoinsData(dataResponse.data);

      setLoading(false);
    } catch (error) {}
  }, [page]);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  return loading ? (
    <View
      style={{alignItems: 'center', justifyContent: 'center', height: '100%'}}>
      <ActivityIndicator color="#e2e2e2" size="large" />
    </View>
  ) : (
    <FlatList
      style={styles.list}
      ref={ref => (flatList = ref)}
      data={page === 1 ? coinsData : [...allData, ...coinsData]}
      renderItem={({item}) => <CoinDataCard key={item.id} coin={item} />}
      ListFooterComponent={
        <Button
          onPress={() => {
            setAllData([...allData, ...coinsData]);
            setPage(page + 1);
          }}
          title="Load More"
          color="#273837"
          accessibilityLabel="Load more coins button"
        />
      }
      ListFooterComponentStyle={{
        marginBottom: 25,
        padding: 25,
        borderRadius: 150,
      }}
    />
  );
};

const styles = StyleSheet.create({
  list: {paddingBottom: 150, paddingTop: 15, zIndex: 0},
});
export default Home;
