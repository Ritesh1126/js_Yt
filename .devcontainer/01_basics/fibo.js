const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number of terms for the Fibonacci series: ", function(n) {
    n = parseInt(n);

    let a = 0, b = 1, next;

    if (!isNaN(n) && n > 0) {
        console.log("Fibonacci Series:");
        
        for (let i = 1; i <= n; i++) {
            console.log(a);         // Print the current number
            next = a + b;          // Calculate the next number
            a = b;                // Shift a to b
            b = next;             // Shift b to next
        }
    } else {
        console.log("Please enter a valid positive number!");
    }

    rl.close(); // Close the input stream
});
