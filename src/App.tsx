import { Routes, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Detail } from "./pages/Detail";
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
