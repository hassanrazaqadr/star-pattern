function printStarPattern(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Printing star pattern with 5 rows
printStarPattern(5);
