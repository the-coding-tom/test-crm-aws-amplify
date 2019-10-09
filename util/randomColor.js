const randomColor = () => {
  let letters = 'ABCDEF0123456789'
  let len = 6
  let result = '#'
  for (let i = 0; i < len; i++) {
    result += letters[parseInt(Math.random() * letters.length)]
  }
  return result
}

export default randomColor
