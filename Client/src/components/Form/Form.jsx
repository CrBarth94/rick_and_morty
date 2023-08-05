import { useState } from "react"
import validation from "../validation";
import style from "./Form.module.css"


export default function Form({login}){

    const [errors,setErrors]=useState({})

    const [userData,setUserData]= useState({
        email:"",
        password:"",
    });

    const handleChange=(event)=>{
        const propiedad= event.target.name;
        const valor= event.target.value;

        setUserData({...userData, [propiedad]:valor});
        validation({...userData, [propiedad]:valor},errors,setErrors)
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        login(userData);
    }

    return(
        <form className={style.form} onSubmit={submitHandler}> 
            <div >
                <label htmlFor="email">Email: </label>
                <input 
                    type="email" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleChange}/>
            </div>
            <div>{errors.error}</div>
            <div>
                <label htmlFor="password">Password: </label>
                <input 
                    type="password" 
                    name="password"
                    value={userData.password} 
                    onChange={handleChange} />
            </div>
            <button className={style.btn}>Submit</button>
        </form>
    )
}