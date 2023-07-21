const validation=(userData,errors,setErrors)=>{
    
    if(!userData.email){
        setErrors({...errors, error:"Completar este campo"});
    }
    else if(userData.email.length>35) {
        setErrors({...errors, error:"Debe tener menos de 35 caracteres"});
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/.test(userData.email)){
        setErrors({...errors, error:"Ingrese un email valido"})
    }
    else {setErrors({...errors, error: ""});
    }

    // if(userData.password.length<6 || userData.password.length>10){
    //     setErrors({...errors,password:"debe contener entre 6 y 10 caracteres"});
    // }
    // else if(!/\d/.test(userData.password)){
    //     setErrors({...errors,password:"debe conteners almenos 1 numero"});
    // }
    // else{
    //     setErrors({...errors,password:""});
    // }
}

export default validation;