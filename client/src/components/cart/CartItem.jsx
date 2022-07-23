import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch} from 'react-redux'
import { cartActions } from '../../redux/cart/cartSlice'
import { CartProduct } from '../styles/CartItem'

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
    <CartProduct>
        <div className="">
            <img src={product_image} alt="" />
        </div>
        <div className='cart_product_second_child'>
          
                <p>{product_name}</p>
                <div>
                    <button onClick={() => dispatch(cartActions.setSubstractQuantity(id))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(cartActions.setAddQuantity(id))}>+</button>
                </div>
                <RiDeleteBinLine 
                className=""
                onClick={() => dispatch(cartActions.deleteProduct(id))}
                />
                <div>
                    <span>{price} USD</span>
                </div>
            
        </div>
        
        <div className="">
            <span>{total}</span>
        </div>
    </CartProduct>
  )
}
