import express from 'express';
import morgan from 'morgan';
import imageRoutes from './routes/image.routes.js'
import userRoutes from './routes/user.routes.js'

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use(imageRoutes);
app.use('/user', userRoutes)


//Server on port...
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));