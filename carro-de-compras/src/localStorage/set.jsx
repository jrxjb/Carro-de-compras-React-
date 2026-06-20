import { useEffect } from "react";

export default function useSetLocal({renderAddToCar}){
    

useEffect(()=>{
localStorage.setItem("carroDecomprasJson",JSON.stringify(renderAddToCar));
},[renderAddToCar])

}

