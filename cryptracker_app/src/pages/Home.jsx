import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet} from 'react-native';
import CoinDataCard from '../components/CoinDataCard';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = useCallback(async () => {
    try {
      let coinsResponse = await axios.get(
        'https://api.coingecko.com/api/v3/coins/list?include_platform=false',
      );

      setCoins(coinsResponse.data);
      let dataResponse = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${page}&sparkline=false`,
      );

      setCoinsData(dataResponse.data);
      setLoading(false);
    } catch (error) {}
  }, [page, itemsPerPage]);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  return (
    <FlatList
      style={{paddingTop: 60, zIndex: 0}}
      data={coinsData}
      renderItem={({item}) => <CoinDataCard coin={item} />}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
export default Home;
