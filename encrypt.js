class ShiftCipher{
	constructor(shift){
		this.shift = shift;
	}
	
	encrypt(str) {
		let upStr = str.toUpperCase();
		let newStr = '';
		for(let char of upStr) {
		    let index = char.charCodeAt(0);
				if (index <= 90 && index >= 65) {
					index += this.shift;
					if (index > 90) {
					  index -= 26;
					}
				  }
				  newStr += String.fromCharCode(index);
		}
				return newStr;
			  
		}

	decrypt(str) {
		let downStr = str.toLowerCase();
		let newStr = '';
		for(let char of downStr){
			let index = char.charCodeAt(0);
			if(index >= 97 && index <= 122) {
			  index -= this.shift;
			  if(index < 97){
				  index += 26;
			  }
		}
		newStr += String.fromCharCode(index);
	}
	return newStr;
}
}

const cipher = new ShiftCipher(4);
console.log(cipher.encrypt('buzz <3'));
console.log(cipher.decrypt('FYDD <3'));
