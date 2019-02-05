import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="bread-cheese"/>
            <BurgerIngredient type="bread-meat"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;