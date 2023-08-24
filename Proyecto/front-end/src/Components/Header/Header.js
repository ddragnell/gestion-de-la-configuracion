import React from 'react'
import classes from './header.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';

export default function Header() {

    const { user, logout } = useAuth();

    const { cart } = useCart();


  return <header className={classes.header}>
    <div className={classes.container}>
        <Link to="/" className={classes.logo}>
            Rappi
        </Link>
        <nav>
            <ul>

            {user ? (
                    <li className={classes.menu_container}>
                        <a> {user.name}</a>
                        <div className={classes.menu}>
                            <Link to="/login" onClick={logout}>Cerrar sesión</Link>
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