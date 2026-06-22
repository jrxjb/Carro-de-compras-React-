import "./botones.css"
export default function BotonesDeGet({SetSeachByCa,SetPriceCategory}){
    
    return(
    <section className="div-botons">
    <section className="botons-category">
        <p  >By category</p>
        <button className="botons" onClick={()=>{SetSeachByCa("electronics")}}>Electronicos</button>
        <button className="botons" onClick={()=>{SetSeachByCa("women's clothing")}}>women's</button>
        <button className="botons" onClick={()=>{SetSeachByCa("jewelery")}}>jewelery</button>
        <button className="botons" onClick={()=>{SetSeachByCa("men's clothing")}}>Men's</button>
        <button className="botons" onClick={()=>{SetSeachByCa("all")}}>All</button>
</section>
<section  className="botons-prices">
        <p >By price</p>
        <button className="botons" onClick={()=>{SetPriceCategory(10) }}>10 or less</button>
        <button className="botons" onClick={()=>{SetPriceCategory(50) }}>50 or less</button>
        <button className="botons" onClick={()=>{SetPriceCategory(100) }}>100 or less</button>
        <button className="botons" onClick={()=>{SetPriceCategory(200) }}>200 or less</button>
        <button className="botons" onClick={()=>{SetPriceCategory(500) }}>500 or less</button>
        <button className="botons" onClick={()=>{SetPriceCategory(1000) }}>1000 or less</button>
        <button className="botons" onClick={()=>{SetPriceCategory("all") }}>All price</button>
</section>
</section>
)
}
