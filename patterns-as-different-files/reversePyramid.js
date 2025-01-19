//for(let i = 1; i <= rows; i ++){
    //    let string = ``
    //    string += ` `.repeat(rows - i)
    //    string += `*`.repeat(2*i-1)
    //    console.log(string)
    //} normal pyramid code
    
function reversedPyramid(rows){
for( let i = rows; i >= 1 ; i--){
    let string = ``
    string += ` `.repeat(rows - i)
    string +=`*`.repeat((2*i)-1)
    console.log(string)
    
    
}

}

    
reversedPyramid(4)