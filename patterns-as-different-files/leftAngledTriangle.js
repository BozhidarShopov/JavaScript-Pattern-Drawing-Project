function leftAngledTriangle(rows){
    for( let i = 1 ; i<= rows; i ++){
        let string = ``
        string += ` `.repeat(rows - i)
        string += `*`.repeat(i)
        console.log(string)


}
}
leftAngledTriangle(5)