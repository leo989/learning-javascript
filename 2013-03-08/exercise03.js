function capitalize (word){
	var first = word.charAt(0).toUpperCase();
	return first + (word.slice(1));
}
var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
function capText (text){
	var arr = text.split(" ");
	arr = arr.map(capitalize);
	return arr.reduce(function (a,b){
		return a+" "+b;
	});
}
