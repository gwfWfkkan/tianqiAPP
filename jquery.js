/*
* @Author: gf880623
* @Date:   2018-09-14 18:06:29
* @Last Modified by:   gf880623
* @Last Modified time: 2018-09-15 12:11:35
*/
$(function(){
	let weather;
	$.ajax({
		url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
		dataType:"jsonp",
		success:function(res){
			weather=res.data.weather;
			console.log(weather);
			renter(weather);
		}
	});
	function renter(obj){
		$(".shiqu").html(`${obj.city_name}市`);
		$(".zhiliang").html(obj.quality_level);
		$(".du").html(`${obj.current_temperature}°`);
		$(".zhuangkuang").html(obj.current_condition);
		$(".p2").html(obj.dat_condition);
		$(".p5").html(obj.tomorrow_condition);
		$(".height").html(obj.dat_high_temperature);
		$(".di").html(obj.dat_low_temperature);
		$(".height1").html(obj.tomorrow_high_temperature);
		$(".di1").html(obj.tomorrow_low_temperature);
		$(".tianqi").css("background",`url("img/${obj.dat_weather_icon_id}.png")`);
		$(".tianqi1").css("background",`url("img/${obj.tomorrow_weather_icon_id}.png")`);
		
		console.log(obj.hourly_forecast)
		obj.hourly_forecast.forEach(function(item,index){
			let str="";
			str=`<li>
				<div class="shijian">
					${item.hour}:00
				</div>
				<div class="tup" style="background-image:url('img/${item.weather_icon_id}.png')"></div>
				<div class="dushu">${item.temperature}°</div>
			</li>`;
			$("ul").append(str);
		})
		obj.forecast_list.forEach(function(value){
			let arr="";
			arr=`<div class="son">
				<div class="riqi">${value.date.slice(5,10)}</div>
				<div class="yun">${value.condition}</div>
				<div class="pic-box" style="background-image:url('img/${value.weather_icon_id}.png')"></div>
			</div>`;
			$(".xinqi-box-q").append(arr);
			let inner="";
			inner=`<div class="xx-son">
				<div class="xx-pic" style="background-image:url('img/${value.weather_icon_id}.png')"></div>
				<div class="xx-yun">${value.condition}</div>
				<div class="fenji"><p>${value.wind_direction}</p><span>${value.wind_level}</span>级</div>	
			</div>`;
			$(".xx-box").append(inner);
		})
		console.log($("zhiliang"))
	}
	
})