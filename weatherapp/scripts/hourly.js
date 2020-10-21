// this page contains hourly weather data of selected city

$(document).ready(function(){
    let cityName = localStorage.getItem('cityName');
    location_name = localStorage.getItem('location_name')
    console.log(location_name);
    current_temp = localStorage.getItem('current_temp')
    console.log('helo');
    $.ajax({
        type:'GET',
        dataType:'json',
        url:`https://api.weatherapi.com/v1/forecast.json?key= bbc798b0eee74f63861130724201710&q=${cityName}`,
        success: function(res){
            let hours = res.forecast.forecastday[0].hour;
            let day_hour = []
            let nav_temp =
           `<h5 class="mt-3 text-white"><span class="">${location_name}</span><span class="mx-2">${current_temp}&#8451</span></h5>`
        // display nav-data
           $('#nav-temp').html(nav_temp)
            $.map(hours, function(hour, i){
                if(res.location.localtime <= hour.time){
                    console.log(hour);
                day_hour += `
                <div class="row justify-content-center mt-2">
                <div class="col-sm-8 col-md-8 col-lg-10">
                    <div class="card">
                        <div class="card-body">
                            <!-- <div class="container"> -->
                            <div class="row hr-data">
                                <div class="col-sm-8 col-md-4 col-lg-2">
                                    <h6>${hour.time.slice(11, 16)}</h6>
                                    <h6>${hour.time.slice(5,7)}/${hour.time.slice(8,11)}</h6>
                                </div>
                                <div class="col-sm-8 col-md-4 col-lg-2">
                                    <img class="img-mrg" src=${hour.condition.icon} alt="">
                                </div>
                                <div class="col-sm-8 col-md-4 col-lg-2 py-3">
                                    <h3 class="hr-temp">${hour.temp_c}&#8451</h3>
                                </div>
                                <div class="col-sm-8 col-md-4 col-lg-2 py-3">
                                    <span class="hr-text text-muted">RealFeel ${hour.feelslike_c}&#8451</span>
                                </div>
                                <div class="col-sm-8 col-md-4 col-lg-3 py-3">
                                    <span class="hr-heading">${hour.condition.text}</span>
                                </div>
                                <div class="col-sm-8 col-md-4 col-lg-1 py-3">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-droplet"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z" />
                                        <path fill-rule="evenodd"
                                            d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z" />
                                    </svg>${hour.chance_of_rain}
                                </div>
                            </div>
                            <!-- </div> -->
                        </div>
                    </div>
                </div>
            </div>
                `
                }
            })
            $('#day_hours').html(day_hour)
        }
    })
})