import React,{useEffect} from 'react'
import ProductComponent from '../components/ProductComponent'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../redux/actions/productActions'
import '../App.css'

export default function ProductList() {
  const products = useSelector(state=>state)
  const dispatch = useDispatch();

  console.log(products)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  console.log(products)
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}
