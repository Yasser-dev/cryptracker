import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "react-spinners/ClipLoader";
import "./home.styles.css";
import {
  PaginationContainer,
  SelectItemsPerPage,
  ItemsPerPageContainer,
} from "./HomeElements";
import { Container } from "../../components/Shared";
import Pagination from "react-js-pagination";
import CryptoTable from "../../components/CryptoTable/CryptoTable";

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/v3/coins/list?include_platform=false").then((res) => {
      setCoins(res.data);
      axios
        .get(
          `/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${itemsPerPage}&page=${page}&sparkline=false`
        )
        .then((res) => {
          setCoinsData(res.data);
          setLoading(false);
        });
    });
  }, [coins.length, page, itemsPerPage]);

  console.log("LOADING", loading);
  return loading === true ? (
    <Container>
      <Loader color="white" size="6rem" />
    </Container>
  ) : (
    <Container>
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
          itemClass="page-item"
          linkClass="page-link"
        />
      </PaginationContainer>
    </Container>
  );
};

export default Home;
