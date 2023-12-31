// trying tests on my    xcazzzxxxcccccc    test module
// const Tests = require('./tests/test')
// const test =  Tests

const cors = require('cors');
const express = require('express')
const mongoose = require('mongoose')
const Customers = require('./models/costumers')

// const dotenv = require('dotenv')

// init dotenv to pick .env data
// dotenv.config()


// init db
mongoose.set({ 'strictQuery': false })

// init app
const app = express()

// allow post bod
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// init config on condition 
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

// init port
const PORT = process.env.PORT || 3000
const CONNECTION = process.env.CONNECTION

// test json data
const json = [
    { name: 'jesse', food: 'Yam' },
    { name: 'Peter', food: 'Beans' },
    { name: 'jesse', food: 'Yam' },
    { name: 'jesse', food: 'Yam' },
    { name: 'jesse', food: 'Yam' },
    { name: 'John', food: 'Fufu' }]

// test customer schema (as model in dart)
const customer = new Customers({
    name: 'Jesse',
    industry: 'Technology'
});
// customer.save()

// get end point 1
app.get('/', (req, res) => {
    res.send('Hello world')
})


/// put end point 1 [alter a resource]
app.delete('/api/costumers/:id', async (req, res) => {
    try {
        const { id: customerId } = req.params;
        const result = await Customers.deleteOne({ _id: customerId }, req.body);
        console.log({ result })
        res.status(200).json({ updateCount: result.modifiedCount, result: result })
    } catch (error) {
        res.status(500).json({ error: `error deleting\n data with error: ${error}` })
    }
})

/// put end point 1 [alter a resource]
app.put('/api/costumers/:id', async (req, res) => {
    try {
        const { id: customerId } = req.params;
        const result = await Customers.findOneAndReplace({ _id: customerId }, req.body,{new:true});
        console.log({ result })
        res.status(200).json({ updateCount: result.modifiedCount, result: result })
    } catch (error) {
        res.status(500).json({ error: `error modifying\n data with error: ${error}` })
    }
})

/// get end point 1 [search resourse]
app.get('/api/costumers/:id', async (req, res) => {
    try {
        const { id: customerId } = req.params;
        console.log({ customerId })
        const results = await Customers.findById(customerId)
        console.log({ result: results.toString() })
        if (!results) {
            res.status(404).json({ error: 'user not found or doesn\'t exist on DB' })
        } else {
            res.status(200).json({ results })
        }
    } catch (error) {
        console.log({ 'error': error.toString() })
        res.status(500).json({ error: 'An error occured' })
    }
})


// get end point 3
app.get('/api/costumers', async (req, res) => {
    console.log(await mongoose.connection.db.listCollections().toArray())
    try {
        const data = await Customers.find();
        res.json({ 'data': data })
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})


// post end point 1
app.post('/api/costumers', async (req, res) => {
    console.log(req.body)
    const person = new Customers(req.body);
    try {
        await person.save();
        res.status(201).json({ person })
    } catch (e) {
        res.status(400).json({ error: e.message })
    }

})

// post end point 1
app.post('/', (req, res) => {
    res.send('this is a Post request !')
})



// connect to mongodb and listen to server port (basically main function in dart)
const start = async () => {
    try {
        await mongoose.connect(CONNECTION)
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error.message)

    }
}

// start server 
start()

