import { useState } from "react";
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [id, setId]= useState("");

   const handleChange = (event)=>{
      setId(event.target.value);
   };

return (
   <div className={style.searchbar}>
      <input type="search" onChange={handleChange}/>
      <button onClick={() => props.onSearch(id)}>Agregar</button> 
   </div>
   );
}
