function identity(n){
	var i;
	var j;
	var s="";
	for (var i = 0; i < n; i++) {
	for (var j = 0; j < n; j++){
		if( j === i){
			s += 1
		}else{
			s +=0
		}
		if(j !== n)
			s += "\t";
	}
	console.log(s)
	s = "";
};
}