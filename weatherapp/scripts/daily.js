$(document).ready(function () {
    cityName = localStorage.getItem('cityName');
    location_name = localStorage.getItem('location_name')
    current_temp = localStorage.getItem('current_temp')
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: `https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${cityName}&days=${3}`,
        success: function (res) {
            let days = [];
            $.map(res.forecast.forecastday, function (day, i) {
                let chance_of_rain;
                let index = 0;
                let hours = day.hour;
                let humidity;
                let wind_kph;
                let nav_temp =
           `<h5 class="mt-3 text-white"><span class="">${location_name}</span><span class="mx-2">${current_temp}&#8451</span></h5>`
        // display nav-data
           $('#nav-temp').html(nav_temp)
                $.map(hours, function (hour, i) {
                    if (res.current.last_updated.slice(12, 14) === hour.time.slice(12, 14)) {
                        chance_of_rain = hour.chance_of_rain;
                        temp_c = hour.temp_c;
                        humidity = hour.humidity;
                        wind_kph = hour.wind_kph;
                        time = hour.time;
                    }
                })
                console.log(day);
                days +=
                    `
                    <div class="row justify-content-center mt-2">
                    <div class="col-sm-8 col md-8 col-lg-10">
                        <div class="card border-primary">
                            <!-- <div class="row">
                                <div class="col text-center"><h4>Gandhinagar</h4></div>
                            </div> -->
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-sm-8 col-md-4 col-lg-5">
                                    <h3 class="card-title text-center mt-2">${res.location.name}</h3>
                                        <hr>
                                        <h1 class="  text-center">${temp_c}&#8451</h1>
                                                                 <img class="mx-auto d-block" src=${day.day.condition.icon}
                                                                     alt="">
                                                                 <h5 class=" text-center">${day.day.condition.text}</h5>
                                                                 <h6 class=" text-center">${time}</h6>
                                                                 <h6 class="card-text text-center mb-2"><span class=" px-3">L:${day.day.mintemp_c}&#8451</span> <span
                                                                         class="px-3 ">H:${day.day.maxtemp_c}&#8451</span></h6>
                                    </div>
                                    <div class="col-sm-8 col-md-4 col-lg-6 pt-3">
                                    <div>
                                                                 <span class="text-uppercase text-bold">Wind</span><span
                                                                     class="float-right text-bold">${wind_kph}km/h</span>
                                                             </div>
                                        <hr>
                                                                 <div>
                                                                    <span class="text-uppercase text-bold">Sunrise</span><span
                                                                         class="float-right text-bold">${day.astro.sunrise}</span>
                                                                 </div>
                                                               <hr>
                                                                 <div>
                                                                     <span class="text-uppercase text-bold">Sunset</span><span
                                                                         class="float-right text-bold">${day.astro.sunset}</span>
                                                                 </div>
                                        <hr>
                                        <div>
                             <span class="text-uppercase text-bold">Humidity</span><span
                                 class="float-right text-bold">${humidity}</span>
                         </div>
                         <hr>
                         <div>
                             <span class="text-uppercase text-bold">Chanses of rain</span><span
                                 class="float-right text-bold">${chance_of_rain}</span>
                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `


                index = index + 1;
            })
            $('#daily_data').html(days);
        }
    })
})