import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../Components/Input/Input";
import Title from "../../Components/Title/Title";
import classes from './registerPage.module.css';
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export default function RegisterPage() {
    const auth = useAuth();
    const { user } = auth;
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const returnUrl = params.get('returnUrl');

    useEffect(() => {
        if (!user) return;
        returnUrl ? navigate(returnUrl) : navigate('/');
    }, [user]);


    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors },
    } = useForm();

    const submit = async data => {
        await auth.register(data); 
    };

    return (
        <div className={classes.container}>
            <div className={classes.details}>
                <Title title="Registrarse" />
                <form onSubmit={handleSubmit(submit)} noValidate>
                <Input
                    type="text"
                    label="Nombre"
                    {...register('name', {
                        required: true,
                        minLength: 3,
                    })}
                    error={errors.name}
                />

                <Input
                    type="email"
                    label="Email"
                    {...register('email', {
                    required: true,
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,63}$/i,
                        message: 'El correo no es válido',
                    },
                    })}
                    error={errors.email}
                />

                <Input
                    type="password"
                    label="Contraseña"
                    {...register('password', {
                        required: true,
                        minLength: 5,
                    })}
                    error={errors.password}
                />

                <Input
                    type="password"
                    label="Confirmar contraseña"
                    {...register('confirmPassword', {
                        required: true,
                        validate: value =>
                            value !== getValues('password')
                            ? 'Las contraseñas no coinciden'
                            : true,
                    })}
                    error={errors.confirmPassword}
                />

                <Input
                    type="text"
                    label="Ciudad"
                    {...register('address', {
                        required: true,
                        minLength: 3,
                    })}
                    error={errors.address}
                />

                <Button type="submit" text="Registrarse" backgroundColor="#8215a3" />
                

                <div className={classes.login}>
                    ¿Ya tienes un usuario? &nbsp;
                    <Link to={`/login${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>
                    Inicia sesión aquí
                    </Link>
                </div>
                </form>
            </div>
        </div>
    );

};