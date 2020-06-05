if (process.argv.length == 2) {
  console.log("please enter parameter")
  return
}
const input = process.argv.slice(2)[0]
console.log(input.replace(/(\w)\1*/g, (num, char) => { return char+num.length}))