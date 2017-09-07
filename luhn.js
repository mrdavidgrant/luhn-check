const input = process.argv[2].split('')

console.log('Original Input:', input)
input.push('x')
console.log('After check digit:', input)



function algorithm(arr) {
// double every other digit starting from the right
  const checksum = 0
  for (let i = arr.length - 2; i >=0; i -= 2) {
    arr[i] = arr[i] * 2
    if (arr[i] > 9) {
      arr[i] -= 9
    }
  }
  console.log('After doubling:', arr)
  for (i = 0; i < arr.length - 1; i++){
    checksum += arr[i]
  }


  return checksum
}

console.log(algorithm(input))
