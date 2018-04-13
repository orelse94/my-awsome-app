const axios = require('axios')
const proxy = {  host: '127.0.0.1', port: 3000 }
const qs = require('querystring')

const parseJson = (data) => {
  return data ? qs.stringify(data) : null
}

const apiReq = async (callObj) => {
  callObj.data = await parseJson(callObj.data)
  await axios(callObj)
  .then(response => {console.log('res status:',response.status)})
  // .catch(err=>{console.log({err});})
  return callObj
}

module.exports = {
  apiReq
}
