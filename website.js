

var weatherLink = document.getElementById("weatherLink");

weatherLink.onclick =  function(){
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "weather.js";
	document.getElemenByTagName('head')[0].appendChild(script);
	return false;
}

var weatherLink = document.getElementById("pongLink");

weatherLink.onclick =  function(){
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "PingPongJava.js";
	document.getElemenByTagName('head')[0].appendChild(script);
	return false;
}

var snakeLink = document.getElementById("snakeLink");

function snakeLink()
{
	window.open("snake.html");
}

