var data = [
  {id:'01', name:'duffy'},
  {id:'02', name:'michey'},
  {id:'03', name:'donald'},
  {id:'04', name:'goofy'},
  {id:'05', name:'minnie'},
  {id:'06', name:'scrooge'}
];
var key = 'name';
var values = ['goofy', 'scrooge'];

function select(data, key, values){
	console.log(data);
	return data.filter(function (item){
		console.log(item);
		return values.some(function (val){
			console.log(values);
			console.log(val);
			console.log(item.key);
			return item[key]=== val;
		})
	})
}