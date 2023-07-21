import { useSelector } from "react-redux";
import Card from '../Card/Card';

const Favorites=()=>{

    const favorites=useSelector((state)=>state.myFavorite)

    return(
        <>
            {favorites.map((fav)=>{
                return( <Card 
                key = {fav.id}
                id={fav.id}
                name = {fav.name}
                species = {fav.species}
                gender = {fav.gender}
                image = {fav.image}
                
                />
                );
            })
            }
        </>
    );
};
export default Favorites;