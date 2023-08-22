import React from "react";
import { useCart } from "../../hooks/useCart";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import { createOrder } from "../../Services/orderService";
import classes from './checkoutPage.module.css'
import Title from "../../Components/Title/Title";
import Input from "../../Components/Input/Input";
import OrderItemsList from "../../Components/OrderItemsList/OrderItemsList";
import Button from "../../Components/Button/Button";
import Map from "../../Components/Map/Map";

export default function CheckoutPage() {
    const { cart } = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [ order, setOrder] = useState({...cart});
   
   
    const { 
        register, 
        formState: { errors },
        handleSubmit,
    } = useForm();

    const submit = async data => {
        if (!order.addressLatLng) {
            toast.warning('Por favor, indica tu ubicación');
            return;
        }

        await createOrder({...order, name: data.name, address: data.address });
        navigate('/pagar');
    };


    return (
        <>
          <form onSubmit={handleSubmit(submit)} className={classes.container}>
            <div className={classes.content}>
              <Title title="Orden" fontSize="1.6rem" />
              <div className={classes.inputs}>
                <Input
                  defaultValue={user.name}
                  label="Name"
                  {...register('name')}
                  error={errors.name}
                />
                <Input
                  defaultValue={user.address}
                  label="Address"
                  {...register('address')}
                  error={errors.address}
                />
              </div>
              <OrderItemsList order={order} />
            </div>
            <div>
              <Title title="Señala tu ubicación" fontSize="1.6rem" />
              <Map
                location={order.addressLatLng}
                onChange={latlng => {
                  console.log(latlng);
                  setOrder({ ...order, addressLatLng: latlng });
                }}
              />
            </div>
    
            <div className={classes.buttons_container}>
              <div className={classes.buttons}>
                <Button
                  type="submit"
                  text="Realizar pago"
                  width="100%"
                  height="3rem"
                />
              </div>
            </div>
          </form>
        </>
      );
}