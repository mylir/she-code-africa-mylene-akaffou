// complete the function
function prime (num) {
  // code goes here
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num; i++) {
    if (num%i == 0) {
      return false;
    }else{
      return true
    }       
  }
}
console.log(prime(1))
console.log(prime(4))
console.log(prime(10))

// function solution (arg) {
//   return prime(arg);
// }

// if (typeof require !== "undefined" && require.main === module) {
//   if (process.argv.length <= 2) {
//     throw Error("Require argument");
//   }

//   const arg = process.argv[2];
//   console.log(solution(arg));
// }

// module.exports = { solution };
