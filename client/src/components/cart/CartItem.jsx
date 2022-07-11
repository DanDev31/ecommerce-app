import { useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/cart/cartSlice'
import styles from './cartItem.module.scss'


export const CartItem = ({
    id,
    product_name,
    product_image,
    price,
    productTotal,
    setProductTotal 
}) => {
    
    // const [ quantity, setQuantity ] = useState(0)
    const dispatch = useDispatch()
    // const handleAddQuantity = () => {
    //     setQuantity(quantity + 1)
    //     setProductTotal(productTotal+=price)
    // }

    // const handleSubstractQuantity = () => {
    //     setQuantity(quantity - 1)
    //     setProductTotal(productTotal-=price)
    // }
    


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
                    <span></span>
                    <button onClick={() => dispatch(cartActions.setAddQuantity(id))}>+</button>
                </div>
                <RiDeleteBinLine />
            </div>
        </div>
        
        <div className={styles.cart_product_total}>
            <span>{productTotal}</span>
        </div>
    </div>
  )
}
