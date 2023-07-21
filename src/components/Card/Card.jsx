import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions"
import { useState } from "react";
import { useEffect } from "react";


 function Card({id, name, species, gender, image, onClose, addFavorite,removeFavorite,myFavorite}) {
   const [isFav,setIsFav]= useState(false);

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         removeFavorite(id)
      }
      else{
         setIsFav(true);
         addFavorite({id, name, species, gender, image})
      }
   };

   useEffect(() => {
      myFavorite.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorite]);


   return (
      <div className={style.container}>
         {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button className={style.boton} onClick={()=>{onClose(id)}}>X</button>
         <Link to={`/detail/${id}`} ><h3 className="card-name">{name}</h3></Link>
         <h2 className={style.especie}>{species}</h2>
         <h2 className={style.especie} >{gender}</h2>
         <img  src={image} alt={name} />

      </div>
   );
}
const mapDispatchToProps=(dispatch)=>{
   return{
      addFavorite:(character)=>{
         dispatch(addFavorite(character))
      },
      removeFavorite:(id)=>{
         dispatch(removeFavorite(id))
      }
   }
}
const mapStateToProps=(state)=>{
   return{
      myFavorite: state.myFavorite,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);