import { NavLink } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <header className='Header'>
        <nav>
            <NavLink className={({ isActive }) => isActive ? " active" : ""} to="/">Todos</NavLink>
            <NavLink className={({ isActive }) => isActive ? " active" : ""} to="/posts">Posts</NavLink>
        </nav>
    </header>
  )
}
