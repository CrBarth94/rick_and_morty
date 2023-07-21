import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";


function App() {

   const [characters,setCharacters]=useState([]);
   const [access,setAccess]=useState(false);
   
   const navigate =useNavigate();
   
   useEffect(()=>{
      !access && navigate("/");

   },[access]);

   const email= "emailtrucho@gmail.com";
   const password= "trucho123";
   
   const login=(userData)=>{
      if(userData.email===email && userData.password===password){
         setAccess(true);
         navigate("/home");
      }else{
         alert("credenciales incorrectas");
      }
   }
   

   const onClose=(id)=>{
      setCharacters(characters.filter((char) => char.id !== Number(id)))
   };

   const onSearch=(id)=> {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const{pathname}=useLocation();

   return (
      <div className='App'>
         {pathname !=="/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route
               path="/favorite"
               element={<Favorites/>}
            />
            <Route
               path="/home"
               element={<Cards  characters={characters} onClose={onClose}/>}
            />
            <Route
               path="/about"
               element={<About/>}
            />
            <Route
               path="/detail/:id"
               element={<Detail/>}
            />
            <Route
               path="/"
               element={<Form login={login}/>}
            />
         </Routes> 
      </div>
   );
}

export default App;
