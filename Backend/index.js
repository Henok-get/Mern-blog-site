import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
dotenv.config();
const app = express()
const port = 3000

app.use(express.json());
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Mongodb is connected');
})
.catch((err)=>{
    console.log(err);
});


app.use('/api/user',userRoutes);

app.use('/api/auth',authRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})