
function chunk(array, indexarray) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    const last = res[res.length -1 ]
     // console.log(last)

    if(!last || last.length === indexarray) {
    	res.push([item])
    }
    else {
    	last.push(item)
    }

  }

  console.log(res)

}
chunk("hallo andi saya lapar",2)
chunk("123456",2)