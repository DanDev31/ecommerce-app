import { useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/cart/cartSlice'
import styles from './cartItem.module.scss'


export const CartItem = ({
    id,
    product_name,
    product_image,
    price,
    quantity,
    total
}) => {
    
  const dispatch = useDispatch()



  return (
    <div className={styles.cart_product}>
        <div className={styles.cart_product_image}>
            <img src={product_image} alt="" />
        </div>
        <div className={styles.cart_product_info}>
            <h3>{product_name}</h3>
            <div>
                <span>Price: ${price}</span>
            </div>
            <div className={styles.quantity_container}>
                <div className={styles.quantity_buttons_container}>
                    <button onClick={() => dispatch(cartActions.setSubstractQuantity(id))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(cartActions.setAddQuantity(id))}>+</button>
                </div>
                <RiDeleteBinLine 
                className={styles.delete_product}
                onClick={() => dispatch(cartActions.deleteProduct(id))}
                />
            </div>
        </div>
        
        <div className={styles.cart_product_total}>
            <span>{total}</span>
        </div>
    </div>
  )
}
