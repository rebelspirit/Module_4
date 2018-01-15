let alphabet = "qwertyuiopasdfghjklzxcvbnm";

let addKeyboardLayout = (alphabet) => {

let keyboardArr = [];
keyboardArr.length = 3;

	for(i = 0; i < alphabet.length; i++){	
		let string1 = alphabet.slice(0,9);
		let string2 = alphabet.slice(9,18);
		let string3 = alphabet.slice(18);
		keyboardArr[0] = string1.split('');
		keyboardArr[1] = string2.split('');
		keyboardArr[2] = string3.split('');
	};
	return keyboardArr;
};
console.log(addKeyboardLayout(alphabet))

let getRandCharInRow = (row, string) => {
	let arr = addKeyboardLayout(string);
	let random = Math.floor(Math.random() * (9 - 0) + 0);
	let letter = arr[row][random]; 
return letter;
};
console.log(getRandCharInRow(0, alphabet));

let getRandCharInAlph = (string) => {
	let arr = addKeyboardLayout(string);
	let i = Math.floor(Math.random() * (2 - 0) + 0);
	let y = Math.floor(Math.random() * (9 - 0) + 0);
	let letter = arr[i][y];
return letter;
};
console.log(getRandCharInAlph(alphabet));
