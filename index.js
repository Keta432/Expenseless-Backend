const connectToMongo=require('./db');
const express = require('express')
const cors=require('cors')

connectToMongo();

const app = express()
const port = process.env.port || 5000

app.use(cors({
  origin:["http://localhost:3000","https://expenseless-frontend.onrender.com/"],
}))
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/accounts',require('./routes/accounts'))
app.use('/api/expenses',require('./routes/expenses'))
app.use('/api/incomes',require('./routes/incomes'))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

  