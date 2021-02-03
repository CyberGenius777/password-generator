function getPassword() {
  const numChars = '0123456789'
  const letterChars = 'abcdefghijklmnopqrstuvwxtzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const symbolChars = '!@#$%^&*()_+?><:{}[]'
  const chars = numChars + letterChars + symbolChars
  let passwordLength = +document.querySelector('#pass-value').value

  let password = ''
  if (Number.isInteger(passwordLength)) {
    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length)
      password += chars.substring(randomNumber, randomNumber + 1)
    }

    document.querySelector('#password').value = password
  } else {
    alert('Введите число!')
  }
}
function clearInput() {
  document.querySelector('#password').value = ''
  document.querySelector('#checkCopied').value = ''
}
function copyPassword() {
  let copyPassText = document.querySelector('#password')
  copyPassText.select()
  copyPassText.setSelectionRange(0, 9999)
  document.execCommand('copy')
}

async function pasteCopied() {
  let getPassword = document.querySelector('#password')
  let checkPasswordField = document.querySelector('#checkCopied')
  getPassword = await navigator.clipboard.readText()
  checkPasswordField.value = getPassword
}
