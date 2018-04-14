const proxy = {  host: '127.0.0.1', port: 3000 }

const allApiCalls = [
  // {
  //   method: 'get',
  //   url: '/',
  //   proxy,
  //   data: {}
  // },
  // {
  //   method: 'post',
  //   url: '/trytry',
  //   proxy: {  host: 'localhost', port: '3000' },
  //   headers: {'Content-type': 'application/x-www-form-urlencoded'},
  //   data: {email: 'just try', password:'pls'},
  //   test: 'email'
  //
  // },
  {
    method: 'post',
    url: '/login/signup',
    proxy: {  host: 'localhost', port: '3000' },
    headers: {'Content-type': 'application/x-www-form-urlencoded'},
    data: {email: 'there is aaaaaaaaaa way!', password:'!!'},
    test: 'email'

  }
]

module.exports = {
  allApiCalls,
}
