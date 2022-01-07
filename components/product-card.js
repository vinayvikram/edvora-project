import Image from "next/image";
import styles from "../styles/Card.module.css";

const ProductCard = ({
  product_name,
  brand_name,
  image,
  price,
  discription,
  address,
  date,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.image}>
          <Image alt="image" src={image} width="80px" height="70px" />
        </div>
        <div className={styles.column}>
          <h4 className={styles.bold}>{product_name}</h4>
          <p className={styles.light}>{brand_name}</p>
          <p className={styles.bold}> Rs. {price}</p>
        </div>
      </div>
      <div className={styles.row}>
        <p className={styles.light}>
          {address.city}, {address.state}
        </p>
        <p className={styles.light}>Date: {date.substr(0, 10)}</p>
      </div>
      <div className={styles.row}>
        <p className={styles.light}>Description:- {discription}</p>{" "}
      </div>
    </div>
  );
};

export default ProductCard;
