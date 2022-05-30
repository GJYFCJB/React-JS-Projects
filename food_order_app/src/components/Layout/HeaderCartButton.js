import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const [btnIsHigh, setBtnIsHigh] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
        return curNumber + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnClass = `${classes.button} ${btnIsHigh ? classes.bump : ''}`;

    useEffect(() => {
        if(cartCtx.items.length === 0){
            return;
        }
        setBtnIsHigh(true);

        const timer = setTimeout(() => {
            setBtnIsHigh(false);
        },300);

        return () => {
            clearTimeout(timer);
        }
    },[items]);

    return<button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;