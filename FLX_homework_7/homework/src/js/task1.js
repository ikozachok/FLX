let login = prompt('Please enter your login','');
if (login === '' || login === null) {
  alert('Canceled')
} else if (login.length < 4) {
  alert("I don't know any users having name length less than 4 symbols")
} else if (login !== 'User' && login !== 'Admin') {
  alert('I don’t know you')
} else {
  let password = prompt('Please enter your password','');
  if (password === '' || password === null) {
    alert('Canceled')
  } else if (password !== 'UserPass' && password !== 'RootPass') {
    alert('Wrong password')
  } else if (login === 'User' || password === 'UserPass' && login === 'Admin' || password === 'RootPass') {
    if (new Date().getHours() < 20) {
      alert('Good day, dear ' + login + '!')
    } else {
      alert('Good evening, dear ' + login + '!')
    }
  }
}
