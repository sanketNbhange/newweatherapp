// this function will give weather data of india 3 different cities

$(document).ready(function () {
    let country_states = ['sanket'];
    $.map(country_states, function(state, i){
        console.log('hello');
        console.log(state);
    })
    console.log(country_states);
    console.log(country_states);
    let state1 = 'Chennai';
    let state2 = 'Gujrat';
    let state3 = 'Delhi';
    // first state data
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
            country_states +=
                `
                <div class="row justify-content-center">
                            <div class="col-sm-8 col md-8 col-lg-12">
                                <div class="card border-primary">
                                    <!-- <div class="row">
                        <div class="col text-center"><h4>Gandhinagar</h4></div>
                    </div> -->
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
                `
        }
    })

    // second state data
    // $.ajax({
    //     type: 'GET',
    //     dataType: 'json',
    //     url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${state2}`,
    //     success: function(res){
    //         let location_name=res.location.name;
    //         let current_temp = res.current.temp_c;
    //         let image = res.current.condition.icon;
    //         let condition = res.current.condition.text;
    //         let date_time = res.current.last_updated;
    //         let min_temp = res.forecast.forecastday[0].day.mintemp_c;
    //         let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
    //         let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
    //         let sunset_time = res.forecast.forecastday[0].astro.sunset;
    //         let hours = res.forecast.forecastday[0].hour;
    //         let chance_of_rain;
    //             $.map(hours, function(hour, i){
    //                 let hr_time = hour.time
    //                 if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
    //                 {
    //                     chance_of_rain = hour.chance_of_rain
    //                 }
    //             })
    //             let humidity = res.current.humidity;
    //             let wind_speed = res.current.wind_kph;
    //             let pressure = res.current.pressure_mb;
    //             country_states.push(
    //             `
    //             <div class="row justify-content-center">
    //                         <div class="col-sm-8 col md-8 col-lg-12">
    //                             <div class="card border-primary">
    //                                 <!-- <div class="row">
    //                     <div class="col text-center"><h4>Gandhinagar</h4></div>
    //                 </div> -->
    //                                 <div class="container">
    //                                     <div class="row justify-content-center">
    //                                         <div class="col-sm-8 col-md-4 col-lg-5">
    //                                             <h3 class="card-title text-center mt-2">${location_name} </h3>
    //                                             <hr>
    //                                             <h1 class="  text-center">${current_temp}&#8451</h1>
    //                                             <img class="mx-auto d-block"
    //                                                 src=${image} alt="">
    //                                             <h5 class=" text-center">${condition}</h5>
    //                                             <h6 class=" text-center">${date_time}</h6>
    //                                             <h6 class="card-text text-center mb-2"><span
    //                                                     class=" px-3">L:${min_temp}&#8451</span> <span
    //                                                     class="px-3 ">H:${max_temp}&#8451</span></h6>
    //                                         </div>
    //                                         <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Wind</span><span
    //                                                     class="float-right text-bold">${wind_speed}km/h</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Sunrise</span><span
    //                                                     class="float-right text-bold">${sunrise_time} AM</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Sunset</span><span
    //                                                     class="float-right text-bold">${sunset_time} PM</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Humidity</span><span
    //                                                     class="float-right text-bold">${humidity}%</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Chanses of rain</span><span
    //                                                     class="float-right text-bold">${chance_of_rain}%</span>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //             `)
    //     }
    // })
    // // third state data
    // $.ajax({
    //     type: 'GET',
    //     dataType: 'json',
    //     url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${state3}`,
    //     success: function(res){
    //         let location_name=res.location.name;
    //         let current_temp = res.current.temp_c;
    //         let image = res.current.condition.icon;
    //         let condition = res.current.condition.text;
    //         let date_time = res.current.last_updated;
    //         let min_temp = res.forecast.forecastday[0].day.mintemp_c;
    //         let max_temp = res.forecast.forecastday[0].day.maxtemp_c;
    //         let sunrise_time = res.forecast.forecastday[0].astro.sunrise;
    //         let sunset_time = res.forecast.forecastday[0].astro.sunset;
    //         let hours = res.forecast.forecastday[0].hour;
    //         let chance_of_rain;
    //         $.map(hours, function(hour, i){
    //             let hr_time = hour.time
    //             if(res.current.last_updated.slice(12,14) === hr_time.slice(12,14))
    //             {
    //                 chance_of_rain = hour.chance_of_rain
    //             }
    //         })
    //         let humidity = res.current.humidity;
    //         let wind_speed = res.current.wind_kph;
    //         let pressure = res.current.pressure_mb;
    //         country_states.push(
    //             `
    //             <div class="row justify-content-center">
    //                         <div class="col-sm-8 col md-8 col-lg-12">
    //                             <div class="card border-primary">
    //                                 <!-- <div class="row">
    //                     <div class="col text-center"><h4>Gandhinagar</h4></div>
    //                 </div> -->
    //                                 <div class="container">
    //                                     <div class="row justify-content-center">
    //                                         <div class="col-sm-8 col-md-4 col-lg-5">
    //                                             <h3 class="card-title text-center mt-2">${location_name} </h3>
    //                                             <hr>
    //                                             <h1 class="  text-center">${current_temp}&#8451</h1>
    //                                             <img class="mx-auto d-block"
    //                                                 src=${image} alt="">
    //                                             <h5 class=" text-center">${condition}</h5>
    //                                             <h6 class=" text-center">${date_time}</h6>
    //                                             <h6 class="card-text text-center mb-2"><span
    //                                                     class=" px-3">L:${min_temp}&#8451</span> <span
    //                                                     class="px-3 ">H:${max_temp}&#8451</span></h6>
    //                                         </div>
    //                                         <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Wind</span><span
    //                                                     class="float-right text-bold">${wind_speed}km/h</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Sunrise</span><span
    //                                                     class="float-right text-bold">${sunrise_time} AM</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Sunset</span><span
    //                                                     class="float-right text-bold">${sunset_time} PM</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Humidity</span><span
    //                                                     class="float-right text-bold">${humidity}%</span>
    //                                             </div>
    //                                             <hr>
    //                                             <div>
    //                                                 <span class="text-uppercase text-bold">Chanses of rain</span><span
    //                                                     class="float-right text-bold">${chance_of_rain}%</span>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //             `)
    //     }
    // })

})