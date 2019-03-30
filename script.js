
var city = "Fort Lauderdale";

$.getJSON(
	"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=f6a884f969d9bf3dec495d94fb64adb9", 
	function(data){
		console.log(data);
		const header = document.querySelector('header');

		var icon = 
			"https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
		var temp = Math.floor(data.main.temp);
		var weather = data.weather[0].main;
		var windspeed = data.wind.speed;
		var winddeg = data.wind.deg;

/*		if (weather.match(new RegExp('(\\w*'+'cloudy'+'\\w*)','gi'))) {
			header.style.setProperty('--main-bg-image', 'images/cloudy.jpg');
		} else if (weather.match(new RegExp('(\\w*'+'rain'+'\\w*)','gi'))) {
			header.style.setProperty('--main-bg-image', 'images/rainy.jpg');
		else {
			header.style.setProperty('--main-bg-image', 'images/sunny.jpg');
		}
*/
		$('.icon').attr('src', icon);
		$('.weather').append(weather);
		$('.temp').append(temp + " degrees fahrenheit");
		$('.windspeed').append(windspeed + " mph");
		$('.winddeg').append(winddeg + " N");
	}
);