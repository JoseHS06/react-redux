import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/thunks/product.thuks";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Loader } from "./components/Loader";
import { Product } from "./components/Product";

function App() {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="container">
      <Navbar></Navbar>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="row">
          {products.map(({ id, nombre, precio }) => (
            <Product key={id} nombre={nombre} precio={precio}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
