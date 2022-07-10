
import { useState } from 'react'
import styles from './cartItem.module.scss'


export const CartItem = ({
    id,
    product_name,
    product_image,
    price,
    
}) => {
    
    const [ quantity, setQuantity ] = useState(0)



  return (
    <div className={styles.product}>
        <div className={styles.product_image}>
            <img src={product_image} alt="" />
        </div>
        <div className={styles.product_info}>
            <h3>{product_name}</h3>
        </div>
        <div>
            <span>{price}</span>
        </div>
        <div className={styles.quantity_buttons_container}>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
        </div>
        <div className={styles.total}>
            <span>2.00</span>
        </div>
    </div>
  )
}
