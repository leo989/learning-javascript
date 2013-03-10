function pusher(n){
	var arr = [];
	for(var i=0; i < n; i++){
		arr[i] = Math.floor(Math.random()*100);
	}
	return arr;
}
var numbers = pusher(10);
console.log(numbers);
numbers = numbers.filter(function (item){
	return item % 2 !== 0;
})
console.log(numbers);
numbers = numbers.sort(function (a,b){
	return a - b;
})