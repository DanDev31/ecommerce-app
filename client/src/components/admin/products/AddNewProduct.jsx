import React from 'react'
import { useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import axios from 'axios'

export const AddNewProduct = () => {

  const [ selectCategory, setSelectCategory ] = useState('')

  const [ formValues, handleInputChange ] = useForm({
    product_name:'',
    description:'',
    product_image:'',
    price:0,
    stock:0
  })

  const {  product_name, description, product_image, price, stock } = formValues

 
  const handleSelectChange = (e) => {
    setSelectCategory(e.target.value)
  }


  const createNewProduct = async() => {
    try {
      await axios.post('http://localhost:3001/products/newproduct', {
        ...formValues,
        category:selectCategory
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewProduct()
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Product Name:</label>
            <input type="text" name="product_name" value={product_name} onChange={handleInputChange}/>
            <label>Image Url:</label>
            <input type="text" name="product_image" value={product_image} onChange={handleInputChange}/>
            <label>Price:</label>
            <input type="number"name="price" value={price} onChange={handleInputChange} />
            <label>Stock:</label>
            <input type="number" name="stock" value={stock} onChange={handleInputChange}/>
            <label>Description:</label>
            <textarea cols="5" rows="5" name="description" value={description} onChange={handleInputChange}></textarea>
            <label>Select a category:</label>
            <select name="" id="" onChange={(e) => handleSelectChange(e)}>
            <option value="" default>-----</option>
              <option value="PC Gamers">PC Gamers</option>
              <option value="Ram Memory">Ram Memory</option>
              <option value="Hard Disks & SSD">Hard Disks & SSD</option>
              <option value="CPU">CPU</option>
              <option value="GPU">CPU</option>
              <option value="Motherboards">CPU</option>
              <option value="Power Supply">Power Supply</option>
              <option value="Accesories">Accesories</option>
            </select>

            <button type='submit'>Create</button>
            <button type='submit'>Cancel</button>

        </form>
    </div>
  )
}
