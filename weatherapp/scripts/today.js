// current day weather data through a api

$(document).ready(function(){
    let cityName = localStorage.getItem('cityName');
    console.log(cityName);
    $.ajax({
        type:'GET',
        dataType:'json',
        url:`https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${cityName}`,
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
            localStorage.setItem('location_name', location_name)
            localStorage.setItem('current_temp', current_temp)
            let chance_of_rain;
            $.map(hours, function(hour, i){
                // let curent_time = current_time;
                let hr_time = hour.time
                if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                {
                    chance_of_rain = hour.chance_of_rain
                }
            })
            // let chance_of_rain = res.forecast.forecastday[0].hour[].chance_of_rain;
            // let 
            let humidity = res.current.humidity;
            let wind_speed = res.current.wind_kph;
            let pressure = res.current.pressure_mb;
        //    nav-bar temp
            let nav_temp =
           `<h5 class="mt-3 text-white"><span class="">${location_name}</span><span class="mx-2">${current_temp}&#8451</span></h5>`
        // display nav-data
           $('#nav-temp').html(nav_temp)
           //  current hour temp
            let current_time = 
            ` <div class="col-sm-8 col-md-8 col-lg-9">
                        <div class="card">
                           <div class="container justify-content-center">
                            <h3 class="card-title text-center mt-2">${location_name}</h3>
                            <hr>
                            <h1 class="  text-center">${current_temp}&#8451</h1>
                            <img class="mx-auto d-block" src=${image} alt="">
                            <h5 class=" text-center">${condition}</h5>
                            <h6 class=" text-center">${date_time}</h6>
                            <h6 class="card-text text-center mb-2"><span class=" px-3">L:${min_temp}&#8451</span> <span class="px-3 ">H:${max_temp}&#8451</span></h6>
                        </div>
                        </div>
                    </div>
            `
            // display current hour temp
            $('#current_time').html(current_time);

            // comming three hour data

            let comming_three_hour = [];
            let count = 0;
            $.map(hours, function(hour, i){
                if(res.location.localtime < hour.time && count <3)
                {
                    count = count + 1;
                    comming_three_hour +=`
                    <div class="col-sm-8 col-md-8 col-lg-3 mt-2">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title text-center  ">${hour.time.slice(11,16)}</h5>
                                <img class="mx-auto d-block" src=${hour.condition.icon} alt="">
                                <h5 class="card-text  text-center">${hour.temp_c}&#8451</h5>
                                <h6 class=" text-center">${hour.condition.text}</h6>
                            </div>
                        </div>
                    </div>
                    ` 
                }
            })
            $('#comming_three_hour').html(comming_three_hour);

            // extra data sunrise sunset
            let related_data = `
            <div class="row justify-content-center mt-3" >
            <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx spacing-left">
                <div class="card">
                <div class="container">
                   <div class="card-title  py-3 mb-2"><h6><span class="float-left">SUNRISE</span> <span class="float-right text-muted">${sunrise_time}</span></h6></div>
                </div>
            </div>
            </div>
            <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx spacing-right">
                <div class="card">
                    <div class="container">
                        <div class="card-title  py-3 mb-2 "><h6><span class="float-left">SUNSET</span> <span class="float-right text-muted">${sunset_time}</span></h6></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx">
                <div class="card">
                <div class="container">
                   <div class="card-title  py-3 mb-2"><h6><span class="float-left">CHANCES OF RAIN</span> <span class="float-right text-muted">${chance_of_rain}%</span></h6></div>
                </div>
            </div>
            </div>
            <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx">
                <div class="card">
                    <div class="container">
                        <div class="card-title  py-3 mb-2"><h6><span class="float-left">HUMIDITY</span> <span class="float-right text-muted">${humidity}%</span></h6></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx">
                <div class="card">
                <div class="container">
                   <div class="card-title  py-3 mb-2"><h6><span class="float-left ">WIND SPEED</span> <span class="float-right text-muted">${wind_speed} KpH</span></h6></div>
                </div>
            </div>
            </div>
            <div class="col-sm-4 col-md-8 col-lg-4 mt-2 mx">
                <div class="card">
                    <div class="container">
                        <div class="card-title  py-3 mb-2"><h6><span class="float-left">PRESSURE</span> <span class="float-right text-muted">${pressure} Mb</span></h6></div>
                    </div>
                </div>
            </div>
        </div>
            `
            // display related data
            $('#related_data').html(related_data);
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
                localStorage.setItem('location_name', location_name)
                localStorage.setItem('current_temp', current_temp)
                let chance_of_rain;
                $.map(hours, function(hour, i){
                    // let curent_time = current_time;
                    let hr_time = hour.time
                    if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
                    {
                        chance_of_rain = hour.chance_of_rain
                    }
                })
                // let chance_of_rain = res.forecast.forecastday[0].hour[].chance_of_rain;
                // let 
                let humidity = res.current.humidity;
                let wind_speed = res.current.wind_kph;
                let pressure = res.current.pressure_mb;
            //    nav-bar temp
                let nav_temp =
               `<h5 class="mt-3 text-white"><span class="">${location_name}</span><span class="mx-2">${current_temp}&#8451</span></h5>`
            // display nav-data
               $('#nav-temp').html(nav_temp)
               //  current hour temp
                let current_time = 
                ` <div class="col-sm-8 col-md-8 col-lg-9">
                            <div class="card">
                               <div class="container justify-content-center">
                                <h3 class="card-title text-center mt-2">${location_name}</h3>
                                <hr>
                                <h1 class="  text-center">${current_temp}&#8451</h1>
                                <img class="mx-auto d-block" src=${image} alt="">
                                <h5 class=" text-center">${condition}</h5>
                                <h6 class=" text-center">${date_time}</h6>
                                <h6 class="card-text text-center mb-2"><span class=" px-3">L:${min_temp}&#8451</span> <span class="px-3 ">H:${max_temp}&#8451</span></h6>
                            </div>
                            </div>
                        </div>
                `
                // display current hour temp
                $('#current_time').html(current_time);
    
                // comming three hour data
    
                let comming_three_hour = [];
                let count = 0;
                $.map(hours, function(hour, i){
                    if(res.location.localtime < hour.time && count <3)
                    {
                        count = count + 1;
                        comming_three_hour +=`
                        <div class="col-sm-8 col-md-8 col-lg-3 mt-2">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title text-center  ">${hour.time.slice(11,16)}</h5>
                                    <img class="mx-auto d-block" src=${hour.condition.icon} alt="">
                                    <h5 class="card-text  text-center">${hour.temp_c}&#8451</h5>
                                    <h6 class=" text-center">${hour.condition.text}</h6>
                                </div>
                            </div>
                        </div>
                        ` 
                    }
                })
                $('#comming_three_hour').html(comming_three_hour);
    
                // extra data sunrise sunset
                let related_data = `
                <div class="row justify-content-center mt-3" >
                <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx spacing-left">
                    <div class="card">
                    <div class="container">
                       <div class="card-title  py-3 mb-2"><h6><span class="float-left">SUNRISE</span> <span class="float-right text-muted">${sunrise_time}</span></h6></div>
                    </div>
                </div>
                </div>
                <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx spacing-right">
                    <div class="card">
                        <div class="container">
                            <div class="card-title  py-3 mb-2 "><h6><span class="float-left">SUNSET</span> <span class="float-right text-muted">${sunset_time}</span></h6></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx">
                    <div class="card">
                    <div class="container">
                       <div class="card-title  py-3 mb-2"><h6><span class="float-left">CHANCES OF RAIN</span> <span class="float-right text-muted">${chance_of_rain}%</span></h6></div>
                    </div>
                </div>
                </div>
                <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx">
                    <div class="card">
                        <div class="container">
                            <div class="card-title  py-3 mb-2"><h6><span class="float-left">HUMIDITY</span> <span class="float-right text-muted">${humidity}%</span></h6></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mt-3">
                <div class="col-sm-8 col-md-8 col-lg-4 mt-2 mx">
                    <div class="card">
                    <div class="container">
                       <div class="card-title  py-3 mb-2"><h6><span class="float-left ">WIND SPEED</span> <span class="float-right text-muted">${wind_speed} KpH</span></h6></div>
                    </div>
                </div>
                </div>
                <div class="col-sm-4 col-md-8 col-lg-4 mt-2 mx">
                    <div class="card">
                        <div class="container">
                            <div class="card-title  py-3 mb-2"><h6><span class="float-left">PRESSURE</span> <span class="float-right text-muted">${pressure} Mb</span></h6></div>
                        </div>
                    </div>
                </div>
            </div>
                `
                // display related data
                $('#related_data').html(related_data);
            }
        })
    })
})