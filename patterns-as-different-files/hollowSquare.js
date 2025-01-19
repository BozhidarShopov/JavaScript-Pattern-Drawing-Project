function hollowSquare(rows){
    let string = ``
    for( let i = 1 ; i <= rows; i ++){
        if (i === 1 || i === rows){
  string += `*`.repeat(rows)
  console.log(string)
  string =``
    } else {
        console.log(`*` + ` `.repeat(rows-2) + `*`)
    }
}

}
hollowSquare(5)