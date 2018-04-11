let update = document.getElementById('update')
let del = document.getElementById('delete')
let login = document.getElementById('log-or-sign')

update.addEventListener('click', () => {
  let fromName = document.getElementById('replacename').value
  let toName = document.getElementById('replaceto').value
  let newQuote = document.getElementById('quoteto').value
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': toName,
      'quote': newQuote,
      'orgName': fromName
    })
  })
  .then(res => {
    if (res.ok) return res.json()

  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
})

del.addEventListener('click', () => {
  fetch('/quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name' : 'orel'
    })
  })
  .then(res => {
    if (res.ok) return res.json()
  })
  .then(data => {
    console.log(data)
    window.location.reload(true)
  })
})


login.addEventListener('click', () => {
  console.log('login');
  //
  // fetch('loginPage', {
  //   method: 'get',
  //   headers: {'Content-Type': 'application/json'}
  // }).then((req, res) => {
  //   console.log(req,res);
    window.location.replace('/login')
  // })
})
