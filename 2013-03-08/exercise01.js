function push_n (n){
	var arr = [];
	for (var i=0; i < n; i++){
		arr[i] = i;
	}
	return arr;
}

var numbers = push_n(10);
numbers;
var odd = numbers.filter(function (item){
	return item % 2 === 0;
})
odd;
var dob = odd.map(function (item){
	return item * 2;
})
dob;
var div_of_four = dob.filter(function (item){
	return item % 4 === 0;
})
div_of_four;
var tot = div_of_four.reduce(function (prev, cur){
	return prev + cur;
})
tot;