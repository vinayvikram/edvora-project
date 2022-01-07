import styles from "../styles/Filters.module.css";
import { useState, useEffect } from "react";

const Filters = ({ product_names, states, cities, handleFilter }) => {
  const [myState, setState] = useState({
    productList: product_names,
    stateList: states,
    cityList: cities,
    defaultProduct: "Products",
    defaultState: "State",
    defaultCity: "City",
  });

  const handleChange = (e) => {
    let selectedProduct = document.getElementById("products").value;
    let selectedState = document.getElementById("state").value;
    let selectedCity = document.getElementById("city").value;

    let [all_product_names, product_names, states, cities] = handleFilter(
      selectedProduct,
      selectedState,
      selectedCity
    );

    if (product_names.length === 0) {
      selectedProduct = "Products";
      selectedState = "State";
      selectedCity = "City";
    }

    setState({
      productList: all_product_names,
      stateList: states,
      cityList: cities,
      defaultProduct: selectedProduct,
      defaultState: selectedState,
      defaultCity: selectedCity,
    });
  };

  return (
    <div className={styles.filters}>
      <h4>Filters</h4>
      <hr />

      <select
        name="products"
        id="products"
        className={styles.dropdown}
        onChange={handleChange}
        value={myState.defaultProduct}
      >
        <option key="Products" value="Products" id="Products">
          Products
        </option>
        {myState.productList.map((p) => (
          <option key={p} value={p} id={p}>
            {p}
          </option>
        ))}
      </select>
      <select
        name="state"
        id="state"
        className={styles.dropdown}
        onChange={handleChange}
        value={myState.defaultState}
      >
        <option key="State" value="State" id="State">
          State
        </option>
        {myState.stateList.map((p) => (
          <option key={p} value={p} id={p}>
            {p}
          </option>
        ))}
      </select>
      <select
        name="city"
        id="city"
        className={styles.dropdown}
        onChange={handleChange}
        value={myState.defaultCity}
      >
        <option key="City" value="City" id="City">
          City
        </option>
        {myState.cityList.map((p) => (
          <option key={p} value={p} id={p}>
            {p}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
