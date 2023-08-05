import axios from "axios"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import style from "./Detail.module.css"


export default function Detail(){
    const [character,setCharacter]= useState({})
    const {id}=useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
     
     

    return(
        <div className={style.detail}>
            {   character.name ?(
                <>
                <div className={style.text}>
                    <h2>{character.name}</h2>
                    <h3>{character.status}</h3>
                    <h3>{character.species}</h3>
                    <h3>{character.origin?.name}</h3>
                    <h3>{character.gender}</h3>
                </div>
                <div className={style.img}>
                    <img src={character.image}/>
                </div>
                </>):(
                <h3>Loading...</h3>)}
        </div>
    )
}