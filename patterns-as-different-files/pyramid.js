function piramyd(rows){
for(let i = 1; i <= rows; i ++){
    let string = ``
    string += ` `.repeat(rows - i)
    string += `*`.repeat(2*i-1)
    console.log(string)
}

}
piramyd(4)