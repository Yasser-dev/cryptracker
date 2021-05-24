import React from "react";
import { useHistory } from "react-router";
import * as Elements from "./CryptoTableElements";
const CryptoTable = ({ coinsData, page, itemsPerPage }) => {
  const history = useHistory();
  return (
    <>
      <Elements.Description>
        <Elements.Number>
          <p>No.</p>
        </Elements.Number>
        <Elements.Name>
          <p style={{ marginLeft: "1.5rem" }}>Name</p>
        </Elements.Name>
        <Elements.Price>
          <p>Price</p>
        </Elements.Price>
        <Elements.Change24 style={{ fontWeight: "unset" }}>
          24Hrs
        </Elements.Change24>
        <Elements.MarketCap>Market Cap</Elements.MarketCap>
        <Elements.Volume>Volume</Elements.Volume>
        <Elements.TotalSupply>Supply</Elements.TotalSupply>
      </Elements.Description>

      <Elements.Ul>
        {coinsData &&
          coinsData.length &&
          coinsData.map((coin, index) => (
            <Elements.Li
              key={coin.id}
              onClick={() => {
                history.push(`/currencies/${coin.id}`);
              }}
            >
              <Elements.Number style={{ color: "gray" }}>
                #{index + 1 + (page - 1) * itemsPerPage}
              </Elements.Number>
              <Elements.Name onClick={() => {}}>
                <Elements.Icon src={coin.image} />
                <Elements.CoinName>{coin.name}</Elements.CoinName>
                <Elements.CoinSymbol>{coin.symbol}</Elements.CoinSymbol>
              </Elements.Name>
              <Elements.Price>
                $
                {coin.current_price
                  ? coin.current_price >= 1000
                    ? coin.current_price.toLocaleString()
                    : coin.current_price
                  : 0}
              </Elements.Price>
              <Elements.Change24>
                {coin.price_change_percentage_24h < 0 ? (
                  <p style={{ color: "red" }}>
                    {coin.price_change_percentage_24h
                      ? coin.price_change_percentage_24h?.toFixed(2)
                      : 0}
                    %
                  </p>
                ) : (
                  <p style={{ color: "green" }}>
                    +
                    {coin.price_change_percentage_24h
                      ? coin.price_change_percentage_24h?.toFixed(2)
                      : 0}
                    %
                  </p>
                )}
              </Elements.Change24>
              <Elements.MarketCap>
                ${coin.market_cap ? coin.market_cap?.toLocaleString() : 0}
              </Elements.MarketCap>
              <Elements.Volume>
                ${coin.total_volume ? coin.total_volume?.toLocaleString() : 0}
              </Elements.Volume>
              <Elements.TotalSupply>
                {coin.circulating_supply
                  ? coin.circulating_supply?.toLocaleString()
                  : 0}
                &nbsp;
                {coin.symbol.toUpperCase()}
              </Elements.TotalSupply>
            </Elements.Li>
          ))}
      </Elements.Ul>
    </>
  );
};

export default CryptoTable;
