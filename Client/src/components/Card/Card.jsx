import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions"
import { useState } from "react";
import { useEffect } from "react";


 function Card({id, name, species, gender, image, onClose, addFav,removeFav,myFavorites}) {
   const [isFav,setIsFav]= useState(false);

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true);
         addFav({id, name, species, gender, image})
      }
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id ===id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

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
      addFav:(character)=>{
         dispatch(addFav(character))
      },
      removeFav:(id)=>{
         dispatch(removeFav(id))
      }
   }
}
const mapStateToProps=(state)=>{
   return{
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);