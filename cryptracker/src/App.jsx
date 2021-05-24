import { useEffect, useState } from "react";
import Loader from "react-spinners/ClipLoader";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import axios from "axios";
import { Container } from "./components/Shared";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get("/api/v3/coins/list?include_platform=false").then((res) => {
      setCoins(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {loading ? (
        <Container>
          <Loader color="white" size="6rem" />
        </Container>
      ) : (
        <Home coinsCount={coins.length} />
      )}
    </div>
  );
}

export default App;
