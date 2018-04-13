const resValidetion = require('./validation').resValidetion
const apiReq = require('./callApi').apiReq
const allApis = require('./apiParams').allApiCalls
const isAddedToDb = require('../security').login
jest.unmock('axios')

test('all this test', async () => {
  allApis.map(goodCall => {
    let email = goodCall.data.email
    let password = goodCall.data.password
    return
    apiReq(goodCall)
    .then(goodCall => {
      return isAddedToDb(email, password)
    })
      .catch(err => {console.error(err);})
    .then(resiii => {
      console.log(resiii.email, email)
      expect(ressiii.email).toMatch(email)
    })
  })
})
