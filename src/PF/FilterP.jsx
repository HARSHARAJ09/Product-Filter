import React, { useEffect, useState } from 'react'
import './Filter.css'
function FilterP() {
    const[data,setData]=useState([])
    console.log(data)
  const [items,setItems]=useState(data)
    useEffect(()=>{
        let fetchData=async()=>{
                 try{
                  let response= await fetch('https://fakestoreapi.com/products')
                 let res=await response.json()
                 setData(res)
                 }
                 catch(error){
                    console.log("failed to fetch the data ",error)
                 }
        }
        fetchData()
    },[])
    const FilterItems=(catItem)=>{
     const UpdatedItem =data.filter((curItem)=>{
      return curItem.category===catItem
        })
        setItems(UpdatedItem)
    }
  return (
    <div >
        <div className='container text-center mt-5'>
      <h1>Example for Filtering the products</h1>
<button type="button" class="btn btn-success m-3"
onClick={()=>setItems(data)}>All Products</button>
<button type="button" class="btn btn-success m-3"
onClick={()=>FilterItems("men's clothing")}>Men's clothing</button>
<button type="button" class="btn btn-success m-3"
onClick={()=>FilterItems("jewelery")}>Jewelery</button>
<button type="button" class="btn btn-success m-3"
onClick={()=>FilterItems("electronics")}>Electronics</button>
<button type="button" class="btn btn-success m-3"
onClick={()=>FilterItems("women's clothing")}>Women's clothing</button>
</div>
<div className='row'>
   {items.map((ele,index)=>{
 return(
    <div className='col-md-3'>
        <div class="card">
  <img src={ele.image} class="card-img-top img-fuild" alt="..."/>
  <div class="card-body">
    <p class="card-text">{ele.title.substring(0,15)}</p>
    <a href="#" class="btn btn-primary">{ele.category}</a>
  </div>
</div>
        </div>
 )
   })}
</div>
    </div>
  )
}

export default FilterP