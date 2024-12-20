let x = "25";
let y = 6;
let z = y * 2;
let w = x - z;
let result2 = ((parseFloat(x) / y) + (z&&w) + ((w||5) ? 9 : 3) +"banana" + (z % y) * 2 + (!w || 7));
console.log(result2)   