
export default function BotonesDeGet({SetSeachByCa,SetPriceCategory}){
    
    return(
    <section>
    <section className="">
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
</section>
)
}
