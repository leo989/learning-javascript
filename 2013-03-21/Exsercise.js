//ES01
function Point2D(x,y){
	this.x = x;
	this.y = y;
}

//ES02a
function Edge(a,b){
	this.a = a;
	this.b = b;
	this.length = function(){
		return Math.sqrt(Math.pow((a.x - b.x),2)+Math.pow((a.y - b.y),2));
	};
}

//ES03
function Triangle(a,b,c){
	this.a = a;
	this.b = b;
	this.c = c;
	this.perimether = function (){
		return a.length() + b.length() + c.length();
	}
	this.area = function (){
		var p = this.perimether()/2;
		return Math.sqrt(p*(p-this.a.length())*(p-this.b.length())*(p-this.c.length()));
	}
}