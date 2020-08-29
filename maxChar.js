

function maxChar(str) {
	let charCountObj = {};
	let maxChar = "";
	let maxCount = 0;

	for(let i = 0; i < str.length; i++) {

		//memisah kata menjadi perhuruf
		const char = str[i];


		//merubah array menjadi object
		// dan menghitung jumlah object yang mempunyai huruf yang sama

		charCountObj[char] = charCountObj[char] + 1 || 1
		// dan hasilnya menjadi { I: 1, ' ': 2, l: 2, o: 3, v: 1, e: 7, n: 1, d: 1, s: 1 }


		// kondisi 
		if(charCountObj[char] > maxCount) {
			//pada bagian ini akan menghasilkan object terkhir dari string ex = s
			maxChar =char

			// pada bagian ini maka hasil output tersebut menjadi "e" = 3
			maxCount = charCountObj[char]
		}

	}
	console.log(maxChar)
}
maxChar("I loveeeeee noodles")