import axios from "axios";
import { useState, useEffect } from "react";

import "./home.styles.css";
import { PaginationContainer } from "./HomeElements";
import { Container } from "../../components/Shared";
import Pagination from "react-js-pagination";
import CryptoTable from "../../components/CryptoTable/CryptoTable";

const Home = ({ pagesNo }) => {
  const [loading, setLoading] = useState(true);
  const [coinsData, setCoinsData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
      )
      .then((res) => setCoinsData(res.data));
    setLoading(false);
  }, [page]);

  console.log(coinsData, pagesNo);
  return loading ? (
    <Container>loading..</Container>
  ) : (
    <Container>
      <CryptoTable coinsData={coinsData} />
      <PaginationContainer>
        <Pagination
          className="pagination"
          activePage={page}
          itemsCountPerPage={10}
          totalItemsCount={pagesNo * 10}
          onChange={(val) => setPage(val)}
          itemClass="page-item"
          linkClass="page-link"
        />
      </PaginationContainer>
    </Container>
  );
};

export default Home;
