import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import * as DetailsHeaderElements from "./DetailsHeaderElements";
const DetailsHeader = ({ coinDetails }) => {
  return (
    <DetailsHeaderElements.Container>
      <DetailsHeaderElements.Top>
        <DetailsHeaderElements.FirstHalf>
          <DetailsHeaderElements.Path>
            Cryptocurrencies {"›"} {coinDetails.name}
          </DetailsHeaderElements.Path>
        </DetailsHeaderElements.FirstHalf>
        <DetailsHeaderElements.SecondHalf>
          <DetailsHeaderElements.TopPrice>
            {coinDetails.name} price ({coinDetails.symbol})
          </DetailsHeaderElements.TopPrice>
        </DetailsHeaderElements.SecondHalf>
      </DetailsHeaderElements.Top>
      <DetailsHeaderElements.Middle>
        <DetailsHeaderElements.FirstHalf>
          <DetailsHeaderElements.Icon src={coinDetails.image.large} />
          <DetailsHeaderElements.Name>
            {coinDetails.name}
          </DetailsHeaderElements.Name>
          <DetailsHeaderElements.Symbol>
            ({coinDetails.symbol})
          </DetailsHeaderElements.Symbol>
        </DetailsHeaderElements.FirstHalf>
        <DetailsHeaderElements.SecondHalf>
          <DetailsHeaderElements.Price>
            $
            {coinDetails.market_data.current_price.usd
              ? coinDetails.market_data.current_price.usd >= 1000
                ? coinDetails.market_data.current_price.usd.toLocaleString()
                : coinDetails.market_data.current_price.usd
              : 0}
          </DetailsHeaderElements.Price>
          {coinDetails.market_data.price_change_24h < 0 ? (
            <DetailsHeaderElements.Change24 style={{ backgroundColor: "red" }}>
              <AiFillCaretDown />
              {coinDetails.market_data
                .market_cap_change_percentage_24h_in_currency.usd
                ? coinDetails.market_data.market_cap_change_percentage_24h_in_currency.usd?.toFixed(
                    2
                  )
                : 0}
              %
            </DetailsHeaderElements.Change24>
          ) : (
            <DetailsHeaderElements.Change24
              style={{ backgroundColor: "green" }}
            >
              <AiFillCaretUp />
              {coinDetails.market_data
                .market_cap_change_percentage_24h_in_currency.usd
                ? coinDetails.market_data.market_cap_change_percentage_24h_in_currency.usd.toFixed(
                    2
                  )
                : 0}
              %
            </DetailsHeaderElements.Change24>
          )}
        </DetailsHeaderElements.SecondHalf>
      </DetailsHeaderElements.Middle>
      <DetailsHeaderElements.Bottom>
        <DetailsHeaderElements.FirstHalf>
          <DetailsHeaderElements.Random>
            <FaExternalLinkAlt />
            <DetailsHeaderElements.Link
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
            </DetailsHeaderElements.Link>
          </DetailsHeaderElements.Random>
        </DetailsHeaderElements.FirstHalf>
      </DetailsHeaderElements.Bottom>
    </DetailsHeaderElements.Container>
  );
};

export default DetailsHeader;
