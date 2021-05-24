import axios from "axios";
import { useState, useEffect } from "react";

import * as Elements from "./HomeElements";
import { Container } from "../../components/Shared";

const Home = ({ pagesNo }) => {
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(
        `/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
      )
      .then((res) => setCoinsData(res.data));
  }, [page]);

  console.log(coinsData, pagesNo);
  return (
    <Container>
      <Elements.Description>
        <Elements.Rank>
          <p>rank</p>
        </Elements.Rank>
        <Elements.Name>
          <p style={{ marginLeft: "1.5rem" }}>name</p>
        </Elements.Name>
        <Elements.Price>
          <p>price</p>
        </Elements.Price>
        <Elements.Change24 style={{ fontWeight: "unset" }}>
          24hs
        </Elements.Change24>
        <Elements.MarketCap>market cap</Elements.MarketCap>
        <Elements.Volume>volume</Elements.Volume>
        <Elements.TotalSupply>circulating supply</Elements.TotalSupply>
      </Elements.Description>

      <Elements.Ul>
        {coinsData &&
          coinsData.length &&
          coinsData.map((coin, index) => (
            <Elements.Li key={coin.id}>
              <Elements.Rank style={{ color: "gray" }}>
                #{index + 1}
              </Elements.Rank>
              <Elements.Name onClick={() => {}}>
                <Elements.Icon src={coin.image} />
                <Elements.CoinName>{coin.name}</Elements.CoinName>
                <Elements.CoinSymbol>{coin.symbol}</Elements.CoinSymbol>
              </Elements.Name>
              <Elements.Price>${coin.current_price}</Elements.Price>
              <Elements.Change24>
                {coin.price_change_percentage_24h < 0 ? (
                  <p style={{ color: "red" }}>
                    {coin.price_change_percentage_24h?.toFixed(2)}%
                  </p>
                ) : (
                  <p style={{ color: "green" }}>
                    +{coin.price_change_percentage_24h?.toFixed(2)}%
                  </p>
                )}
              </Elements.Change24>
              <Elements.MarketCap>
                ${coin.market_cap.toLocaleString()}
              </Elements.MarketCap>
              <Elements.Volume>
                ${coin.total_volume.toLocaleString()}
              </Elements.Volume>
              <Elements.TotalSupply>
                {coin.circulating_supply.toLocaleString()}
                &nbsp;
                {coin.symbol}
              </Elements.TotalSupply>
            </Elements.Li>
          ))}
      </Elements.Ul>
    </Container>
  );
};

export default Home;
