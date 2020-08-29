// pertama ubah angka menjadi string

// kedua balik string tersebut

// ketiga ubah string menjadi angka



function reverseInt(num) {
	let int = num.toString().split("").reverse().join("")
	int = parseInt(int);

	//kondisi ini untuk jika ada angka yang bernilai negative
	if(num < 0 ) {
		return int * -1;
	}

	console.log(int)


}

reverseInt(32)