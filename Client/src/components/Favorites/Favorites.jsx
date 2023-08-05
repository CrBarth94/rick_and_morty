import { useSelector,useDispatch} from "react-redux";
import {orderFavorites,filterFavorites,resetFilter} from "../../redux/actions";
import Card from "../Card/Card"


const Favorites=()=>{
    const dispatch=useDispatch();
    const favorites=useSelector((state)=>state.myFavorites);

    function handleSort(event){
        dispatch (orderFavorites(event.target.value));
    }
    function handleFilter(event){
        dispatch(filterFavorites(event.target.value))
    }
    function handlerReset(){
        dispatch(resetFilter())
    }

    return(
        <>

            <select placeholder="Gender" onChange={handleFilter}>
                {["Male","Female","unknown","Genderless"].map((gender)=>
                <option  value={gender} >{gender}</option>)}
            </select>
            <select placeholder="Order" onChange={handleSort}>
                {["Ascendente","Descendente"].map((order)=>
                <option value={order}>{order}</option>)}
            </select> 
            <button onClick={handlerReset}>Reset Filters</button>
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