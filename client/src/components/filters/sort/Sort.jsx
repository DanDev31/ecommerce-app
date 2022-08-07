import React from 'react'
import { useDispatch } from 'react-redux'
import { produtsByCategoryActions } from '../../../redux/products/productsByCategorySlice'

export const Sort = () => {

  const dispatch = useDispatch()
  
  const handleSelectChange = ({target}) => {
    dispatch(produtsByCategoryActions.orderByPrice(target.value))
  }

  return (
    <div>
        <select name="" id="" onChange={ handleSelectChange }>
            <option value="">Order by</option>
            <option value="high">Higher price</option>
            <option value="low">Lower Price</option>
        </select>
    </div>
  )
}
