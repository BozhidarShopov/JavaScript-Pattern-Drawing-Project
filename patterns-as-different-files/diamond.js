  //*
 //***
//*****
 //***
 // *

 function diamond(rows){
for( let i = 1 ; i<= rows; i ++){
    let string = ``
    string += ` `.repeat(rows - i)
    string += `*`.repeat(2*  i - 1)
    console.log(string)
}
let i = rows - 1
for (let j = i; j >= 1; j--){
    let string = ``
    string += ` `.repeat(rows - j)
    string += `*`.repeat(2*j - 1)
    console.log(string)
}
 }
 diamond(5)