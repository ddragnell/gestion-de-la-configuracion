import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import classes from './loginPage.module.css';
import Title from "../../Components/Title/Title";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

export default function LoginPage() {
    
    const { 
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    
    const navigate = useNavigate();
    const { user, login } = useAuth();
    const [params] = useSearchParams();
    const returnUrl = params.get('returnUrl');

    useEffect(() => {
        if (!user) return;

        returnUrl ? navigate(returnUrl) : navigate('/');
    }, [user]);

    const submit = async ({ email, password }) => {
        await login(email, password);
    };

    return (
    <div className={classes.container}>
      <div className={classes.details}>
        <Title title="Login" />
        <form onSubmit={handleSubmit(submit)} noValidate>
          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                message: 'El correo es inválido',
              },
            })}
            error={errors.email}
          />

          <Input
            type="password"
            label="Contraseña"
            {...register('password', {
              required: true,
            })}
            error={errors.password}
          />

          <Button type="submit" text="Iniciar sesión" backgroundColor="#8215a3" />
        
          <div className={classes.register}>
            ¿Nuevo usuario? &nbsp;
            <Link to={`/registrar${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
              Registrate aquí
            </Link>
          </div>

        </form>
      </div>
    </div>
    );
};