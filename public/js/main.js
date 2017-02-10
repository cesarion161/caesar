var alphabet = "abcdefghijklmnopqrstuvwxyz";
var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var shift = process.argv[3]? process.argv[3] : 3;
var message = process.argv[2]? process.argv[2] : "Hello!";
//console.log(process.argv);
console.log(makeshift(message, shift));

function makeshift(mess, shift) {
	var result = "";
	for(var i = 0; i < mess.length; i++){
		if (isLetter(mess[i])){
			result += encrypt(mess[i], alphabet, shift);
		}
		else if (isUppercaseLetter(mess[i])) {
			result += encrypt(mess[i], upperAlphabet, shift);
		}
		else 
			result += mess[i];
	}
	return result;
}
function encrypt(letter, alphabet, shift) {
	return alphabet[(alphabet.indexOf(letter) + shift) % alphabet.length];
}
function isLetter(str) {
 	return str.length === 1 && str.match(/[a-z]/);
}
function isUppercaseLetter(str) {
 	return str.length === 1 && str.match(/[A-Z]/);
}
