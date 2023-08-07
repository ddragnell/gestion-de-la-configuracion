import React from 'react'
import classes from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {

    const user = {
        name: 'Andrés',
    };

    const cart = {
        totalCount: 10,
    };

    const cerrar_sesion = () => {}

  return <header className={classes.header}>
    <div className={classes.container}>
        <Link to="/" className={classes.logo}>
            Rappi
        </Link>
        <nav>
            <ul>

            {user ? (
                    <li className={classes.menu_container}>
                        <Link to="/perfil">{user.name}</Link>
                        <div className={classes.menu}>
                            <Link to="/perfil">Perfil</Link>
                            <Link to="/ordenes">Ordenes</Link>
                            <a onClick={cerrar_sesion}>Cerrar sesión</a>
                        </div>
                    </li>
                    ) : (
                    <Link to="/login">Iniciar sesión</Link>
                )}
                
               <li>
                <Link to="/carrito">
                    Carrito
                    {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount}</span>}
                </Link>
               </li>  
            </ul>
        </nav>
    </div>
  </header>
}
