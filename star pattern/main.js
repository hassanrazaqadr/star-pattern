//function starPattern (rows : number) :void{
//for (let i = 0 ; i < (rows) ; i++){
//  let pattern : string = " ";
//  for (let j = 0 ; j<=i ; j++){
//      let pattern  : string = '* ';
//  }
//  console.log(pattern);
//}
//}
//let rows:number = 5
//console.log(rows);
function printStarPattern(rows) {
    for (var i = 1; i <= rows; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}
// Printing star pattern with 5 rows
printStarPattern(5);
