
// pseudcode nya adalah

// petama convert str menjadi array
// potong array tersebut dengan split

// masukan kembali potongan array tadi dalam array dengan mengguanakn push 
// sehingga hasil nya menjad [hei],[aku],[rindu]

// lalu push array setiap array yang berIndex 0,dan convert array index 0 dengan UpperCase
// maka hasilnya [HEI],[AKU],[RINDU]
// tetapi tedapat masalah yaitu setiap index malah diconver menjadi upperacase

// maka gunakan method slice untuk memotong index yang lain, dan convert menjadi lower case

// maka hasilnya [Hei],[Aku],[Rindu]
// lalu ubah kembali dalam bentuk string dengan method join



function capitalize(str) {
	const arr = []
	const text = str.split(" ") 

	console.log(text)
	//pada method split diatas kita lihat ada pemberian spasi pada kutip tesebut
	// yg maksudnya adalah jika kita menulis kutp tanpa spase ""
	// maka kata 'aku rindu' dikembalikan menjadi [a,k,u,r,i,n,d,u] 
	//  jika kita menulis kutip dg spasi " "
	// maka kata 'aku rindu' dikembalikan menjadi [aku, rindu] 

	
	for(let i=0; i< text.length; i++) {
		const cetak = text[i]

		arr.push(cetak[0].toUpperCase()+cetak.slice(1).toLowerCase())


	}
	console.log(arr.join(" "))


}

capitalize("hei aku rindu")