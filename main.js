function addNumbers(numberA, numberB) {
  return (numberA + numberB)
  console.log(numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4


function yell(x){
  return(x.toUpperCase())
}

var str = yell("a string")

console.log(str)

function yell10(e){
  return yell.repeat(10);
}


function longest(y, z){
  if (y.length > z.length)
  return(y)
  else {
    return(z)
  }
}

var y= ["lol", "lets", "do"]

var z = "Let's see how much you need to type before it works"

console.log();

function isVowel(str){
  var r = ["A","a","E","e","I","i","O","o","U","u"]
  r.includes(str)
}

console.log("r".isVowel)
