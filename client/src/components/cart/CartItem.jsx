import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch} from 'react-redux'
import { cartActions } from '../../redux/cart/cartSlice'


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
    <div className="">
        <div className="">
            <img src={product_image} alt="" />
        </div>
        <div className="">
            <h3>{product_name}</h3>
            <div>
                <span>Price: ${price}</span>
            </div>
            <div className="">
                <div className="">
                    <button onClick={() => dispatch(cartActions.setSubstractQuantity(id))}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => dispatch(cartActions.setAddQuantity(id))}>+</button>
                </div>
                <RiDeleteBinLine 
                className=""
                onClick={() => dispatch(cartActions.deleteProduct(id))}
                />
            </div>
        </div>
        
        <div className="">
            <span>{total}</span>
        </div>
    </div>
  )
}
