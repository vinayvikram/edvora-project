import styles from "../styles/Home.module.css";
import ProductCard from "../components/product-card";
import Filters from "../components/filters";
import { useState } from "react";
import filterProducts from "../lib/filter_product";

export default function Home({
  all_products,
  all_product_names,
  states,
  cities,
  product_dict,
}) {
  const [myState, setState] = useState({
    product_names: JSON.parse(all_product_names),
    states: JSON.parse(states),
    cities: JSON.parse(cities),
    product_dict: JSON.parse(product_dict),
  });

  const handleFilter = (product, state, city) => {
    let [product_names, states, cities, product_dict] = filterProducts(
      all_products,
      product,
      state,
      city
    );

    if (product_names.length === 0) {
      [product_names, states, cities, product_dict] = filterProducts(
        all_products,
        "Products",
        "State",
        "City"
      );
      setState({
        product_names: product_names,
        states: states,
        cities: cities,
        product_dict: product_dict,
      });
      return [JSON.parse(all_product_names), [], states, cities];
    } else {
      setState({
        product_names: product_names,
        states: states,
        cities: cities,
        product_dict: product_dict,
      });

      return [JSON.parse(all_product_names), product_names, states, cities];
    }
  };

  const showFilter = () => {
    let filter = document.getElementById("filterColumn");
    filter.setAttribute("style", "display: flex;");
  };

  const hideFilter = () => {
    let filter = document.getElementById("filterColumn");
    filter.removeAttribute("style");
  };

  return (
    <div className={styles.home}>
      <div className={styles.filterColumn} id="filterColumn">
        <Filters
          product_names={myState.product_names}
          states={myState.states}
          cities={myState.cities}
          handleFilter={handleFilter}
        />
        <div className={styles.cutButton} onClick={hideFilter}>
          &times;
        </div>
      </div>
      <div className={styles.mainColumn}>
        <div>
          <h1 className={styles.h1}> Edvora</h1>
          <div className={styles.filterButton} onClick={showFilter}>
            &#9776;
          </div>
        </div>
        <h2 className={styles.h2}> Products</h2>
        {[...myState.product_names].map((p, index) => (
          <div className={styles.products} key={index}>
            <h3 className={styles.h3}>{p}</h3>
            <hr />
            <div className={styles.row}>
              {[...myState.product_dict[p]].map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://assessment-edvora.herokuapp.com/");
  const all_products = await res.json();

  let all_product_names_ = new Set();
  let states_ = new Set();
  let cities_ = new Set();
  let product_dict_ = {};

  for (let p of all_products) {
    all_product_names_.add(p.brand_name);
    states_.add(p.address.state);
    cities_.add(p.address.city);

    if (p.brand_name in product_dict_) {
      product_dict_[p.brand_name].push(p);
    } else {
      product_dict_[p.brand_name] = [p];
    }
  }

  const all_product_names = JSON.stringify([...all_product_names_]);
  const states = JSON.stringify([...states_]);
  const cities = JSON.stringify([...cities_]);
  const product_dict = JSON.stringify(product_dict_);

  return {
    props: {
      all_products,
      all_product_names,
      states,
      cities,
      product_dict,
    },
  };
}
