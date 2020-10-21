https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=London&days=2

var cityName;
var longitude;
var latitude;
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
    latitude = position.coords.latitude  
    longitude = position.coords.longitude;
  }
  getLocation();
// home page data
// thi function will display the current temp, and the comming threee hour temp including air quality min mix temp etc.
$(document).ready(function(){
    let location_name = localStorage.getItem('location_name')
    console.log(location_name);
    let current_temp = localStorage.getItem('current_temp')
      $.ajax({
        type:'GET',
        dataType:'json',
        url:`https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${latitude},${longitude}`,
        success: function(res){
            localStorage.setItem('cityName',res.location.name);
            console.log(res);
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            localStorage.setItem('location_name', location_name)
            localStorage.setItem('current_temp', current_temp)
            let nav_temp =
            `<h5 class="mt-3 text-white"><span class="">${location_name}</span><span class="mx-2">${current_temp}&#8451</span></h5>`
            // display nav-data
           $('#nav-temp').html(nav_temp)
        }
    })


    $('#search').click(function(){
        cityName = $('#cityName').val();
        localStorage.setItem('cityName', cityName);
        $.ajax({
            type:'GET',
            dataType:'json',
            url:`https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${cityName}`,
            success: function(res){
                let current_temp = res.current.temp_c;
                let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
                let min_temp = res.forecast.forecastday[0].day.mintemp_c;
                // one_Hour_later:{
                // }
                let hours = [];
                hours = res.forecast.forecastday[0].hour;
                let comming_four_hour_forecast = []
                $.map(hours, function(hour, i){
                    let count=0;
                    if(res.current.last_updated <= hour.time)
                    {
                        comming_four_hour_forecast.push(hour);
                        count +=1;
                    }
                })
                console.log(comming_four_hour_forecast);
                let one_Hour_later_temp = comming_four_hour_forecast[0].temp_c;
                let two_Hour_later_temp = comming_four_hour_forecast[1].temp_c;
                // let three_Hour_later_temp = comming_four_hour_forecast[2].temp_c;
               // let four_Hour_later_temp =comming_four_hour_forecast[3].temp_c;
                let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
                let sunset_time = res.forecast.forecastday[0].astro.sunset;
                let humidity = res.current.humidity;

                // if required then only use follwing object
                let image = res.current.condition.icon;
                let condition = res.current.condition.text;

                // will work on this variable later
                // let chances_of_rain;
                // $.map(hours, function(hour, i){
                //     if(current.last_updated === hour.time && count < 4)
                //     {
                //         comming_four_hour_forecast.push(hour);
                //         count +=1;
                //     }
                // })
                console.log("current-tem"+current_temp);
                console.log("min_temp"+min_temp);
                console.log("max_temp"+max_temp);
                console.log("one_Hour_later_temp"+one_Hour_later_temp);
                console.log("two_Hour_later_temp"+two_Hour_later_temp);
                //console.log("three_Hour_later_temp"+three_Hour_later_temp);
               // console.log("four_Hour_later_temp"+four_Hour_later_temp);
                console.log("sunrise_time"+sunrise_time);
                console.log("sunset_time"+sunset_time);
                console.log("humidity"+humidity);
                console.log("image"+image);
                console.log("condition"+condition);
            }
        })
    })
})


// hourly temp data
// it will show the temp of current hour and comming hours(till 12)
$(document).ready(function(){
    $('#searchh').click(function(){
        $.ajax({
            type:'GET',
            dataType:'json',
            url:`https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${cityName}`,
            success: function(res){
                let day_hours = [];
                let hours = res.forecast.forecastday[0].hour;
                console.log(hours);
                $.map(hours, function(hour, i){
                    if(res.current.last_updated <= hour.time)
                    {
                         day_hours.push(hour);
                    }
                })
                console.log(day_hours);
            }
        })
    })
})


//daily weather data
//this function will show daily forecast cast 
// current day and the comming three days

$(document).ready(function(){
    $('#searchd').click(function(){
        $.ajax({
            type:'GET',
            dataType:'json',
            url:`https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${cityName}&days=${3}`,
            success: function(res){
                let days = []
                $.map(res.forecast.forecastday, function(day, i){
                    days.push(day);
                })
                console.log(days);
            }
        })
    })
})