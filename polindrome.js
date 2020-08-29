// cara pertama menyelesaikan algoritama palindrome
// dengan menggunakan method split.reverse.join
//atau bisa juga disebut dengan method chaining
function palindrome(str) {
  str = str.toLowerCase()
  const reversed = str.split("").reverse("").join("")
  if(str === reversed) {
    console.log(true)

  }
  else {
    console.log(false)
  }
}

palindrome("gg")



// cara berikutnya lebih simple lagi yaitu dengan menggunakan equals(samadengan) sebanyak 3x

// function palindrome(str) {
// 	str = str.toLowerCase()
// 	str === str.split("").reverse("").join("");
// 	console.log(palindrome)
// }
// palindrome("hom")
