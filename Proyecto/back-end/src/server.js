import  express  from "express";
import cors from 'cors';
import foodRouter from './routers/food.router.js'; 
import userRouter from './routers/user.router.js'

const app = express();
app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000'],
    })
);

app.use('/api/comidas', foodRouter);
app.use('/api/usuarios', userRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('Ejecutandose en el puerto ' + PORT);
});