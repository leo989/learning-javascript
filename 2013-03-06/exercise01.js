var i;
var j;
var s="";
for (var i = 1; i < 11; i++) {
	for (var j = 1; j < 11; j++){
		 s += i*j;
		 s += "\t";
	}
	console.log(s)
	s = "";
};