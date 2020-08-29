// Menurut sumber wikipedia Anagram adalah salah satu jenis permainan kata, di mana huruf-huruf di kata awal biasa diacak untuk membentuk kata lain atau sebuah kalimat yang mempunyai makna.
// Simpel nya menurut gw anagram adalah perbandingan komposisi huruf-huruf penyusun dari suatu kata atau kalimat pada kata ataupun kalimat yang lainnya dengan syarat mempunyai makna.


function anagrams(stringA, stringB) {
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "")
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "")

  if (stringA.length !== stringB.length) {
    return false;
  }
  const stringAcharCount = {}

  for(let i= 0; i< stringA.length; i++) {
    const aChar = stringA[i];

    stringAcharCount[aChar] = stringAcharCount[aChar] +1 || 1;
  }
  for(i = 0; i<stringB.length; i++) {
    const bChar = stringB[i]

    if(!stringAcharCount[bChar]) {
	  console.log(false)
      
    } else {
      stringAcharCount[bChar] --

    }

  }
  console.log(true)

}
anagrams("earth", "heart")
anagrams("cinta", "tacin")
anagrams("lol", "loc")
anagrams("max", "XAM")
