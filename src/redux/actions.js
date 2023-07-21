export const ADD_FAV="ADD_FAV";
export const REMOVE_FAV="REMOVE_FAV";

export const addFavorite=(character)=>{
    return {type:ADD_FAV, payload: character }
};

export const removeFavorite=(id)=>{
    return {type:REMOVE_FAV, payload: id}
}

