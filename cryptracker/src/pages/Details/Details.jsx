import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import Loader from "react-spinners/ClipLoader";
import { Container } from "../../components/Shared";
import * as DetailsElements from "./DetailsElements";
import axios from "axios";

const Details = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [coinDetails, setCoinDetails] = useState();
  const [chartData, setChartData] = useState();

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/v3/coins/${match.params.id}/`).then((res) => {
      setCoinDetails(res.data);
      axios
        .get(
          `/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=30`
        )
        .then((res) => {
          setChartData(res.data);
          setLoading(false);
        });
    });
    return () => {};
  }, [match]);
  console.log("COINDETAILS", coinDetails);
  return loading === true ? (
    <Container>
      <Loader color="white" size="6rem" />
    </Container>
  ) : (
    <DetailsElements.Container>
      <DetailsElements.Top>
        <DetailsElements.FirstHalf>
          <DetailsElements.Path>
            Cryptocurrencies {"›"} {coinDetails.name}
          </DetailsElements.Path>
        </DetailsElements.FirstHalf>
        <DetailsElements.SecondHalf>
          <DetailsElements.TopPrice>
            {coinDetails.name} price ({coinDetails.symbol})
          </DetailsElements.TopPrice>
        </DetailsElements.SecondHalf>
      </DetailsElements.Top>
      <DetailsElements.Middle>
        <DetailsElements.FirstHalf>
          <DetailsElements.Icon src={coinDetails.image.large} />
          <DetailsElements.Name>{coinDetails.name}</DetailsElements.Name>
          <DetailsElements.Symbol>
            ({coinDetails.symbol})
          </DetailsElements.Symbol>
        </DetailsElements.FirstHalf>
        <DetailsElements.SecondHalf>
          <DetailsElements.Price>
            $
            {coinDetails.market_data.current_price.usd
              ? coinDetails.market_data.current_price.usd >= 1000
                ? coinDetails.market_data.current_price.usd.toLocaleString()
                : coinDetails.market_data.current_price.usd
              : 0}
          </DetailsElements.Price>
          {coinDetails.market_data.price_change_24h < 0 ? (
            <DetailsElements.Change24 style={{ backgroundColor: "red" }}>
              <AiFillCaretDown />
              {coinDetails.market_data
                .market_cap_change_percentage_24h_in_currency.usd
                ? coinDetails.market_data.market_cap_change_percentage_24h_in_currency.usd?.toFixed(
                    2
                  )
                : 0}
              %
            </DetailsElements.Change24>
          ) : (
            <DetailsElements.Change24 style={{ backgroundColor: "green" }}>
              <AiFillCaretUp />
              {coinDetails.market_data
                .market_cap_change_percentage_24h_in_currency.usd
                ? coinDetails.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  )
                : 0}
              %
            </DetailsElements.Change24>
          )}
        </DetailsElements.SecondHalf>
      </DetailsElements.Middle>
      <DetailsElements.Bottom>
        <DetailsElements.FirstHalf>
          <DetailsElements.Random>
            <FaExternalLinkAlt />
            <DetailsElements.Link
              href={
                coinDetails.links.homepage[0].length > 0
                  ? coinDetails.links.homepage[0]
                  : coinDetails.links.homepage[1]
              }
              target="parent"
            >
              {coinDetails.links.homepage[0].length > 0
                ? coinDetails.links.homepage[0]
                : coinDetails.links.homepage[1]}
            </DetailsElements.Link>
          </DetailsElements.Random>
        </DetailsElements.FirstHalf>
      </DetailsElements.Bottom>
    </DetailsElements.Container>
  );
};

export default Details;
