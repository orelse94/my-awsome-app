const resValidetion = require('./validation').resValidetion
const apiReq = require('./callApi').apiReq
const allApis = require('./apiParams').allApiCalls
const isAddedToDb = require('../security').login

const ap = () => {
  return test('all this test', async () => {
    return allApis.map(goodCall => {
      let email = goodCall.data.email
      let password = goodCall.data.password

      return apiReq(goodCall)
        .then(goodCall => {
          return isAddedToDb(email, password)
        })
        .then(response => {
          return expect(response.email).toMatch(email)
        })
        .catch(error => {
          console.error(error)
        })
    })
  })
}

ap()
