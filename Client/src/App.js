import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from "./components/Nav/Nav.jsx"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites";


function App() {

   const [characters,setCharacters]=useState([]);
   const [access,setAccess]=useState(false);
   const navigate=useNavigate();
   
   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data}=await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
      } catch (error) {
         console.log(error)
      }

}
useEffect(()=>{
      !access && navigate("/");

   },[access]);
   

   const onClose=(id)=>{
      console.log("me estoy ejecutando");
      setCharacters(characters.filter((char) => Number(char.id) !== Number(id)))
   };

   const onSearch=async(id)=> {

      try {
        const {data}=await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
      } catch (error) {
         window.alert('¡No hay personajes con este ID!');
      }
      
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
