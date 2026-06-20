export default function Car({renderAddToCar,handleRemovetoCar,handleAddMore,handleLess}){

    return(
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
    )
}
