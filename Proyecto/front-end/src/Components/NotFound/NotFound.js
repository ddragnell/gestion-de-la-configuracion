import React from 'react'
import classes from './notFound.module.css';
import { Link } from 'react-router-dom';

export default function NotFound({ message, linkRoute, linkText }) {
  return (
    <div className={classes.container}>
        {message}
        <Link to={linkRoute}>{linkText}</Link>
    </div>
  );
}



NotFound.defaultProps = {
    message : 'No se ha encontrado el producto',
    linkRoute: '/',
    linkText: 'Volver al inicio',
}