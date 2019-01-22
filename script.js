function toHex(n) {	
    let str = '';	
    var symbolHex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  
    if (n % 16 === 0) {
		    var j = Math.log(n) / Math.log(16);	
		    return(String(Math.pow(10,j)));
	  }
	
    while (n > 1) {
	      str+=symbolHex[(Math.trunc(n%16))-1];
	      n/=16;
    }
    return '0x' + str.split("").reverse().join("");
};
console.log(toHex(420));