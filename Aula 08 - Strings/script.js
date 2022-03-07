//              01234567
let ricardoi = "Ricardoi";
//           0123456789...
let frase = "O rato roeu a roupa do rei de roma";

 //Traz o 4ª caractere
console.log(ricardoi[4]);
 //Traz o caractere "0" 
console.log("charAt: ", ricardoi.charAt(0));
 //Concatena com ricardoi
console.log(ricardoi.concat('é o meu ', 'nome!'));
 //Traz qual o numero do caractere que representa a string "r"
console.log("indexOf: ", ricardoi.indexOf('r'));
 //Traz a posição do caractere "i" a partir do 4ª caractere
console.log("indexOf(4): ", ricardoi.indexOf('i', 4));
 //Traz a posição do caractere "i" a partir do antepenultimo(3) caractere
console.log("lastIndexOf: ", ricardoi.lastIndexOf('i', 3));
 //Traz todas letras minúsculas com regEx[a-z] em array por conta do "g"
console.log("match: ", ricardoi.match(/[a-z]/g));
 //Traz o índice onde a primeira letra minúscula foi encontrado
 console.log("search: ", ricardoi.search(/[a-z]/g)); 
 //Substitui o parametro 1 pelo segundo
 console.log("replace: ", ricardoi.replace("doi", "do"));
 //Substitui os "i" por "X", todos por conta do g
 console.log("replace: ", ricardoi.replace(/i/g, 'X'));
 //Retorna a quantidade de caracteres total da variavel
 console.log("length: ", ricardoi.length);
 //Traz do caractere "0" até o "3"
 console.log("slice: ", ricardoi.slice(0, 3));
 //Traz os 3 ultimos caracteres
 console.log("slice: ", ricardoi.slice(-3)); 
 //Traz a partir do 5ª caractere(3 ultimos caracteres)
 console.log("slice: ", ricardoi.slice(5));
 //Traz a partir do 5ª caractere, menos o ultimo
 console.log("slice: ", ricardoi.slice(5, -1)); 
 //Traz a partir antepenultimo(-3) menos o ultimo(-1)
 console.log("slice: ", ricardoi.substring(ricardoi.length -3, ricardoi.length -1));
 //Traz um array com todas palavras separadas por " "(espaço)
 console.log("split: ", frase.split(' '));
 //Traz um array com 2 palavras separadas por " "(espaço)
 console.log("split: ", frase.split(' ', 2));
 //Converte tudo para maiúscula
 console.log("toUpperCase: ", frase.toUpperCase());
 //Converte tudo para minúscula
 console.log("toLocaleLowerCase: ", frase.toLocaleLowerCase());