// this function will give weather data of india 3 different cities

$(document).ready(function () {
    let country_states =[];
    $.map(country_states, function(state, i){
        console.log('hello');
        console.log(state);
    })
    console.log(country_states);
    console.log(country_states);
    var state1 = 'Chennai';
    var state2 = 'Gujrat';
    var state3 = 'Delhi';

        // country_states.push(`
        // <h2>Testing of array</h2>
        // `)
        // country_states.push(`
        // <h2>Tesrray</h2>
        // `)

        // console.log(country_states[1])
    $("#second_state").html(country_states[0])
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${state1}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            country_states.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name}</h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
                $('#first_state').html(country_states[0])
        }
    })

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${state2}`,
        success: function(res){
            let location_name=res.location.name;
            console.log(location_name);
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
                $.map(hours, function(hour, i){
                    let hr_time = hour.time
                    if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                    {
                        chance_of_rain = hour.chance_of_rain
                    }
                })
                let humidity = res.current.humidity;
                let wind_speed = res.current.wind_kph;
                let pressure = res.current.pressure_mb;
                country_states.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                   
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name}</h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
                $('#second_state').html(country_states[1])
        }
    })
    // third state data
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${state3}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            country_states.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                  
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name} </h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
                $('#third_state').html(country_states[2])
        }
    })

})

// 3 cities of Maharashtra
$(document).ready(function(){
    var state_cities = [];
    let city1 = 'pune';
    let city2 = 'Mumbai'; 
    let city3 = 'Nagpur'; 
    console.log('hello');

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${city1}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            state_cities.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                  
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name} </h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
                console.log(state_cities);
                $('#first_city').html(state_cities[0])
        }
    })
    
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${city2}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            state_cities.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                  
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name} </h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
             
                $('#second_city').html(state_cities[1])
        }
    })
    
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${city3}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            state_cities.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                  
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name} </h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
                $('#third_city').html(state_cities[2])
        }
    })
    

})

// different country different state or city
$(document).ready(function(){
    var Countries = [];
    let country1 = 'America';
    let country2 = 'Russia'; 
    let country3 = 'las vegas'; 
    console.log('hello');

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${country1}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            Countries.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                  
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name} </h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
                console.log(Countries);
                $('#first_country').html(Countries[0])
        }
    })
    
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${country2}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            Countries.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                  
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name} </h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
             
                $('#second_country').html(Countries[1])
        }
    })
    
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${country3}`,
        success: function(res){
            let location_name=res.location.name;
            let current_temp = res.current.temp_c;
            let image = res.current.condition.icon;
            let condition = res.current.condition.text;
            let date_time = res.current.last_updated;
            let min_temp = res.forecast.forecastday[0].day.mintemp_c;
            let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
            let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
            let sunset_time = res.forecast.forecastday[0].astro.sunset;
            let hours = res.forecast.forecastday[0].hour;
            let chance_of_rain;
            $.map(hours, function(hour, i){
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
            Countries.push(
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                  
                                    <div class="container">
                                        <div class="row justify-content-center">
                                            <div class="col-sm-8 col-md-4 col-lg-5">
                                                <h3 class="card-title text-center mt-2">${location_name} </h3>
                                                <hr>
                                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                                <img class="mx-auto d-block"
                                                    src=${image} alt="">
                                                <h5 class=" text-center">${condition}</h5>
                                                <h6 class=" text-center">${date_time}</h6>
                                                <h6 class="card-text text-center mb-2"><span
                                                        class=" px-3">L:${min_temp}&#8451</span> <span
                                                        class="px-3 ">H:${max_temp}&#8451</span></h6>
                                            </div>
                                            <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                                <div>
                                                    <span class="text-uppercase text-bold">Wind</span><span
                                                        class="float-right text-bold">${wind_speed}km/h</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                        class="float-right text-bold">${sunrise_time} AM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Sunset</span><span
                                                        class="float-right text-bold">${sunset_time} PM</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Humidity</span><span
                                                        class="float-right text-bold">${humidity}%</span>
                                                </div>
                                                <hr>
                                                <div>
                                                    <span class="text-uppercase text-bold">Chanses of rain</span><span
                                                        class="float-right text-bold">${chance_of_rain}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `)
             
                $('#third_country').html(Countries[2])
        }
    })
    

})