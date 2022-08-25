import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import imageRoutes from './routes/images.routes.js'
import userRoutes from './routes/user.routes.js'
import patientRoutes from './routes/patient.routes.js'

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cookieParser())

//Routes
app.use(imageRoutes);
app.use('/user', userRoutes)
app.use(patientRoutes)


//Server on port...
app.listen(app.get('port'));
console.log('Server on port', app.get('port'));