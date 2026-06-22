import { useEffect, useState } from "react";
import "./products.css"
export default function GetUrl({filter,price,children,alHacerClickToAdd}){
const [data, setData] = useState([])


useEffect(()=>{
    async function getData(){
        const res = await fetch('https://fakestoreapi.com/products')
        const json = await  res.json()
        setData(json)
    }
    getData()
},[])

const dataFiltrada= filter=="all"? data: data.filter((item)=>item.category ===filter) 

//Filtrar por precio 

const dataPrice = price =="all"? dataFiltrada : dataFiltrada.filter((item)=>item.price <= price)


return(
<div className="lobby-up">  
<div className="lobby"> 
    {dataPrice.map((producto)=>{
        return(
            <section key={producto.id} >
                  <img src={producto.image} alt={`imagen from ${producto.title}`} />
                <button onClick={()=>alHacerClickToAdd(producto)}> <h1>Añadir al carrito </h1></button>
                <p> Categoria {producto.category}</p>
                <p>Titulo {producto.title}</p>
                <p>Precio {producto.price}$</p>
                <p>Descripcion {producto.description}</p>
                <p>Rating {producto.rating.rate}</p>
                <p> Count del producto {producto.rating.count}</p>
            </section>
        )
    })} 
</div>
</div>  
) 

}


