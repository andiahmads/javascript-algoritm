
//algoritma fizzbuzz adalah algoritam sederhana yang mana setiap bilangan yang mempunyai kelipatan 3 
//maka outputnya akan menjadi fizz, dan setiap bilangan dengan kelipatan 5 menjadi buzz, dan bilangan terakhir menjadi fizzbuzz

function fizzBuzz(n) {
	for(let i = 1; i<= n; i++) { // lakukan iterasi sebanyak = n.
								 //lakukan percabangan i%5 = 5, dan i%3=3, maka logikanya adalah i%5=5 dan = 0 maka
											// setiap kelipatan 5 akan dieliminasi dan diganti dengan kata buzz, lalu i%3=3=0 maka 
											//setiap kelipatan 3 angka dieliminasi, dan diganti dengan kata fizz
		if(i % 5 === 0 && i % 3 === 0) {									//dan jika i%5 === 0 && i%3===0 maka outputnya menjadi fizzbuzz, karena iterasi dilakuakn
											// sebanyak parameter 
			console.log("fizzBuzz")
		}
		else if(i % 3 === 0) {
			console.log("fizz")
		}
		else if(i % 5 === 0) {
			console.log("buzz")
		}
		else {
			console.log(i)
		}
	}
}
fizzBuzz(15);