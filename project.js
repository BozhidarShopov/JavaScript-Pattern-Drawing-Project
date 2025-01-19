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
    const choice = parseInt(prompt("Enter the number corresponding to your choice: "), 10);

    // Step 3: Get dimensions based on choice
    let rows = 0, width = 0, height = 0;

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
            // TODO: Use nested loops to create a right-angled triangle
            break;

        case 2: // Square with Hollow Center
            // TODO: Use nested loops to create a square with a hollow center
            break;

        case 3: // Diamond
            // TODO: Use nested loops to create a diamond shape
            break;

        case 4: // Left-angled Triangle
            // TODO: Use nested loops to create a left-angled triangle
            break;

        case 5: // Hollow Square
            // TODO: Use nested loops to create a hollow square
            break;

        case 6: // Pyramid
            // TODO: Use nested loops to create a centered pyramid
            break;

        case 7: // Reverse Pyramid
            // TODO: Use nested loops to create a reverse pyramid
            break;

        case 8: // Rectangle with Hollow Center
            // TODO: Use nested loops to create a rectangle with a hollow center
            break;

        default:
            console.log("❌ Invalid choice! Please restart the program.");
            break;
    }

    // Step 5: Optional - Allow the user to restart or exit
    const restartChoice = prompt("Do you want to restart the program? (y/n)").toLowerCase();
    if (restartChoice !== "y") {
        console.log("👋 Thanks for using the JavaScript Pattern Drawing Program! Goodbye!");
        break;
    }
}
