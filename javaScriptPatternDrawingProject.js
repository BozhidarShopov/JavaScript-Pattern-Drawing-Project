// JavaScript Pattern Drawing Project
while (true) {
  // Step 1: Display a menu to the user
  console.log("🌟 Welcome to the JavaScript Pattern Drawing Program!");
  console.log("Choose a pattern type:");
  console.log("1. Right-angled Triangle");
  console.log("2. Square with Hollow Center");
  console.log("3. Diamond");
  console.log("4. Left-angled Triangle");
  console.log("5. Hollow Square");
  console.log("6. Pyramid");
  console.log("7. Reverse Pyramid");
  console.log("8. Rectangle with Hollow Center");

  // Step 2: Get the user's choice
  const choice = parseInt(
    prompt("Enter the number corresponding to your choice: "),10);
    
    //New step added by me -Bozhidar Shopov
    // It asks the user for the symbol he wants to use - it only logs 1`s so i need to learn how to fix it before implementing
    //const symbol =parseInt(prompt(`Enter the symbol to use for the shape`));

  // Step 3: Get dimensions based on choice
  let rows = 0,
    width = 0,
    height = 0;

  if (choice >= 1 && choice <= 7) {
    rows = parseInt(prompt("Enter the number of rows: "), 10);
  } else if (choice === 8) {
    width = parseInt(prompt("Enter the width of the rectangle: "), 10);
    height = parseInt(prompt("Enter the height of the rectangle: "), 10);
  } else {
    console.log("❌ Invalid choice! Please restart the program.");
    continue;
  }

  // Step 4: Generate the selected pattern
  switch (choice) {
    case 1: // Right-angled Triangle
      // TODO: Use nested loops to create a right-angled triangle ✅✅✅✅✅✅✅✅✅✅✅✅
      for (let i = 1; i <= rows; i++) {
        let string = "";
        for (let j = 1; j <= i; j++) {
          string += `*`;
        }
        console.log(string);
      }

      break;

    case 2: // Square with Hollow Center
      // TODO: Use nested loops to create a square with a hollow center✅✅✅✅✅✅✅✅✅✅✅✅
      for (let i = 1; i <= rows; i++) {
        let string = ``;
        if (i === 1 || i === rows) {
          string += `*`.repeat(rows);
          console.log(string);
          string = ``;
        } else {
          console.log(`*` + ` `.repeat(rows - 2) + `*`);
        }
      }
      break;

    case 3: // Diamond
      // TODO: Use nested loops to create a diamond shape✅✅✅✅✅✅✅✅✅✅✅✅
      for (let i = 1; i <= rows; i++) {
        let string = ``;
        string += ` `.repeat(rows - i);
        string += `*`.repeat(2 * i - 1);
        console.log(string);
      }
      let i = rows - 1;
      for (let j = i; j >= 1; j--) {
        let string = ``;
        string += ` `.repeat(rows - j);
        string += `*`.repeat(2 * j - 1);
        console.log(string);
      }
      break;

    case 4: // Left-angled Triangle
      // TODO: Use nested loops to create a left-angled triangle✅✅✅✅✅✅✅✅✅✅✅✅
      for (let i = 1; i <= rows; i++) {
        let string = ``;
        string += ` `.repeat(rows - i);
        string += `*`.repeat(i);
        console.log(string);
      }
      break;

    case 5: // Hollow Square
      // TODO: Use nested loops to create a hollow square ✅✅✅✅✅✅✅✅✅✅✅✅ same as the 2nd. option
      for (let i = 1; i <= rows; i++) {
        if (i === 1 || i === rows) {
          let string = ``;
          string += `*`.repeat(rows);
          console.log(string);
          string = ``;
        } else {
          console.log(`*` + ` `.repeat(rows - 2) + `*`);
        }
      }
      break;

    case 6: // Pyramid
      // TODO: Use nested loops to create a centered pyramid✅✅✅✅✅✅✅✅✅✅✅✅ - half of the diamond shape
      for (let i = 1; i <= rows; i++) {
        let string = ``;
        string += ` `.repeat(rows - i);
        string += `*`.repeat(2 * i - 1);
        console.log(string);
      }
      break;

    case 7: // Reverse Pyramid
      // TODO: Use nested loops to create a reverse pyramid✅✅✅✅✅✅✅✅✅✅✅✅ - same as pyramid just changing the for loop
      for (let i = rows; i >= 1; i--) {
        let string = ``;
        string += ` `.repeat(rows - i);
        string += `*`.repeat(2 * i - 1);
        console.log(string);
      }
      break;

    case 8: // Rectangle with Hollow Center
      // TODO: Use nested loops to create a rectangle with a hollow center✅✅✅✅✅✅✅✅✅✅✅✅
      for (let i = 1; i <= height; i++) {
        let string = ``;
        if (i === 1 || i === height) {
          string += `*`.repeat(width);
          console.log(string);
        } else {
          string += `*` + ` `.repeat(width - 2) + `*`;
          console.log(string);
        }
      }

      break;

    default:
      console.log("❌ Invalid choice! Please restart the program.");
      break;
  }

  // Step 5: Optional - Allow the user to restart or exit
  const restartChoice = prompt(
    "Do you want to restart the program? (y/n)"
  ).toLowerCase();
  if (restartChoice !== "y") {
    console.log(
      "👋 Thanks for using the JavaScript Pattern Drawing Program! Goodbye!"
    );
    break;
  }
}
