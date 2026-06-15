import { useEffect, useState } from "react";

export default function GetUrl(){
const [data, setData] = useState([])

useEffect(()=>{
    async function getData(){
        const res = await fetch('https://fakestoreapi.com/products')
        const json = await  res.json()
        setData(json)
    }
    getData()
},[])
return(
<div> 
    {data.map((producto)=>{
        return(
            <p key={producto.id}>{producto.title}</p>
        )
    })} 
</div>) 
}
