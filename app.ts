import express from 'express'
import todoRoutes from './routes/todo'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

app.use("/todo",todoRoutes)

app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})