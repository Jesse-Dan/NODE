// const express = require('express')
// const mongoose = require('mongoose')
// const Customers = require('../models/costumers')

// // const dotenv = require('dotenv')

// // init dotenv to pick .env data
// // dotenv.config()

// // init config on condition 
// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config()
// }

// // init db
// mongoose.set({ 'strictQuery': false })

// // init app
// const app = express()

// // allow post bod
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// // init port
// const PORT = process.env.PORT || 3000
// const CONNECTION = process.env.CONNECTION


// const json = [
//     { name: 'jesse', food: 'Yam' },
//     { name: 'Peter', food: 'Beans' },
//     { name: 'jesse', food: 'Yam' },
//     { name: 'jesse', food: 'Yam' },
//     { name: 'jesse', food: 'Yam' },
//     { name: 'John', food: 'Fufu' }]


// // const customer = new Customers({
// //     name: 'Jesse',
// //     industry: 'Technology'
// // });

// // customer.save()


// app.get('/', (req, res) => {
//     res.send(customer)
// })

// app.get('/api/costumers', (req, res) => {
//     res.send({ 'data': json })
// })

// app.post('/api/costumers/db', (req, res) => {
//     console.log(req.body)
//     res.send({ 'new_registration': req.body })
// })

// app.post('/api/costumers', (req, res) => {
//     console.log(req.body)
//     var data = Customers({
//         name: res['name'],
//         industry: res['industry']
//     });
//     res.send({ 'new_registration': data })
//     mongoose.send({ 'new_registration': data })
// })

// app.post('/', (req, res) => {
//     res.send('this is a Post request !')
// })




// const start = async () => {
//     try {
//         await mongoose.connect(CONNECTION)
//         app.listen(PORT, () => {
//             console.log(`App is listening on port ${PORT}`)
//         })
//     } catch (error) {
//         console.log(error.message)

//     }
// }

// start()