const filterProducts = (productList, product, state, city) => {
  let product_names = new Set();
  let states = new Set();
  let cities = new Set();
  let product_dict = {};

  if (product !== "Products" && state === "State" && city === "City") {
    for (let p of productList) {
      if (p.brand_name === product) {
        product_names.add(p.brand_name);
        states.add(p.address.state);
        cities.add(p.address.city);

        if (p.brand_name in product_dict) {
          product_dict[p.brand_name].push(p);
        } else {
          product_dict[p.brand_name] = [p];
        }
      }
    }
  } else if (product === "Products" && state !== "State" && city === "City") {
    for (let p of productList) {
      states.add(p.address.state);

      if (p.address.state == state) {
        product_names.add(p.brand_name);
        cities.add(p.address.city);

        if (p.brand_name in product_dict) {
          product_dict[p.brand_name].push(p);
        } else {
          product_dict[p.brand_name] = [p];
        }
      }
    }
  } else if (product === "Products" && state === "State" && city !== "City") {
    for (let p of productList) {
      states.add(p.address.state);
      cities.add(p.address.city);

      if (p.address.city == city) {
        product_names.add(p.brand_name);

        if (p.brand_name in product_dict) {
          product_dict[p.brand_name].push(p);
        } else {
          product_dict[p.brand_name] = [p];
        }
      }
    }
  } else if (product !== "Products" && state !== "State" && city === "City") {
    for (let p of productList) {
      if (p.brand_name === product) {
        states.add(p.address.state);

        if (p.address.state === state) {
          product_names.add(p.brand_name);
          cities.add(p.address.city);

          if (p.brand_name in product_dict) {
            product_dict[p.brand_name].push(p);
          } else {
            product_dict[p.brand_name] = [p];
          }
        }
      }
    }
  } else if (product !== "Products" && state === "State" && city !== "City") {
    for (let p of productList) {
      if (p.brand_name === product) {
        states.add(p.address.state);
        cities.add(p.address.city);

        if (p.address.city === city) {
          product_names.add(p.brand_name);

          if (p.brand_name in product_dict) {
            product_dict[p.brand_name].push(p);
          } else {
            product_dict[p.brand_name] = [p];
          }
        }
      }
    }
  } else if (product === "Products" && state !== "State" && city !== "City") {
    for (let p of productList) {
      states.add(p.address.state);

      if (p.address.state === state) {
        cities.add(p.address.city);

        if (p.address.city === city) {
          product_names.add(p.brand_name);

          if (p.brand_name in product_dict) {
            product_dict[p.brand_name].push(p);
          } else {
            product_dict[p.brand_name] = [p];
          }
        }
      }
    }
  } else if (product !== "Products" && state !== "State" && city !== "City") {
    for (let p of productList) {
      if (p.brand_name === product) {
        states.add(p.address.state);

        if (p.address.state == state) {
          cities.add(p.address.city);
          if (p.address.city === city) {
            product_names.add(p.brand_name);

            if (p.brand_name in product_dict) {
              product_dict[p.brand_name].push(p);
            } else {
              product_dict[p.brand_name] = [p];
            }
          }
        }
      }
    }
  } else {
    for (let p of productList) {
      product_names.add(p.brand_name);
      states.add(p.address.state);
      cities.add(p.address.city);

      if (p.brand_name in product_dict) {
        product_dict[p.brand_name].push(p);
      } else {
        product_dict[p.brand_name] = [p];
      }
    }
  }

  return [[...product_names], [...states], [...cities], product_dict];
};

export default filterProducts;
