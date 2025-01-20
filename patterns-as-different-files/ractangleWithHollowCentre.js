function rectangle(width,height){
    for (let i = 1; i<=height; i ++){
        let string = ``
        if(i === 1 || i === height){
        string += `*`.repeat(width)
        console.log(string)
        }else{
            string += `*` +` `.repeat(width-2) + `*`
            console.log(string)
        }
    }

}
rectangle(5,5)