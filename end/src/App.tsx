import "./styles.css";
import Product1152 from "./components/st2/Product1152";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/NavBarLayout";
import CreateItems from "./components/st2/AddToCart";
import Stopwatch from "./components/st2/Stopwatch";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/cart" element={<Product1152 />} />
          <Route path="/createItems" element={<CreateItems />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
        </Route>
      </Routes>
    </div>
  );
}
