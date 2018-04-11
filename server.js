const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const secConn = require('./security').allApis
const login = require('./security').login

let db

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.json())

MongoClient.connect('mongodb://orelse:ok123456@ds139459.mlab.com:39459/orelse-app-db', (err, client) => {
  if (err) return console.error(err)
  db = client.db('orelse-app-db')
  app.listen(3000, () => {
    console.log('listening on port 3000')
  })
})

app.use(bodyParser.urlencoded({extended:true}))


app.get('/', (req,res) => {
  db.collection('quotes').find().toArray((err,result) => {
    res.render('index.ejs', {quotes: result})
  })
})


app.post('/quotes', (req,res) => {
  db.collection('quotes').save(req.body, (err, results) => {
    if (err) return console.error(err)
    console.log(`1 item added to db.`)
    res.redirect('/')
  })
})

app.put('/quotes', (req, res) => {
  console.log(req.body);
  db.collection('quotes')
  .findOneAndUpdate({name: req.body.orgName}, {
    $set: {
      name: req.body.name,
      quote: req.body.quote,

      // whats wrong with the quote!!

    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

app.delete('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndDelete(
    {
      name: req.body.name
    },
    (err, result) => {
      if (err) return res.send(500, err)
      res.send({message: 'An orel quote got deleted'})
    })
})

app.post('/login/signup', (req, res) => {
  const createUser = require('./security').createUser
  console.log('lofsdaofasodfoas');
  let email = req.body.email
  let password = req.body.password
  createUser(email,password)
  res.redirect('/login/signedup')
})

app.get('/login', (req, res) => {
  // if (err) return console.error(err)
  // res.setHeader("Content-Type", "text/html")

  return res.render('login.ejs')

  // res.redirect('login.ejs')
})
app.get('/login/signedup', (req, res) => {
  return res.render('signIn.ejs')
})
app.get('/justSignedup', (req, res) => {
  return res.redirect('/signup')
})

app.post('/login/loginPage', (req, res) => {
  return res.redirect('/login/signedup')
})
app.post('/login/logToSys', (req, res, next) => {

  let email = req.body.email
  let password = req.body.password

  login(email, password)
})

secConn(app)
