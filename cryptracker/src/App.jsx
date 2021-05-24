import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import axios from "axios";

function App() {
  const [pagesNo, setPagesNo] = useState(1);
  const [coins, setCoins] = useState([]);

  const loadCoins = async () => {
    const { data } = await axios.get(
      "/api/v3/coins/list?include_platform=false"
    );
    setCoins(data);
  };

  useEffect(() => {
    loadCoins();
    setPagesNo(Math.floor(coins.length / 100));
  }, [coins.length]);

  return (
    <div className="App">
      <Header />
      <Home pagesNo={pagesNo} />
    </div>
  );
}

export default App;
