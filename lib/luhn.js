const input = process.argv[2]

function check(input){
  const workingInput = (input+'').split('')
  // console.log('workingInput:', workingInput)
  const inputCheckDigit = parseInt(workingInput.pop())
  // console.log('workingInput:', workingInput)
  // console.log('inputCheckDigit:', inputCheckDigit)
  const checkDigit = getCheckDigit(workingInput)
  // console.log('Calculated checkDigit:', checkDigit)
 return (inputCheckDigit === checkDigit)
}

function getCheckDigit(arr){
  for (let i = arr.length - 1; i >=0; i -= 2) {
    arr[i] = arr[i] * 2
    if (arr[i] > 9) {
      arr[i] -= 9
    }
  }
  // console.log('After doubling:', arr)
  let checkSum = 0
  for (i = 0; i < arr.length; i++){
    checkSum += parseInt(arr[i])
  }
  // console.log('CheckSum:', checkSum)
  let checkDigit = (checkSum * 9) % 10
  // console.log('checkDigit:', checkDigit)
  return checkDigit
}

module.exports = check