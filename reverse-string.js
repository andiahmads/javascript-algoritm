// // pseudcode


// // 1. potong kata hello menjadi beberapa string ex h.e.l.l.o, dengan menggunakan method split
// // 2. lalu gunakan methode reverse untuk membalikkan string yg sudah dipotong
// // 3. buat variable baru untuk melihat hasilnya



// // ini solusi 1
// // dengan cara ini kita sedikit lebih mengetahui alur dari kode yang kita buat
// // kelemahan kode yang kita buat akan sedikit panjang
function reverse(str) {
	var splitString = str.split("")
	
	splitString.reverse();
	
	const res = splitString.join("")
	
	return res;

	
}
reverse("123");


// //solusi 2 dengan menggunakan method chaining(method berantai)
// // dengan menggunakan solusi 2 ini kode yang dituliskan hanya 1 baris.
// // namun cara ini tergolong buruk untuk belajar fundamental
function reverse(str) {
	return str.split("").reverse().join("");
}
reverse("456");



// solusi 3 
// ini adalah solusi paling fundamental, sehingga kita tidak akan mengguanak method fitur dari javascript

// langkah kerja

// buat 1 variable berisi string kosong
// lakukan looping sebanyak jumlah variable kosong

function reverse(str) {

// variable swap
let res = '';

for(let i=0; i<str.length; i++) {
	
	// variable char berisi string hello yang sudah dipotong
	const char = str[i]

	// nah variable kosong tadi di disi dengan char
	res = char + res
	console.log(res)

	// // cara kerjanya adalah 
	// string char = abc + res = ""
	// maka akan terjadi looping sesuai jumlah string yang ada pada (char)
	// diketahui char berjumlah 3 huruf

	// maka algoritmanya sebagai berikut

	// abc ""
	// "bc" -> "a"
	// "c" -> "ba"
	// "" -> "cba"
}
}
reverse("789");



// masuk varsi ES6

function revese(str) {
	return str.split("").reduce((output,char)=>{
		ouput = char + output
		return output

	},"")
}
reverse("321");
