let varA = "A"; //B
let varB = "B"; //C
let varC = "C"; //A

// // let novoA = varB;
// // let novoB = varC;
// let novoC = varA;

// // varA = novoA;  
// // varB = novoB;
// varA = varB;  
// varB = varC;
// varC = novoC;

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
