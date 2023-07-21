import Card from '../Card/Card';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return(
    <div className={style.flex}>
      {
         characters.map((char)=>{
            return(
               <Card 
               key = {char.id}
               id={char.id}
               name = {char.name}
               species = {char.species}
               gender = {char.gender}
               image = {char.image}
               onClose = {props.onClose}
               />
            )
            
         })
      }
   </div>
   )
}
