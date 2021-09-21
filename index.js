const express = require('express')
const exphbs = require('express-handlebars')
const Order = require('./controllers/order')
const order = new Order()
const { calculo } = require('./api/calculo')

const app = express()
const PORT = process.env.PORT || 3000

var hbs = exphbs.create({
    extname: "hbs",
    defaultLayout: 'main.hbs'
  });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public"))

app.get('/', (req, res) => {
    res.render('index', {
        active: 'index'
    })
})

app.get('/confirmarpedido', (req, res) => {
    const data = order.get()
    const calculoTotal = calculo(data)
    res.render('confirmar', {
        active: 'confirmar',
        data: data,
        calculoTotal: calculoTotal
    })
})

app.post('/confirmarpedido', (req, res) => {
    //Aqui se envia data a whatsapp y a google sheets
})

app.post('/hacerpedido', (req, res) => {
    const data = req.body;
    console.log(data)
    order.add(data)

    res.redirect('/confirmarpedido')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})