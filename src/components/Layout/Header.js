import styles from "./Header.module.css";
import mealsImage from '../../assets/meals.jpg'
import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
      </header>
      <div class={styles['main-image']}>
        <img src={mealsImage} alt="A table of full of food"/>
      </div>
    </Fragment>
  );
};

export default Header;
