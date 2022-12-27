import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { MatchesContext } from "./context/MatchesContext";
import { Detail } from "./pages/Detail";
import { Home } from './pages/Home';

function App() {
  const matchContext = useContext(MatchesContext);
  
  const getData = () => {
    fetch('data/matches.json', { headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' } })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        matchContext.setData(data);
      });
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
