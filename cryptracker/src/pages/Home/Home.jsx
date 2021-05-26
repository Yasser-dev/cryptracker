import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Loader from "react-spinners/ClipLoader";
import "./home.styles.css";
import {
  PaginationContainer,
  SelectItemsPerPage,
  ItemsPerPageContainer,
  ToolBarContainer,
  SearchContainer,
  Search,
  SearchIconContainer,
  SearchResultsContainer,
  SearchResult,
  SearchElements,
} from "./HomeElements";
import { BsSearch } from "react-icons/bs";
import { Container } from "../../components/Shared";
import Pagination from "react-js-pagination";
import CryptoTable from "../../components/CryptoTable/CryptoTable";
import { useHistory } from "react-router";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const loadData = useCallback(async () => {
    try {
      let coinsResponse = await axios.get(
        "/api/v3/coins/list?include_platform=false"
      );

      setCoins(coinsResponse.data);
      let dataResponse = await axios.get(
        `/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${page}&sparkline=false`
      );

      setCoinsData(dataResponse.data);
      setLoading(false);
    } catch (error) {
      return history.push("/404");
    }
  }, [history, page, itemsPerPage]);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  const onSearchSubmit = (event) => {
    event.preventDefault();

    history.push({
      pathname: `/search/${event.target[0].value}`,
      state: { coins: coins },
    });
  };

  return loading === true ? (
    <Container>
      <Loader color="#e2e2e2" size="6rem" />
    </Container>
  ) : (
    <Container>
      <ToolBarContainer>
        <SearchElements>
          <SearchContainer onSubmit={onSearchSubmit}>
            <Search
              type="text"
              placeholder="Search"
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <SearchIconContainer>
              <BsSearch size="1.5em" />
            </SearchIconContainer>
          </SearchContainer>
          {searchQuery.length > 0 && (
            <SearchResultsContainer>
              {coins
                .filter((coin) => coin.id.includes(searchQuery))
                .map((match) => (
                  <SearchResult key={match.id} to={`currencies/${match.id}`}>
                    {match.name}
                  </SearchResult>
                )) ?? <p>No results</p>}
            </SearchResultsContainer>
          )}
        </SearchElements>
        <ItemsPerPageContainer>
          <label htmlFor="itemsPerPage">Items per Page</label>
          <SelectItemsPerPage
            placeholder="Items Per Page"
            name="itemsPerPage"
            defaultValue={itemsPerPage}
            onChange={(event) => {
              setPage(1);
              setItemsPerPage(Number.parseInt(event.target.value));
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
            <option value={250}>250</option>
          </SelectItemsPerPage>
        </ItemsPerPageContainer>
      </ToolBarContainer>
      <CryptoTable
        coinsData={coinsData}
        page={page}
        itemsPerPage={itemsPerPage}
      />
      <PaginationContainer>
        <Pagination
          className="pagination"
          activePage={page}
          itemsCountPerPage={itemsPerPage}
          totalItemsCount={coins.length}
          onChange={(val) => setPage(val)}
          nextPageText="›"
          prevPageText="‹"
          itemClass="page-item"
          linkClass="page-link"
          linkClassNext="control"
          linkClassPrev="control"
          linkClassFirst="control"
          linkClassLast="control"
          pageRangeDisplayed={4}
        />
      </PaginationContainer>
    </Container>
  );
};

export default Home;
