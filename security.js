const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
mongoose.connect('mongodb://orelse:ok123456@ds139459.mlab.com:39459/orelse-app-db')

const userSchema = mongoose.Schema({
  email: { type: String, required: true},
  password: { type: String, required: true}
})

const admin = mongoose.model('admin', userSchema )


const allApis = (app)=>  {
  app.get('/security', (req, res) => {
    console.log('test of security')
    res.send('This is a security test :)')
  })
}



const createUser = (email, password) => {
  const firstAdmin = new admin({email, password})

  firstAdmin.save((err, firstAdmin) => {
    if (err) console.error(err)
    console.log(firstAdmin)
  })

  console.log(firstAdmin);

}

const login = (email, password) => {
  // log them in and give a token
  admin.findOne({email, password}, (err, user) => {
    if (err) return console.error(err)
    console.log({user})
  })
}


module.exports = {
  allApis,
  createUser,
  login,// mongoose.model('User',userSchema)
}
