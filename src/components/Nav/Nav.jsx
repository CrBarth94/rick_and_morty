import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Nav(props){
    return (<nav className={style.nav}>
        <NavLink to="/home" className={style.img}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' alt="rick y morty" width='20%'/></NavLink>
        <div>
            <SearchBar onSearch={props.onSearch} />
            <div className={style.flex}>
                <Link to="/about"><button>About</button></Link>
                <Link to="/"></Link>
                <Link to="/favorite"><button>Mis Favoritos</button></Link>
            </div>
        </div>
    </nav>
    )
}        
