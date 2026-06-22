import GetUrl from "./products/products"
import { useEffect, useState } from "react";
import Car from "./car/car.jsx"
import  useSetLocal  from "./localStorage/set.jsx";
import BotonesDeGet from "./products/botones.jsx"
import "./app.css"
export default function App(){
	
const [seachByCa,SetSeachByCa]=useState("all")
const [category,serCategory] =useState("")
const [priceCategory,SetPriceCategory] = useState("all")
const [addToCar,SetAddToCar] = useState("none")
const [renderAddToCar,setRenderAddToCar] = useState(()=>{
	const miCarro = localStorage.getItem("carroDecomprasJson");
	return miCarro? JSON.parse(miCarro):[] })
const [cantidad,SetCantidad] = useState(0)

useSetLocal({renderAddToCar})

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
<section >
	<header>
<BotonesDeGet SetPriceCategory={SetPriceCategory} SetSeachByCa={SetSeachByCa}/>
	</header>
	<section className="car-and-page">
				<GetUrl filter={seachByCa} price={priceCategory} alHacerClickToAdd={handleAddToCar} >
				</GetUrl>
				{ renderAddToCar.length > 0  && <Car renderAddToCar={renderAddToCar} handleRemovetoCar={handleRemovetoCar} 
				handleAddMore={handleAddMore} handleLess={handleLess}	/>  }

	</section>
</section>

</>)
}
