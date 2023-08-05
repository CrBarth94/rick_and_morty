let myFavorites=[];

function postFav(req,res){
    myFavorites.push(req.body);
    console.log(myFavorites);
    res.status(200).json(myFavorites);
}

function deleteFav(req,res){
    let {id}= req.params;
    myFavorites=myFavorites.filter((character)=>Number(character.id)!==Number(id));
    console.log(myFavorites);
    res.status(200).json(myFavorites);
}

module.exports={
    postFav,
    deleteFav,};