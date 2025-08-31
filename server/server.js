import express from 'express'
import 'dotenv/config'

import cors from 'cors' //connect back with front
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app=express();

await connectDB()

//middlewares

app.use(cors())
app.use(express.json()) //request parsed using json method 

app.get('/',(req,res)=>{
    res.send("App is working");
})
app.use('/api/admin',adminRouter)
app.use('/api/blog',blogRouter)

const PORT =process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is listening on port 3000")
})

export default app;