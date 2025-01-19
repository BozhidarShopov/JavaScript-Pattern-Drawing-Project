// Step 4: Generate the selected pattern
//let rows = 3
// copy from here bro
//switch (choice) {
    ///case 1: // Right-angled Triangle
        // TODO: Use nested loops to create a right-angled triangle
       
       //break
       function rows1(rows){
       let string = ``
        for ( let i = 1; i<= rows; i++){
            for (let j = 1 ; j <= i; j++){
                string += `*`.repeat(j)
                console.log(string)
                break
            }
        }
    }
    rows1(5)