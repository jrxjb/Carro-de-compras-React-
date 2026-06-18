import GetUrl from "./products/products"
import { useEffect, useState } from "react";
export default function App(){

const [seachByCa,SetSeachByCa]=useState("all")
const [category,serCategory] =useState("")
const [priceCategory,SetPriceCategory] = useState("all")
const [addToCar,SetAddToCar] = useState("none")
const [renderAddToCar,setRenderAddToCar] = useState([])
const [cantidad,SetCantidad] = useState(0)

function categorySeach(){
SetSeachByCa(!seachByCa)
}


//añadir al carrito 

function handleAddToCar(producto){
const existe = renderAddToCar.some((item)=>item.id==producto.id)
if(existe)return
setRenderAddToCar([...renderAddToCar,{...producto,cantidadItems:1}])
}


function handleRemovetoCar(id){
const NewToRemove = renderAddToCar.filter ( (item)=> item.id !==id)

setRenderAddToCar(NewToRemove)
SetCantidad(0)
}

function handleAddMore(id){
setRenderAddToCar( renderAddToCar.map((item)=>item.id==id?
{...item,cantidadItems:item.cantidadItems+1}:item))
}
function handleLess(id){
setRenderAddToCar( renderAddToCar.map((item)=>item.id==id && item.cantidadItems>1?
{...item,cantidadItems:item.cantidadItems-1}:item))
}

	 return(
<>
		<header>
<section>
		<button onClick={()=>{SetSeachByCa("electronics")}}>Electronicos</button>
		<button onClick={()=>{SetSeachByCa("women's clothing")}}>women's</button>
		<button onClick={()=>{SetSeachByCa("jewelery")}}>jewelery</button>
		<button onClick={()=>{SetSeachByCa("men's clothing")}}>Men's</button>
		<button onClick={()=>{SetSeachByCa("all")}}>All</button>
</section>
<section>
		<button onClick={()=>{SetPriceCategory(10) }}>10 or less</button>
		<button onClick={()=>{SetPriceCategory(50) }}>50 or less</button>
		<button onClick={()=>{SetPriceCategory(100) }}>100 or less</button>
		<button onClick={()=>{SetPriceCategory(200) }}>200 or less</button>
		<button onClick={()=>{SetPriceCategory(500) }}>500 or less</button>
		<button onClick={()=>{SetPriceCategory(1000) }}>1000 or less</button>
		<button onClick={()=>{SetPriceCategory("all") }}>All price</button>
</section>
		</header>
		<section>
				<section>
					<h2>Carrito</h2>
						{renderAddToCar.map((item,index) => {
							return(
								<section key={index}>
									{item.title}
									<img src={item.image} alt="" />
									<button onClick={()=>handleRemovetoCar(item.id)} >Eliminar</button>
									<p>Cantidad de productos añadidos {item.cantidadItems}</p>
									<button onClick={()=>handleAddMore(item.id)}> Añadir</button>
									<button onClick={()=>handleLess(item.id)}> Menos </button>
								</section>)
						})}
				</section>
				<GetUrl filter={seachByCa} price={priceCategory} alHacerClickToAdd={handleAddToCar} >
				
				</GetUrl>
		</section>

</>)
}
