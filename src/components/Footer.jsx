import { NavLink } from "react-router-dom"


function Footer() {
  return (
    <>
    <footer className="footer">
        <nav>
            <ul>
            <li className="footer__menu-item">
                <NavLink to="/" className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "active" : "" }>
                A jugar
                </NavLink>
            </li>
            <li className="footer__menu-item">
                <NavLink to="/instructions" className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "active" : "" }>
                ¿Cómo se juega?
                </NavLink>
                
            </li>
            <li className="footer__menu-item">
                <NavLink to="/options" className={({ isActive, isPending }) =>
                 isPending ? "pending" : isActive ? "active" : "" }>
                Más opciones
                </NavLink>
            </li>
            </ul>
        </nav>
        <small className="footer__copy">© Adalab</small>
    </footer>
    </>
  )
}

export default Footer